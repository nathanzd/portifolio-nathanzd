import React from 'react'
import damascus from '../../../../../damascus.jpg'
import styles from './DamascusGradient.module.css'
const DamascusGradient = () => {
  return (
    <div>
        
        <img className={`${styles.damascusImage}`} src={damascus.src}/>
      
    </div>
  )
}

export default DamascusGradient