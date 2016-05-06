import React from 'react';
import _ from 'lodash';
import Remarks from './Remarks';

import { loadRemarks } from '../../actions/Remarks';

import Infinity from '../../components/Infinity';
import DotsSpinner from '../../components/spinners/Dots';

import RemarksAPI from '../../utils/api/Remarks';

import Store from '../../Store';

class InfinityRemarks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    this.getItems();
  }

  getItems() {
    RemarksAPI.getList(this.getParams())
      .then((response) => {
        Store.dispatch(loadRemarks(response.data.messages));
        this.setState({ loading: false });
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
  remarks: React.PropTypes.array.isRequired
};

InfinityRemarks.defaultProps = {
  remarks: []
};

export default InfinityRemarks;
