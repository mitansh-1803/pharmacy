import React, { useState } from 'react';
import './App.css';
import Login from './components/login';
import TopBar from './components/topbar';
import Footer from './components/footer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SaleExecutive from './components/saleExecutive/home';
import StoreManager from './components/storeManager/home';

function App() {

  const [redirectToNextPage, setRedirectToNextPage] = useState(false);
  const [redirectedPage, setRedirectedPage] = useState("");

  const changePage = () => {
    setRedirectToNextPage(true);
  }

  const changePath = (value) =>{
    setRedirectedPage(value);
  }

  return (<>
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => 
        <Login changePage={changePage} redirectToNextPage ={redirectToNextPage} changePath={changePath} redirectedPage={redirectedPage} />} />
      <Route path="/salesexecutive" render={() => <SaleExecutive />} />
      <Route path="/storemanager" component={StoreManager} />
    </Switch>
    <Footer />
  </BrowserRouter>
  </>);
}

export default App;
