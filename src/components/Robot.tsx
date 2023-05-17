import React from "react" 
import styles from './Robot.module.css'

interface RobotProps {
  id: number,
  name: string,
  email: string
}

// ES6写法


const Robot : React.FC<RobotProps> = ({id, name, email}) => {
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`}></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
  
}

export default Robot;