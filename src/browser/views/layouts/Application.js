import React from 'react';
import { Link } from 'react-router';
import Topbar from '../../blocks/Topbar';
import Modal from '../../components/Modal';

class Application extends React.Component {


  componentWillReceiveProps(nextProps) {
    // if we changed routes...
    if ((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      // save the old children (just like animation)
      this.previousChildren = this.props.children;
    }
  }

  render() {

    let { location } = this.props

    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )

    let className = isModal ? " modal" : "";
    document.body.className = className;

    return (
      <div className="application">
        <Topbar />
        <div className="container">
          {isModal ?
            this.previousChildren :
            this.props.children
          }

          {isModal && (
            <Modal returnTo={location.state.returnTo}>
              {this.props.children}
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

Application.defaultProps = {
};

export default Application;
