import { useLocation, Link } from 'react-router-dom';


import home from './../assetses/home.png';
import search from './../assetses/search.png';
import calendar from './../assetses/calendar.png';


function Details() {

    const location = useLocation();
    const data = location.state;

    return (
        <>
            <div className=''
                style={{
                    backgroundColor: '#5E2E53',
                    width: '100vw',
                    height: '100vh',
                }}>
                <div className='m-0 p-0 bg-cover bg-top'
                    style={{
                        backgroundImage: `url(${data.imgUrl})`,
                        width: '100vw',
                        height: '55vh',
                    }}
                ></div>
                <div className=''
                    style={{
                        height: '38vh'
                    }}>
                    <div className=''
                        style={{
                            color: '#EAEAEA',
                        }}>
                        <p className='mx-12 pt-12 text-6xl'>{data.name}</p>
                        <p className='mx-12 my-0 pb-16 pt-4 text-5xl font-light tracking-wider'>{data.minAge}</p>
                    </div>
                    <div className='px-12 py-4 text-5xl'
                        style={{
                            color: '#EAEAEA',
                        }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget elementum lorem nulla vitae felis auctor pretium suspendisse et. Condimentum fringilla odio vitae interdum adipiscing odio volutpat. Faucibus gravida quis nisi, purus morbi leo nulla a. Mattis tincidunt phasellus enim, egestas non ultrices.



                        </p>
                    </div>
                </div>
                <div className='flex flex-row py-6 justify-around'
                    style={{
                        backgroundColor: '#EAEAEA',
                        width: '100vw',
                        height: '7vh',
                    }}
                >
                    <Link to="/activities">
                        <img src={home} width='100' height='100' alt=''></img>
                    </Link>
                    <Link to="/search">
                        <img src={search} width='100' height='100' alt=''></img>
                    </Link>
                    <Link to="/calendar">
                        <img src={calendar} width='100' height='100' alt=''></img>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Details;