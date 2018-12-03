import * as types from '../constants/action-types';

export function beginAjaxCall() {
  return {type: types.BEGIN_AJAX_CALL};
}


export function ajaxCallError() {
  return {type: types.AJAX_CALL_ERROR};
}