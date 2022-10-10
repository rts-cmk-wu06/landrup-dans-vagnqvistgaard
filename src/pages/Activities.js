//Aktiviteter...
import { Link } from 'react-router-dom';

import home from './../assetses/home.png';
import search from './../assetses/search.png';
import calendar from './../assetses/calendar.png';


import FetchMySwipe from './../components/FetchMySwipe';




function Activities() {


    return (
        <>
            <div id='header' className='m-0'
                style={{
                    backgroundColor: '#5E2E53',
                    width: '100vw',
                    height: '13vh',
                    zIndex: '10',
                    position: 'fixed',

                }}>
                <h1 className='text-8xl px-16 py-20'
                    style={{
                        fontFamily: 'Ubuntu',
                        fontWeight: '300',
                        color: '#EAEAEA',
                    }}>
                    Aktiviteter
                </h1>
            </div>
            {/* ************** swipe from here ******************** */}
            <div className=''>
                <FetchMySwipe />
            </div>
            <div className='flex flex-row py-6 justify-around'
                style={{
                    backgroundColor: '#EAEAEA',
                    width: '100vw',
                    height: '7vh',
                }}
            >
                <img src={home} width='100' height='100' alt=''></img>
                <Link to="/search">
                    <img src={search} width='100' height='100' alt=''></img>
                </Link>
                <Link to="/calendar">
                    <img src={calendar} width='100' height='100' alt=''></img>
                </Link>
            </div>


        </>
    )
}

export default Activities;