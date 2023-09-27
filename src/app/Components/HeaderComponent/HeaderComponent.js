"use client"
import React from 'react'
import styles from './HeaderComponent.module.css'
import brazilianFlag from '../../../images/flags/pt-br.png'
import englandFlag from '../../../images/flags/en.png'
import spainFlag from '../../../images/flags/es.png'
import i18next from 'i18next'

const HeaderComponent = ({black}) => {
    const [darkmode,setDarkmode] = React.useState(true)
    const toogleDarkMode = ()=>{
        setDarkmode(!darkmode)
        if(darkmode){
            
            document.querySelector('html').style.filter = 'invert(0%)'
            const images = document.querySelectorAll('.ThumbnailImage')
            console.log(images)
            for(let image of images){
                image.style.filter='invert(0%)'
            }
            const Flagimages = document.querySelectorAll('.flagImage')
            
            for(let imageFlag of Flagimages){
                imageFlag.style.filter='invert(0%)'
            }
            document.querySelector('#DarkModeCheckbox').checked=true
        }else{
            
            document.querySelector('html').style.filter = 'invert(90%)'
            const images = document.querySelectorAll('.ThumbnailImage')
            console.log(images)
            for(let image of images){
                image.style.filter='invert(100%)'
            }
            const Flagimages = document.querySelectorAll('.flagImage')
            
            for(let imageFlag of Flagimages){
                imageFlag.style.filter='invert(100%)'
            }
            document.querySelector('#DarkModeCheckbox').checked=false
        }
        setDarkmode(!darkmode)
        console.log('change theme')
        
    }
    
    React.useEffect(()=>{
        const prefersTheme = window.matchMedia('(prefers-color-scheme: dark)')
        console.log(prefersTheme)
        if(prefersTheme.matches){
            //document.querySelector('#DarkModeCheckbox').checked=true
            setDarkmode(true)
        }else{
            setDarkmode(false)
            document.querySelector('html').style.filter = 'invert(90%)'
            const images = document.querySelectorAll('.ThumbnailImage')
            console.log(images)
            for(let image of images){
                image.style.filter='invert(100%)'
            }
            const Flagimages = document.querySelectorAll('.flagImage')
            
            for(let imageFlag of Flagimages){
                imageFlag.style.filter='invert(100%)'
            }
        }
       
        TogglePowerHeaderMenu()
        },[])
    const [menu,setMenu]=React.useState(0)
  function TogglePowerHeaderMenu(){
    if(menu === 0){
      let headerMobileMenu = document.getElementById("headerPowerMobileMenuID2")
      let headerMobileMenuWrapper = document.getElementById("headerPowerMobileMenuID") 
      headerMobileMenu.style.marginLeft='-71%'
      headerMobileMenuWrapper.style.marginLeft='-101%'
      setMenu(1)
    }else{
      let headerMobileMenu = document.getElementById("headerPowerMobileMenuID2")
      let headerMobileMenuWrapper = document.getElementById("headerPowerMobileMenuID") 
      headerMobileMenu.style.marginLeft=0
      headerMobileMenuWrapper.style.marginLeft=0
      setMenu(0)
    }
   
     
    

  }
 
  const changeLanguage = (event,language)=> {
    if (typeof window !== "undefined") {
        localStorage.setItem('i18nextLng',language)
        console.log('teste')
      }
      //window.location = window.location
  }
  return (
    <header className={`${black ? styles.black:''}`} >
        <div className={`${styles.upperMenuWrapper}`}>
            <div className={`${styles.upperMenu}`}>
                <div style={{display:'flex',gap:5}}>
                    <svg id={`${styles.cellphoneIcon}`} fill="#ffffff" width="17px" height="17px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M20.629 5h-9.257a1.6 1.6 0 0 0-1.601 1.603V25.4a1.6 1.6 0 0 0 1.601 1.601h9.257c.883 0 1.6-.718 1.6-1.601V6.603c0-.885-.717-1.603-1.6-1.603zm-6.247 1.023h3.302v.768h-3.302v-.768zm1.619 19.395a1.024 1.024 0 0 1-1.023-1.021 1.023 1.023 0 0 1 2.044 0c-.001.494-.46 1.021-1.021 1.021zm5.028-3.501H10.971V7.704h10.058v14.213z"/></svg>
                        <p className={`${styles.upperMenuText}`} style={{color:'white'}}>+55 11 913487423</p>
                    </div>
                <div style={{display:'flex',gap:5}}>
                        <svg width="17px" height="17px" viewBox="0 -4 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
                        <g id="Icon-Set"  transform="translate(-412.000000, -259.000000)" fill="#ffffff">
                            <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" id="mail" >

                </path>
                        </g>
                    </g>
                </svg>
                <p className={`${styles.upperMenuText}`} style={{color:'white'}}>nathan.fe.dias@gmail.com</p>
            </div>
                <div className={`${styles.languageSelectorFlagsDesktop}`}>
                    <img className='flagImage' onClick={()=>{window.localStorage.setItem('i18nextLng','pt-BR');window.location = window.location}}  src={brazilianFlag.src} alt="Português"/>
                    <img className='flagImage' onClick={()=>{window.localStorage.setItem('i18nextLng','en-US');window.location = window.location}} src={englandFlag.src} alt="Português"/>
                    <img className='flagImage' onClick={()=>{window.localStorage.setItem('i18nextLng','es-ES');window.location = window.location}} src={spainFlag.src} alt="Português"/>
                </div>
            </div>
           
            
        </div>
        <div className={`${styles.MainMenu}`}>
            <div onClick={TogglePowerHeaderMenu} className={styles.headerHamburgerIcon} id={styles.headerHamburgerIcon}>
                

                
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_429_11066)">
                <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_429_11066">
                <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"/>
                </clipPath>
                </defs>
                </svg>
            </div>

            <div onClick={TogglePowerHeaderMenu} id='headerPowerMobileMenuID' className={`${styles.mobileMenuWrapper}`}>
                <div id='headerPowerMobileMenuID2' className={`${styles.mobileMenu}`}>
                    <div className={`${styles.mobileHeaderMenuTitle}`}>
                        <h1>Nathan <p style={{color:'white'}}> Ferreira</p></h1>
                        <p>{ i18next.t('title.office')}</p>
        
                    </div>

                    <div>
                        <div className={`${styles.languageSelectorFlagsMobile}`}>
                            <img className='flagImage' onClick={()=>{window.localStorage.setItem('i18nextLng','pt-BR');window.location = window.location}}  src={brazilianFlag.src} alt="Português"/>
                            <img className='flagImage' onClick={()=>{window.localStorage.setItem('i18nextLng','en-US');window.location = window.location}}  src={englandFlag.src} alt="Português"/>
                            <img  className='flagImage' onClick={()=>{window.localStorage.setItem('i18nextLng','es-ES');window.location = window.location}} src={spainFlag.src} alt="Português"/>
                        </div>
                    </div>

                    <div className={`${styles.Nightmode}`}>
                            <h1 style={{color:'white'}}>{ i18next.t('nightMode')}</h1>
                            <label className={`${styles.switch}`}>
                                <input id='DarkModeCheckbox' onChange={toogleDarkMode}  type="checkbox"/>
                                <span className={`${styles.slider_round}`}></span>
                            </label>
                        </div>
                    <div className={`${styles.mobileHeaderMenuLinks}`}>
                        <ul>
                            <a href='#projects'><li>{ i18next.t('headerMenu.projects')}</li></a>
                            <a href='#experience'><li>{ i18next.t('headerMenu.experience')}</li></a>
                            <a href='#skills'><li>{ i18next.t('headerMenu.skills')}</li></a>
                            <a href='https://raw.githubusercontent.com/nathanzd/resume/218a7396cbc1451b8c52eaa6eed63f5edf942540/Resume_Nathan.pdf' download='Resume_Nathan.pdf'><li>{ i18next.t('headerMenu.resume')}</li></a>
                            <a href='#contact'><li>{ i18next.t('headerMenu.contact')}</li></a>
                        </ul>
                    </div>
                    <div>
                    <div className={`${styles.SocialItems}`}>

                        <div>
                            <a href='https://github.com/nathanzd'><svg width="35px" height="35px" viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                <g id="team-collaboration/version-control/github" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="container" transform="translate(2.000000, 2.000000)" fill-rule="nonzero">
                                        <rect id="mask" stroke="#ffffff" stroke-width="2" fill="#ffffff" x="-1" y="-1" width="71" height="71" rx="14">
                            </rect>
                                        <path d="M58.3067362,21.4281798 C55.895743,17.2972267 52.6253846,14.0267453 48.4948004,11.615998 C44.3636013,9.20512774 39.8535636,8 34.9614901,8 C30.0700314,8 25.5585181,9.20549662 21.4281798,11.615998 C17.2972267,14.0266224 14.0269912,17.2972267 11.615998,21.4281798 C9.20537366,25.5590099 8,30.0699084 8,34.9607523 C8,40.8357654 9.71405782,46.1187277 13.1430342,50.8109917 C16.5716416,55.5036246 21.0008949,58.7507436 26.4304251,60.5527176 C27.0624378,60.6700211 27.5302994,60.5875152 27.8345016,60.3072901 C28.1388268,60.0266961 28.290805,59.6752774 28.290805,59.2545094 C28.290805,59.1842994 28.2847799,58.5526556 28.2730988,57.3588401 C28.2610487,56.1650247 28.2553926,55.1235563 28.2553926,54.2349267 L27.4479164,54.3746089 C26.9330843,54.468919 26.2836113,54.5088809 25.4994975,54.4975686 C24.7157525,54.4866252 23.9021284,54.4044881 23.0597317,54.2517722 C22.2169661,54.1004088 21.4330982,53.749359 20.7075131,53.1993604 C19.982297,52.6493618 19.4674649,51.9294329 19.1631397,51.0406804 L18.8120898,50.2328353 C18.5780976,49.6950097 18.2097104,49.0975487 17.7064365,48.4426655 C17.2031625,47.7871675 16.6942324,47.3427912 16.1794003,47.108799 L15.9336039,46.9328437 C15.7698216,46.815909 15.6178435,46.6748743 15.4773006,46.511215 C15.3368806,46.3475556 15.2317501,46.1837734 15.1615401,46.0197452 C15.0912072,45.855594 15.1494901,45.7209532 15.3370036,45.6153308 C15.5245171,45.5097084 15.8633939,45.4584343 16.3551097,45.4584343 L17.0569635,45.5633189 C17.5250709,45.6571371 18.104088,45.9373622 18.7947525,46.4057156 C19.4850481,46.8737001 20.052507,47.4821045 20.4972521,48.230683 C21.0358155,49.1905062 21.6846737,49.9218703 22.4456711,50.4251443 C23.2060537,50.9284182 23.9727072,51.1796248 24.744894,51.1796248 C25.5170807,51.1796248 26.1840139,51.121096 26.7459396,51.0046532 C27.3072505,50.8875956 27.8338868,50.7116403 28.3256025,50.477771 C28.5362325,48.9090515 29.1097164,47.7039238 30.0455624,46.8615271 C28.7116959,46.721353 27.5124702,46.5102313 26.4472706,46.2295144 C25.3826858,45.9484285 24.2825656,45.4922482 23.1476478,44.8597436 C22.0121153,44.2280998 21.0701212,43.44374 20.3214198,42.5080169 C19.5725954,41.571802 18.9580429,40.3426971 18.4786232,38.821809 C17.9989575,37.300306 17.7590632,35.5451796 17.7590632,33.5559381 C17.7590632,30.7235621 18.6837199,28.3133066 20.5326645,26.3238191 C19.6665366,24.1944035 19.7483048,21.8072644 20.778215,19.1626478 C21.4569523,18.951772 22.4635002,19.1100211 23.7973667,19.6364115 C25.1314792,20.1630477 26.1082708,20.6141868 26.7287253,20.9882301 C27.3491798,21.3621504 27.8463057,21.6790175 28.2208409,21.9360032 C30.3978419,21.3277217 32.644438,21.0235195 34.9612442,21.0235195 C37.2780503,21.0235195 39.5251383,21.3277217 41.7022622,21.9360032 L43.0362517,21.0938524 C43.9484895,20.5319267 45.0257392,20.0169716 46.2654186,19.5488642 C47.5058357,19.0810026 48.4543466,18.9521409 49.1099676,19.1630167 C50.1627483,21.8077563 50.2565666,24.1947724 49.3901927,26.324188 C51.2390143,28.3136755 52.1640399,30.7245457 52.1640399,33.556307 C52.1640399,35.5455485 51.9232849,37.3062081 51.444357,38.8393922 C50.9648143,40.3728223 50.3449746,41.6006975 49.5845919,42.5256002 C48.8233486,43.4503799 47.8753296,44.2285916 46.7404118,44.8601125 C45.6052481,45.4921252 44.504759,45.9483056 43.4401742,46.2293914 C42.3750975,46.5104772 41.1758719,46.7217219 39.8420054,46.8621419 C41.0585683,47.9149226 41.6669728,49.5767225 41.6669728,51.846804 L41.6669728,59.2535257 C41.6669728,59.6742937 41.8132948,60.0255895 42.1061847,60.3063064 C42.3987058,60.5865315 42.8606653,60.6690374 43.492678,60.5516109 C48.922946,58.7498829 53.3521992,55.5026409 56.7806837,50.810008 C60.2087994,46.117744 61.923472,40.8347817 61.923472,34.9597686 C61.9222424,30.0695396 60.7162539,25.5590099 58.3067362,21.4281798 Z" id="Shape" fill="#000000">

                            </path>
                                    </g>
                                </g>
                            </svg>
                            </a>
                        </div>

                        <div>
                            <a href='https://twitter.com/NeitanZD'><svg fill="#ffffff" height="35px" width="35px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
                                viewBox="-143 145 512 512" >
                            <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
                                M215.2,361.2c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
                                c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
                                C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
                                c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
                                c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"/>
                            </svg>
                            </a>
                        </div>

                        <div>

                            <a href='https://www.linkedin.com/in/nathanzd/'><svg fill="#ffffff" width="35px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>linkedin</title>
                            <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
                            </svg>
                            </a>
                        </div>
                        {/* END OF SOCIAL ITEMS*/}
                        
                       


                        </div>
            

                    </div>
                </div>
            </div>

            <div className={`${styles.menuWrapper}`}>

                <div className={`${styles.menuItem}`}>
                    <a href='#projects'>
                        { i18next.t('headerMenu.projects')}
                        {/*<img src={logo} className={`${styles.logoimg}`} alt='Movies'/>*/}
                    </a>
                </div>
                <div className={`${styles.menuItem}`}>
                    <a href='#experience'>
                        { i18next.t('headerMenu.experience')}
                        {/*<img src={logo} className={`${styles.logoimg}`} alt='Movies'/>*/}
                    </a>
                </div>
                <div className={`${styles.menuItem}`}>
                    <a href='#skills'>
                        { i18next.t('headerMenu.skills')}
                        {/*<img src={logo} className={`${styles.logoimg}`} alt='Movies'/>*/}
                    </a>
                </div>
                <div className={`${styles.menuItem}`}>
                    <a href='https://raw.githubusercontent.com/nathanzd/resume/218a7396cbc1451b8c52eaa6eed63f5edf942540/Resume_Nathan.pdf' download='Resume_Nathan.pdf'>
                    { i18next.t('headerMenu.resume')}
                        {/*<img src={logo} className={`${styles.logoimg}`} alt='Movies'/>*/}
                    </a>
                </div>
                <div className={`${styles.menuItem}`}>
                    <a href='#contact'>
                    { i18next.t('headerMenu.contact')}
                        {/*<img src={logo} className={`${styles.logoimg}`} alt='Movies'/>*/}
                    </a>
                </div>
            </div>
        </div>
        
        
        
    </header>
  )
}

export default HeaderComponent