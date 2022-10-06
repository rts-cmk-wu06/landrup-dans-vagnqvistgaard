




function SwipeItem(props) {

    //console.log(props.url, props.title, props.minAge);

    return (
        <>
            <div className='bg-fixed bg-cover ml-14 mb-14'
                style={{
                    width: '88vw',
                    height: '38vh',
                    backgroundColor: '#EEEEEE',
                    backgroundImage: `url(${props.url})`,
                    scale: '100%',
                    borderRadius: '10%',
                    borderBottomRightRadius: '0%',
                }}>
                <div className='text-5xl font-light tracking-wider'
                    style={{
                        width: '88vw',
                        backgroundColor: '#E1A1E9EE',
                        position: 'absolute',
                        bottom: '0',
                        borderTopRightRadius: '75px',
                        borderBottomLeftRadius: '55px',
                    }}>
                    <p className='mx-12 pt-16'>{props.name}</p>
                    <p className='mx-12 my-0 pb-16 pt-4 text-4xl font-light tracking-wider'>{props.minAge}</p>
                </div>
            </div>
        </>
    )
}

export default SwipeItem;