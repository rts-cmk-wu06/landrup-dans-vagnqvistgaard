//Velkommen....
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"; //move to actual usage later (in 'Welcome')

import backGround from './../assetses/background.png';
import logoImg from './../assetses/logo.png';
import buttonStart from './../assetses/button-start.png';



function Welcome() {



    return (
        <>
            <div className='bg-cover bg-top'
                style={{
                    backgroundImage: `url(${backGround})`,
                    width: '100vw',
                    height: '100vh',
                }}>
                <img src={logoImg} className='fixed'
                    style={{
                        left: '-1vw',
                        top: '51vh',
                        width: '78vw',
                    }} alt=''>
                </img>
                <motion.img //put in a 'Link to' here, when routing is ready...
                    src={buttonStart} className='fixed'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    style={{
                        left: '17vw',
                        top: '88vh',
                        width: '66vw',
                        height: '7vh',
                    }} alt=''>
                </motion.img>
            </div>
        </>
    )
}

export default Welcome;