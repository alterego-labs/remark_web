import React from 'react';
import Remarks from './Remarks';

import { loadRemarks, cleanRemarks } from '../../actions/Remarks';

import Infinity from '../../components/Infinity';
import DotsSpinner from '../../components/spinners/Dots';

import Store from '../../Store';

class InfinityRemarks extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true, end: false };
    Store.dispatch(cleanRemarks());
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    this.props.onLoad(this.getParams())
      .then((response) => {
        const remarks = response.data.messages;
        Store.dispatch(loadRemarks(remarks));
        this.setState({ loading: false, end: remarks.length === 0 });
        return response;
      }).catch(function(ex) {
        window.console.log('parsing failed', ex);
      });
  }

  getLastItem() {
    if (!this.props.remarks || this.props.remarks.size === 0) return null;
    return this.props.remarks.last();
  }

  getParams() {
    let lastItem = this.getLastItem();
    return lastItem ? { last_message_id: lastItem.id } : null;
  }

  onBottom() {
    if (this.state.end || this.state.loading) return false;
    return this.setState({ loading: true }, () => {
      this.getItems();
    });
  }

  render() {
    return (
      <Infinity onBottom={ event => this.onBottom(event) }>
        <Remarks remarks={ this.props.remarks } />
        <DotsSpinner show={ this.state.loading } className="spinner--sm" />
      </Infinity>
    );
  }
}

InfinityRemarks.propTypes = {
  remarks: React.PropTypes.array.isRequired,
  onLoad: React.PropTypes.func.isRequired
};

InfinityRemarks.defaultProps = {
  remarks: []
};

export default InfinityRemarks;
