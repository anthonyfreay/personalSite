import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomeStyle from './Home.module.css';
import Icons from '../../Util/Icons/Icons';


const Home = () => {
    useEffect(() => {
        // Add dark background class to body when Home page mounts
        document.body.classList.add('home-page');
        
        // Remove it when component unmounts (navigating away)
        return () => {
            document.body.classList.remove('home-page');
        };
    }, []);

    return (
        <div className={HomeStyle.main}>
            <div className={HomeStyle.overlay}>
                <div className={HomeStyle.content}>
                    <h1 className={HomeStyle.brandLogo}><Link to="/">Anthony Freay</Link></h1>
                    <Link to="/work" className={HomeStyle.enterButtonText}><button className={HomeStyle.enterButton}>
                        Enter</button></Link>
                    <Icons className={HomeStyle.icons} />
                </div>
            </div>
        </div>
    );
};

export default Home;