import React from 'react';
import Form from './Form';

class New extends React.Component {
  render() {
    return (
      <div className="block block--land remark-new">
        <Form remark={ this.props.remark } />
      </div>
    );
  }
}

New.propTypes = {
  remark: React.PropTypes.object
};

New.defaultProps = {
  remark: {}
};

export default New;
