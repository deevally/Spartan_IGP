import React from "react";
import "../css/addJob.css";
class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: this.props.caption,
      display: true
    };
  }

  componentDidMount() {
    let { display } = this.state.display;
    if (display) {
      this.showToast();
    }
  }

  render() {
    let { caption } = this.state;
    
    return (
      <div id="toast">
        <div id="img">Done!</div>
        <div id="desc">{caption}</div>
      </div>
    );
  }
}
export default Toast;
