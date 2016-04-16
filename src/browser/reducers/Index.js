import { LOAD_REMARKS } from '../actions';

const Remarks = (state = [], action) => {
  switch (action.type) {
    case LOAD_REMARKS:
      return Object.assign({}, state, {
        remarks: action.remarks
      });
    default:
      return state;
  }
}

export default Remarks;
