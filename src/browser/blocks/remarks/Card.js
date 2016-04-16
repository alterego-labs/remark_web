import React from 'react';
// import { Link } from 'react-router'

let Avatar = require('../../../images/Avatar2.png');

class Card extends React.Component {
  render() {
    return (
      <div className="block block--land remark-card">
        <div className="remark-card__header">
          <img className="remark-card__avatar" src={ Avatar } title="" alt="" />
          <span className="remark-card__fullname">Leonardo Pomazotti</span>
          <span className="remark-card__login">@leonardo</span>
          <span className="remark-card__time">10h ago</span>
        </div>

        <div className="remark-card__body">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet augue eget magna molestie, ac tempor felis tincidunt.
            Praesent sed finibus velit. In consequat dapibus sapien pulvinar fermentum. Donec a tortor pretium ante pulvinar eleifend
            sed sit amet lorem. Sed nulla turpis, semper vitae felis nec, consequat euismod turpis.
            Aenean quis scelerisque velit, vitae auctor lorem.
          </span>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  remark: React.PropTypes.object.isRequired
};

export default Card;
