import React from 'react';
import { Link } from 'react-router';

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child) => React.cloneElement(child, { back: this.props.returnTo })
    );
    return (
      <div className="modal">
        <div className="modal-background">
          <div className="modal-window">
            <Link to={ this.props.returnTo } className="close">&#215;</Link>
            { childrenWithProps }
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
