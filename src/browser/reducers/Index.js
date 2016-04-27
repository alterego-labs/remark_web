import { LOAD_REMARKS } from '../actions';

const Remarks = (state = [], action) => {
  // debugger;
  switch (action.type) {
    case LOAD_REMARKS:
      let remarks = state.remarks || [];
      return Object.assign({}, state, {
        remarks: remarks.concat(action.remarks)
      });
    default:
      return state;
  }
}

export default Remarks;
