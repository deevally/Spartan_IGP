import React from 'react'
import Nav from "../components/Nav";
import Header from "../components/Header";

const SignUp = () => {
    return (
        <div>
            <Nav Jobs="Jobs" LogOut="Log Out" /> 
            <Header className="signUpPageHeader" headerText="homeHeaderText" HeaderText__first= "Signup"   />
            <p>Sign Up</p>
        </div>
    )
}

export default SignUp
