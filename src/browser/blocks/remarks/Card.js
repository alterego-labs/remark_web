import React from 'react';
let Avatar = require('../../../images/Avatar2.png');

class Card extends React.Component {
  render() {
    return (
      <div className="block block--land remark-card">
        <div className="remark-card__header">
          <img className="remark-card__avatar" src={ Avatar } title="" alt="" />
          {/*<span className="remark-card__fullname"></span>*/}
          <span className="remark-card__login">@{ this.props.remark.user.login }</span>
          <span className="remark-card__time">{ this.props.remark.created_at }</span>
        </div>

        <div className="remark-card__body">
          <span>
            { this.props.remark.body }
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
