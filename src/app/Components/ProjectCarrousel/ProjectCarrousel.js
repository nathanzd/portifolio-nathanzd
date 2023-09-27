"use client"
import React from 'react'
import styles from './ProjectCarrousel.module.css'
import NavigateBeforeSVG from './SVG_Component/NavigateBeforeSVG'
import NavigateNextSVG from './SVG_Component/NavigateNextSVG'
import ProjectThumbnail from '../ProjectThumbnail/ProjectThumbnail'
import damascus from '../../../../../damascus.jpg'
import ntveg from '../../../images/ntveg.png'
import datahash from '../../../images/datahash.png'
import i18next from 'i18next'

const ProjectCarrousel = ({title,items}) => {
  const ProjectsTexts = {
    nativeg:{
      title:"NATIVEG",
      description:<p>E-commerce desenvolvido para a marca de cosméticos NATIVEG, com o objetivo de possibilitar a
        comercialização online e como uma "recepção" para novos clientes<br/><br/>
        
        </p>,
        link:'https://nativeg.com.br'
    },
    datahash:{
      title:"Datahash",
      description:<p>Website institucional, neste projeto buscamos traduzir a expertise e excelência da DataHash em análise de dados para uma presença online sólida e informativa, destacando sua presença no setor</p>,
      link:'https://datahash.com.br'


    }
  }
  const text1 = ""
  const[scrollX,setScrollX]=React.useState(0);
  const handleLeftArrow=()=>{
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0){
      x=0
      
    }
    setScrollX(x)
    
    
    
  }
  const handleRightArrow=()=>{
    let x = scrollX - Math.round(window.innerWidth / 2);
    let ListW= 4 * 360;
    if((window.innerWidth - ListW) > x){
      x=(window.innerWidth - ListW) - 60;

    }
    setScrollX(x);
    
  }



  return (
    <div className={`${styles.movieRow}`}>
     
      <div className={`${styles.MovieRowLeft}`} onClick={handleLeftArrow}>
          <NavigateBeforeSVG/>
      </div>

      <div className={`${styles.MovieRowRight}`} onClick={handleRightArrow}>
          <NavigateNextSVG/>
      </div>

      <div className={`${styles.movieRowListArea}`} draggable={true}>
        <div id='movieRowList' className={`${styles.movieRowList}`} style={{
          marginLeft:scrollX,
          width:(360 * 4)
          }}>
             <ProjectThumbnail title={i18next.t('projects.nativeg.title')} link={ProjectsTexts.nativeg.link} text={i18next.t('projects.nativeg.description')} img={ntveg}/>
            <ProjectThumbnail title={i18next.t('projects.datahash.title')} link={ProjectsTexts.datahash.link} text={i18next.t('projects.datahash.description')} img={datahash}/>
            <ProjectThumbnail title={i18next.t('commingSoon')} text={text1} img={<div style={{color:'white',fontSize:32,fontWeight:'bold'}}>?</div>}/>
            <ProjectThumbnail title={i18next.t('commingSoon')} text={text1} img={<div style={{color:'white',fontSize:32,fontWeight:'bold'}}>?</div>}/>
           
        </div>
      </div>
    </div>
  )
}

export default ProjectCarrousel

