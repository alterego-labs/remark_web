import { List } from 'immutable';

import { LOAD_REMARKS, ADD_REMARKS, ADD_REMARK, CLEAN_REMARKS } from '../actions/Remarks';

const initialState = List([]);

const Remarks = (remarks = initialState, action) => {
  switch (action.type) {
    case LOAD_REMARKS:
      return List(action.remarks);
    case ADD_REMARKS:
      return remarks.concat(List(action.remarks));
    case ADD_REMARK:
      return remarks.unshift(action.remark);
    case CLEAN_REMARKS:
      return remarks.clear();
    default:
      return remarks;
  }
}

export default Remarks;
