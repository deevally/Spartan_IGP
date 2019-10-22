import React, { Component } from "react";
import Button from './Button'
class FooterForm extends Component {
  state = {
    userForm: {
      Email: ""
    },
    disabled:false,
    isSubmitting: false
  };

  handleChange = e => {
    const userForm = this.state.userForm;
    userForm[e.target.name] = e.target.value;
    this.setState({ userForm });
  };

  handleSubmit = () => {
    const {
      userForm: { Email }
    } = this.state;
    this.setState({
      isSubmitting: true
    });
    console.log( Email );
  };

  render() {
    const {
      userForm: {Email }
    } = this.state;

    return (
      <div>
        <label>
        <h5 className='labelHeaderText'>Subscribe</h5>
          
        <form className='form-row'>
        <div>

        
          <input
            name="Email"
            value={Email}
            type="text"
            className=" mt-2 subscribeEmail "
            placeholder="Email..."
            onChange={this.handleChange}
          />
          </div>
          <div>

         
          <Button
            type="submit"
            btnType='btn-primary'
            myBtnClass='myBtnClassFooter'
            onClick={this.handleSubmit}
            disabled ={Email ===''?true:false}
          >
            Send
          </Button>
          </div>
        </form>
        </label>
      </div>
    );
  }
}

export default FooterForm;
