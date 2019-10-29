import React from 'react';
// import {withRouter} from 'react-router-dom'




class Hover extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div>
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          Hover Me
        </div>
        {this.state.isHovering && <div>thr! 🐱</div>}
      </div>
    );
  }
}

export default Hover;
