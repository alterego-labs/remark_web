import { LOAD_REMARKS } from '../actions/Remarks';

const Remarks = (state = [], action) => {
  // debugger;
  switch (action.type) {
    case LOAD_REMARKS:
      let remarks = state.collection || [];
      return Object.assign({}, state, {
        collection: remarks.concat(action.remarks)
      });
    default:
      return state;
  }
}

export default Remarks;
