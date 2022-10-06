//so, here we: fetch into array, write texts, dynamically create the swipe items, 
//make one of the items clickable and linked.
import { Link } from 'react-router-dom';
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
            const data = await axios.get(`${baseUrl}activities`);  //aka response.data =await etc.....
            //console.log(data);
            setData(data);
        };
        getData();
    }, []);

    for (let key in data.data) {
        if (key < 6) {
            dataArray.push({ ...data.data[key], id: key, });
        }
    }


    const listItems = dataArray.map((dataItem, index) =>
        <li key={index}>
            {<SwipeItem
                url={dataItem.asset.url}
                name={dataItem.name}
                minAge={`${dataItem.minAge} år`} />
            }</li>
    );


    return (
        <>
            <div id='container' className='mx-auto px-0 py-1 m-2'
                style={{}}>
                <div id='swiper' className=''
                    style={{
                        //position: 'relative',
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





/*https://reactjs.org/docs/lists-and-keys.html*/