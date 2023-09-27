import React from 'react'
import styles from './GridList.module.css'
import i18next from 'i18next'
const GridList = () => {
  return (
    <div className={styles.WhydatainsiderWrapper}>
        <div className={styles.Whydatainsider}>
            <div className={styles.WhydatainsiderTextWrapper}>
                <h1 className={styles.WhydatainsiderText}>{i18next.t('skill.programmingLanguages.title')}</h1>
            </div>
            <div className={styles.WhydatainsiderGrid}>

                <div className={styles.WhydatainsiderGridItem}>
                    <div className={styles.WhydatainsiderGridItemIcon}>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0ZM18.3467 20.1196C17.2343 20.1196 16.6053 19.5394 16.1219 18.7501L14.2891 19.8149C14.9512 21.123 16.3044 22.1211 18.3989 22.1211C20.5409 22.1211 22.136 21.0088 22.136 18.9783C22.136 17.0949 21.0541 16.2571 19.1379 15.4354L18.5741 15.1939C17.6065 14.7749 17.1874 14.501 17.1874 13.8244C17.1874 13.277 17.6061 12.8579 18.2667 12.8579C18.9143 12.8579 19.3314 13.131 19.7181 13.8244L21.4743 12.6968C20.7314 11.3901 19.7006 10.891 18.2667 10.891C16.2526 10.891 14.9638 12.1787 14.9638 13.8701C14.9638 15.7063 16.0449 16.5749 17.6724 17.2682L18.2362 17.5101C19.2648 17.96 19.8781 18.2339 19.8781 19.0072C19.8781 19.6526 19.2811 20.1196 18.3467 20.1196ZM9.60647 20.1055C8.83161 20.1055 8.50933 19.5741 8.15504 18.9455L6.31923 20.057C6.85104 21.1825 7.89676 22.117 9.70247 22.117C11.7009 22.117 13.0701 21.0541 13.0701 18.7189V11.0198H10.8149V18.6884C10.8149 19.8156 10.3474 20.1055 9.60647 20.1055Z" fill="#ffffff"/>
                        </svg>
                    </div>
                    <div className={styles.WhydatainsiderGridItemContent}>
                        <h1 className={styles.WhydatainsiderGridItemTitle}>{i18next.t('skill.programmingLanguages.javascript.title')}</h1>
                        <p className={styles.WhydatainsiderGridItemText}> {i18next.t('skill.programmingLanguages.javascript.description')}</p>
                    </div>
                </div>

                <div className={styles.WhydatainsiderGridItem}>
                    <div className={styles.WhydatainsiderGridItemIcon}>
                        <svg fill="#ffffff" width="25px" height="25px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 16v16h32v-32h-32zM25.786 14.724c0.813 0.203 1.432 0.568 2.005 1.156 0.292 0.312 0.729 0.885 0.766 1.026 0.010 0.042-1.38 0.974-2.224 1.495-0.031 0.021-0.156-0.109-0.292-0.313-0.411-0.599-0.844-0.859-1.505-0.906-0.969-0.063-1.594 0.443-1.589 1.292-0.005 0.208 0.042 0.417 0.135 0.599 0.214 0.443 0.615 0.708 1.854 1.245 2.292 0.984 3.271 1.635 3.88 2.557 0.682 1.031 0.833 2.677 0.375 3.906-0.51 1.328-1.771 2.234-3.542 2.531-0.547 0.099-1.849 0.083-2.438-0.026-1.286-0.229-2.505-0.865-3.255-1.698-0.297-0.323-0.87-1.172-0.833-1.229 0.016-0.021 0.146-0.104 0.292-0.188s0.682-0.396 1.188-0.688l0.922-0.536 0.193 0.286c0.271 0.411 0.859 0.974 1.214 1.161 1.021 0.542 2.422 0.464 3.115-0.156 0.281-0.234 0.438-0.594 0.417-0.958 0-0.37-0.047-0.536-0.24-0.813-0.25-0.354-0.755-0.656-2.198-1.281-1.651-0.714-2.365-1.151-3.010-1.854-0.406-0.464-0.708-1.010-0.88-1.599-0.12-0.453-0.151-1.589-0.057-2.042 0.339-1.599 1.547-2.708 3.281-3.036 0.563-0.109 1.875-0.068 2.427 0.068zM18.276 16.063l0.010 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-0.714 0.016-1.307 0.036-1.323 0.016-0.021 2.547-0.031 5.62-0.026l5.594 0.016z"/>
                        </svg>
                    </div>
                    <div className={styles.WhydatainsiderGridItemContent}>
                        <h1 className={styles.WhydatainsiderGridItemTitle}>{i18next.t('skill.programmingLanguages.typescript.title')}</h1>
                        <p className={styles.WhydatainsiderGridItemText}>{i18next.t('skill.programmingLanguages.typescript.description')}</p>
                    </div>
                </div>

                <div className={styles.WhydatainsiderGridItem}>
                    <div style={{padding:-35}} className={styles.WhydatainsiderGridItemIcon}>
                    <svg fill="#ffffff"  version="1.1" xmlns="http://www.w3.org/2000/svg"  width="25px"
                        height="25px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" >

                    <g id="5151e0c8492e5103c096af88a51ec286">

                    <path display="inline" d="M194.734,246.879h121.768c33.9,0,60.956-27.908,60.956-61.95V68.846c0-33.035-27.87-57.855-60.956-63.371
                            c-20.943-3.484-42.673-5.069-63.51-4.971c-20.845,0.097-40.74,1.874-58.258,4.971c-51.586,9.117-60.952,28.191-60.952,63.371
                            v46.463H255.69v15.486H133.782h-45.75c-35.434,0-66.459,21.295-76.158,61.808c-11.192,46.435-11.694,75.409,0,123.898
                            c8.666,36.088,29.359,61.807,64.79,61.807h41.917v-55.699C118.581,282.37,153.39,246.879,194.734,246.879z M187.063,84.333
                            c-12.636,0-22.877-10.355-22.877-23.161c0-12.849,10.241-23.3,22.877-23.3c12.594,0,22.873,10.451,22.873,23.3
                            C209.936,73.979,199.658,84.333,187.063,84.333z M499.37,192.603c-8.761-35.27-25.484-61.808-60.96-61.808h-45.75v54.134
                            c0,41.972-35.582,77.292-76.158,77.292H194.734c-33.349,0-60.952,28.547-60.952,61.954v116.079
                            c0,33.037,28.726,52.476,60.952,61.943c38.589,11.353,75.59,13.409,121.768,0c30.688-8.876,60.956-26.764,60.956-61.943v-46.461
                            H255.69v-15.486h121.768h60.952c35.431,0,48.638-24.715,60.96-61.807C512.092,278.314,511.549,241.589,499.37,192.603z
                            M324.178,424.766c12.64,0,22.873,10.356,22.873,23.156c0,12.85-10.233,23.305-22.873,23.305
                            c-12.595,0-22.877-10.455-22.877-23.305C301.301,435.122,311.583,424.766,324.178,424.766z">

                    </path>

                    </g>

                    </svg>

                     </div>
                    <div className={styles.WhydatainsiderGridItemContent}>
                        <h1 className={styles.WhydatainsiderGridItemTitle}>{i18next.t('skill.programmingLanguages.python.title')}</h1>
                        <p className={styles.WhydatainsiderGridItemText}>{i18next.t('skill.programmingLanguages.python.description')}</p>
                    </div>
                </div>

                

            </div>
        </div>
    </div>
  )
}

export default GridList