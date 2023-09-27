import React from 'react'
import styles from './ExperienceTable.module.css'
import logoNativeg from '../../../images/logoNativeg.jpg'
import i18next from 'i18next'
const ExperienceTable = () => {
  return (
    <div>
        <table className={`${styles.ExperienceTable}`}>
        <thead>
            <th colspan="1" className={`${styles.ExperienceHeader}`}><center><h1 style={{fontSize:'25px'}}>{ i18next.t('workExperience.title')}</h1></center></th>
        </thead>
        <tbody>
            <tr className={`${styles.ExperienceRow}`}>
                
                <td className={`${styles.workDescription}`}>
                    <div className={`${styles.companyDescription}`}>
                        
                        {/*<img className={`${styles.companyLogo}`} src={logoNativeg.src}/>*/}
                    
                    <p><b><a href='https://nativeg.com.br'>{ i18next.t('workExperience.nativeg.companyName')}</a></b></p>
                    <small style={{color:'white'}}><b>06/2022 - 02/2023</b></small>
                    <p>{ i18next.t('workExperience.nativeg.office')}</p>
                </div>
                    <div>
                        <p>
                           <b>{ i18next.t('workExperience.nativeg.description.title')}</b><br/>
                            <br/>

                            { i18next.t('workExperience.nativeg.description.mainText')}

                            <br/><br/>

                            <b>{ i18next.t('workExperience.nativeg.description.keySkills.title')}</b><br/>

                            { i18next.t('workExperience.nativeg.description.keySkills.development')}<br/>

                            { i18next.t('workExperience.nativeg.description.keySkills.admin')}<br/>
                            { i18next.t('workExperience.nativeg.description.keySkills.marketing')}<br/>
                            { i18next.t('workExperience.nativeg.description.keySkills.design')}<br/>
                        </p>
                    </div>
                </td>
            </tr>
        </tbody>
        
  </table>
    </div>
    
  )
}

export default ExperienceTable