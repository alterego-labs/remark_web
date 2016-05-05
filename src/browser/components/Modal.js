import React from 'react';
import { Link } from 'react-router';

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-background">
          <div className="modal-window">
            <Link to={this.props.returnTo} className="close">&#215;</Link>
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
