import React from 'react'
import styles from './Footer.module.css'

const Footer = ({pendingNum, ClearAll}) => {

  function handleClick(){
      const isConfirm = window.confirm("Are you sure to clear all tasks?")
      if(isConfirm) ClearAll();
  }

  return (
    <div className={styles.footer}>
      <span>You have <span className={styles.pendingNum}>{pendingNum}</span> pending tasks</span>
      <button className={styles.button} onClick={handleClick}>Clear</button>
    </div>
  )
}

export default Footer