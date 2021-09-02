import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import Counter from './components/Counter'
function App() {
  return (
    <div className='app'>
        <Counter initialValue={55} backgroundColor="blue"></Counter>
    </div>
  );
}

export default App;
