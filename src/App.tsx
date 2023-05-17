import React from 'react';
import logo from './logo.svg';
import robots from './mockdata/robots.json'
import Robot from "./components/Robot"
import styles from './App.module.css';

// const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />"
// const jsHacked = "javascript: alert('Hacked!');"


function App() {
  return (
    <div className={styles.app}>
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
