export const LOAD_REMARKS  = 'LOAD_REMARKS';
export const ADD_REMARK    = 'ADD_REMARK';
export const CLEAN_REMARKS = 'CLEAN_REMARKS';

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

export function cleanRemarks () {
  return {
    type: CLEAN_REMARKS
  }
}
