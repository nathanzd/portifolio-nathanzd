"use client"
import ExperienceTable from "./Components/ExperienceTable/ExperienceTable";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import LettersDropdownMatrix from "./Components/LettersDropdownMatrix/LettersDropdownMatrix";
import React from 'react';
import GridList from "./Components/GridListLanguages/GridList";
import DamascusGradient from "./Components/DamascusGradient/DamascusGradient";
import GridListFrameworks from "./Components/GridListFrameworks/GridListFrameworks";
import GridListDatabases from "./Components/GridListDatabases/GridListDatabases";
import styles from './page.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProjectCarrousel from "./Components/ProjectCarrousel/ProjectCarrousel";
import { ContactComponent } from "./Components/ContactComponent/ContactComponent";
import { i18next } from "./translate/i18n";

export default function Home() {
  const [blackHeader,setBlackHeader]=React.useState(false);
  const text1='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
  //document.querySelector('html').style.filter = 'invert(90%)'
  React.useEffect(()=>{
    //document.querySelector('html').style.filter = 'invert(90%)'
    const scrollListener=()=>{
        if(window.scrollY > 10){
            setBlackHeader(true);
        }else{
            setBlackHeader(false)
        }
    }
    window.addEventListener('scroll',scrollListener)

    return ()=>{
        window.removeEventListener('scroll',scrollListener)
    }

    },[])
  return (
   <body>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <HeaderComponent black={blackHeader}/>
    
    <div>
      <LettersDropdownMatrix/>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:500}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start',flexDirection:'column'}}>
          <h1 id="nathan_title" >{ i18next.t('title.developer')}</h1>
          <h1 id='nathan_software'>{ i18next.t('title.office')}</h1>
        </div>
        
      </div>
    </div>
    <div style={{background:'linear-gradient(0deg, rgba(16,16,16,1) 0%, rgba(16,16,16,1) 70%, rgba(255,255,255,0) 100%)',display:"flex",
  alignItems:'center',justifyContent:'center'}}>
      <div id="experience" style={{width:'90%'}}>
        <ExperienceTable/>
      </div>
      
    </div>


    <div style={{background:'#101010',}}>
      
      
      <div style={{background:'rgba(16,16,16,1)',width:'100%'}}>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',padding:'20px 30px'}}>
          <center><h1 id="skills" style={{color:'white',fontWeight:'bold',fontSize:'25px',padding:'20px 30px'}}>{ i18next.t('skill.title')}</h1></center>
          <GridList/>
          <GridListFrameworks/>
          <GridListDatabases/>
          {/*<GridListDesign/>*/}
        </div>
        <div id="projects" style={{padding:'20px 15px'}}>
          <div><center><h1 style={{fontSize:25,color:'white',fontWeight:'bold',padding:'20px 30px'}}>{ i18next.t('projects.title')}</h1></center></div>
          <div className={`${styles.carrousel}`} style={{display:'flex',overflow:'hidden'}}>
           <ProjectCarrousel/>
          </div>
          
        </div>
        
      </div>
      <ContactComponent/>
      
     
    </div>

   
    
   </body>
  )
}
