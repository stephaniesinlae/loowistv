import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//importamos nuestros containers
import MainContainer from './containers/MainContainer/MainContainer';
import AddTaskContainer from './containers/AddTaskContainer/AddTaskContainer';
import AppNav from './components/AppNav/AppNav';
import './App.css';
import Footer from './components/Footer/Footer';
import Bienvenido from './containers/Bienvenido/Bienvenido';


function App() {
  return (
      <BrowserRouter>
        <AppNav />
        <Switch>
          <Route exact path="/" component={Bienvenido} />
          <Route exact path="/lista" component={MainContainer} />
          <Route exact path="/add" component={AddTaskContainer} />
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
