import React from 'react';
import Remark from '../../blocks/remarks/Card';

class Remarks extends React.Component {

  renderList() {
    return this.props.remarks.map((remark, index) => {
      return <Remark remark={ remark } key={ index } />
    });
  }

  render() {
    return (
      <div className="views remarks">
        { this.renderList() }
      </div>
    );
  }
}

Remarks.propTypes = {
  remarks: React.PropTypes.array.isRequired
};

Remarks.defaultProps = {
  remarks: []
};

export default Remarks;
