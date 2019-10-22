import React from "react";
import Nav from "../components/Nav";
import Header from  "../components/Header";
import Filter from '../components/Filter'
import Footer from "../components/Footer";

let Search = <Filter/>

const Client = () => {
  return (
    <div>
      <Nav Blog="Blog" LogIn="LogIn" SignUp="SignUp" />
      <Header className="landingPageHeader" headerText='headerText'  searchForm={Search} HeaderText__first= "Search for your dream job" SubHeaderText="Job offers available"  headerBorder="clientsheaderBorder" />
      <p>Client Page</p>
      <Footer/>
    </div>
  );
};

export default Client;
