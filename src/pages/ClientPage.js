import React from "react";
import Nav from "../components/Nav";
import Header from  "../components/Header";



const Client = () => {
  return (
    <div>
      <Nav Blog="Blog" LogIn="LogIn" SignUp="SignUp" />
      <Header className="landingPageHeader" headerText="homeHeaderText" HeaderText__first= "Search for your dream job" SubHeaderText="Job offers available"  headerBorder="clientsheaderBorder" />
      <p>Client Page</p>
    </div>
  );
};

export default Client;
