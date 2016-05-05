export const LOAD_REMARKS = 'LOAD_REMARKS';
export const ADD_REMARK   = 'ADD_REMARK';

export function loadRemarks (collection) {
  return {
    type: LOAD_REMARKS,
    remarks: collection
  }
}

export function addRemark (record) {
  return {
    type: ADD_REMARK,
    remark: record
  }
}
