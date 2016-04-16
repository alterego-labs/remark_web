import React from 'react';
import ProfileBlock from '../blocks/user/Profile';
import NavbarBlock from '../blocks/Navbar';
import Remarks from '../views/remarks/Remarks';


class HomePage extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="row">
          <div className="col-lg-3">
            <div className="page__sidebar">
              <ProfileBlock user={ {} } />
              <div className="block action">
                <button className="btn btn--lg btn--primary">Write remark</button>
              </div>
              <NavbarBlock />
            </div>
          </div>
          <div className="page__body col-lg-8">
            <Remarks remarks={ [{}, {}, {}, {}] } />
          </div>
        </div>
      </div>
    );
  }
}

HomePage.defaultProps = {
};

export default HomePage;
