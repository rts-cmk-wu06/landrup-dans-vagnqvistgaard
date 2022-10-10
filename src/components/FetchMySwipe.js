
import axios from 'axios';
import { useEffect, useState } from 'react';

import SwipeItem from './SwipeItem';



function FetchMySwipe() {

    /******************* fetching ********************/

    const baseUrl = 'http://localhost:4000/api/v1/';

    const dataArray = [];

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(`${baseUrl}activities`);
            setData(data);
        };
        getData();
    }, []);

    /**************** data processing *****************************/

    for (let key in data.data) {
        if (key < 6) {
            dataArray.push({ ...data.data[key], id: key, });
        }
    }


    const listItems = dataArray.map((dataItem, index) =>
        <li key={index}>
            {<SwipeItem
                detailsID={index}
                url={dataItem.asset.url}
                name={dataItem.name}
                minAge={`${dataItem.minAge} år`} />
            }</li>
    );
    /****************************************************************/

    return (
        <>
            <div id='container' className='mx-auto px-0 py-1'
                style={{
                    backgroundColor: '#5E2E53',
                    //width: '100vw',
                }}>
                <div id='filler' className=''
                    style={{
                        width: '100vw',
                        height: '13vh',
                    }}>
                </div>
                <div id='swiper' className=''
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                    <div id='swipes' className='p-0 m-0'
                        style={{
                            display: 'flex',
                            overflowY: 'hidden',
                            position: 'relative',
                            scrollBehavior: 'smooth',
                            scrollSnapType: 'y mandatory',
                        }}>
                        <div className='flex flex-col p-0 m-0' >
                            <ul>{listItems}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default FetchMySwipe;









    //<>
    //<SwipeItem id={'hdgf'} />
    //<SwipeItem id={'nmlksd'} />
    //<SwipeItem id={'jasiv'} />
    //<SwipeItem id={'skjdhfasi'} />
    //<SwipeItem id={'kjadu'} />
    //</>


