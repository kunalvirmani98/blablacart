import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import SideNavBar from './components/navigation/sideNavBar';
import MainContent from './components/content/mainContent';
import React from 'react';
import { appContext } from './themeContext';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productsInCart: [],
      totalCount: 0,
    }
  }

  contextUpdater = (newProduct, newTotalCount, action) => {
    let productList = this.state.productsInCart;
    productList.find(product => product.name === newProduct.name ?
      this.setState(state => ({
        productsInCart: [...state.productsInCart, newProduct],
      }))
      :
      this.setState(state => ({
        productsInCart: [...state.productsInCart, newProduct],
        totalCount: newTotalCount
      })))
  }

  render() {
    const { contextUpdater } = this;
    return (
      <appContext.Provider value={{ ...this.state, contextUpdater }}>
        <div className="App">
          <Header />
          <SideNavBar />
          <MainContent />
        </div>
      </appContext.Provider>
    );
  }
}

export default App;
