import React from 'react';
import { Link } from 'react-router';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.styles = {
      position: 'fixed',
      top: '20%',
      right: '20%',
      bottom: '20%',
      left: '20%',
      padding: 20,
      boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
      overflow: 'auto',
      background: '#fff'
    };
  }


  render() {
    return (
      <div className="modal">
        <div className="modal-background">
          <div className="modal-window">
            <Link to={this.props.returnTo}>Back</Link>
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
