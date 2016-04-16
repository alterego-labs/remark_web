import React from 'react';
// import { Link } from 'react-router'

let Avatar = require('../../../images/Avatar.png');

class Profile extends React.Component {
  render() {
    return (
      <div className="block user-profile">
        <img className="user-profile__avatar" src={ Avatar } title="" alt="" />
        <div className="user-profile__footer">
          <span className="fullname">Leonardo Pomazotti</span>
          <span className="login">@leonardo</span>
        </div>
      </div>
    );
  }
}

Profile.defaultProps = {
  user: React.PropTypes.object.isRequired
};

export default Profile;
