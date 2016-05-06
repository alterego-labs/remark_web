import React from 'react';
import _ from 'lodash';
import Remarks from './Remarks';

import { loadRemarks } from '../../actions/Remarks';

import Infinity from '../../components/Infinity';

import RemarksAPI from '../../utils/api/Remarks';

import Store from '../../Store';

class InfinityRemarks extends React.Component {

  constructor(props) {
    super(props);
    this.getItems();
  }

  getItems() {
    RemarksAPI.getList(this.getParams())
      .then((response) => {
        Store.dispatch(loadRemarks(response.data.messages));
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
    return this.getItems();
  }

  render() {
    return (
      <Infinity onBottom={ event => this.onBottom(event) }>
        <Remarks remarks={ this.props.remarks } />
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
