import React, {useState} from 'react'
import './styles.scss';


const windowWidth = window.innerWidth;

const NAVIGATION_PATHS = [
    {link: "#waves", title: "Waves Of Paramnesia"},
    {link: "#about-waves", title: "About The Album"},
    {link: "#prev-albums", title: "All Works By Darzini"},
    {link: "#regrets", title: "Regrets And Grievances"},
    {link: "#achievements", title: "Achievements"},
    {link: "#about-darzini", title: "About Darzini"}
]


const MobileNavBar = () => {

    const [mobileNavVisible, setIsMobileNavVisible] = useState(false);
    const onNavBarClick = () => setIsMobileNavVisible(!mobileNavVisible);


    return (<nav id="mob-nav">
                <div id="nav-icon-container">
                    <button id="nav-icon" onClick={onNavBarClick}>
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
                {mobileNavVisible ? 
                    (<div id="mob-links">
                            {NAVIGATION_PATHS.map((item, index) => (
                            <a className="mob-nav-link" href={item.link}>{item.title}</a>
                        ))}
                    </div>)
                : null}
            </nav>)
}

const DesktopNavBar = () => {
    
    return (
    <nav id="navigator">
        {NAVIGATION_PATHS.map((item, index) => (
            <a href={item.link}>{item.title}</a>
        ))}
    </nav>
)}

export default function NavBar() {

    if(windowWidth > 520)
        return (
           <DesktopNavBar />
        )
    
    else {
        return(
            <MobileNavBar />
        )
    }
}
