"use client"
import React from 'react'
import styles from './ProjectThumbnail.module.css'

const ProjectThumbnail = ({text, img, title,link}) => {
    
  return (
    <div className={`${styles.ProjectThumbnailWrapper}`}>
        <a href={link}>
            <div className={`${styles.ProjectThumbnail}`}>
            <div className={`${styles.ProjectThumbnailImage}`}>
                <img className='ThumbnailImage' src={img.src}/>
                
            </div>
            <div className={`${styles.ProjectThumbnailTitle}`}>
                <h1>{title}</h1>
            </div>
            <div className={`${styles.ProjectThumbnailText}`}>
                <p>
                    {text}
                </p>
            </div>
        </div>
        </a>
    </div>
  )
}

export default ProjectThumbnail