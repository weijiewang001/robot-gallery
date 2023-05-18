import React from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json'
import Robot from "./components/Robot"
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';

interface Props {

}

interface State {
  robotGallery: any[];
  count:number;
}

// const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />"
// const jsHacked = "javascript: alert('Hacked!');"


class App extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: [],
      count: 0,
    };
  }

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()
    .then(data => this.setState({robotGallery:data})))
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt={logo}></img>
          <h1>罗伯特机器人炫酷online购物平台</h1>
        </div>
        <button onClick={()=>{
          this.setState((preState, preprops)=>{ return {count: preState.count+1}}, ()=> {
            console.log("count", this.state.count)
          });
          this.setState((preState, preprops)=>{ return {count: preState.count+1}}, ()=> {
            console.log("count", this.state.count)
          });
          
        }}>Click</button>
        <span>count: {this.state.count}</span>
        <ShoppingCart/>
        <div className={styles.robotList}>
          {/* <div>{html}</div> */}
          {/* <a href={jsHacked}>My websit</a> */}
          {this.state.robotGallery.map( r => 
            <Robot id={r.id} email={r.email} name={r.name} />
            )
          }
        </div>
      </div>
      
    );
  }
  
}

export default App;
