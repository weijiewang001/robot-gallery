import React from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json'
import Robot from "./components/Robot"
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';

// const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />"
// const jsHacked = "javascript: alert('Hacked!');"


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt={logo}></img>
        <h1>罗伯特机器人炫酷online购物平台</h1>
      </div>
      <ShoppingCart/>
      <div className={styles.robotList}>
        {/* <div>{html}</div> */}
        {/* <a href={jsHacked}>My websit</a> */}
        {robots.map( r => 
          <Robot id={r.id} email={r.email} name={r.name} />
          )
        }
      </div>
    </div>
    
  );
}

export default App;
