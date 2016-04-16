export const LOAD_REMARKS = 'LOAD_REMARKS';

export function loadRemarks (collection) {
  return {
    type: LOAD_REMARKS,
    remarks: collection
  }
}
