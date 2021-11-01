import logo from './logo.svg';
import React from 'react';
import './App.css';
import MainRouter from './MainRouter';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from './Context/UserContext'
import Layout from './Core/Layout';
export const UserContext = React.createContext()



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value = "pooja">
      <Layout>
       <MainRouter />
       </Layout >
       </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
