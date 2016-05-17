import { addRemark } from './actions/Remarks';
import Store from './Store';

var socket = new WebSocket('ws://remark-api.alterego-labs.com/ws');
socket.onopen = function() {
  window.console.log('Opened!');
}
socket.onclose = function() {
  window.console.log('Closed!');
}
socket.onmessage = function(event) {
  window.console.log(event.data);
  Store.dispatch(addRemark( JSON.parse(event.data) ));
}
socket.onerror = function(error) {
  window.console.log('Error ' + error);
}

export default socket;
