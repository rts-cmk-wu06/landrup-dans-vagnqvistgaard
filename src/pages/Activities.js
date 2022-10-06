//Aktiviteter...
import FetchMySwipe from './../components/FetchMySwipe';



function Activities() {


    return (
        <>
            <div id='main'
                style={{
                    backgroundColor: '#5E2E53',
                    width: '100vw',
                    height: '100vh',
                }}>
                <div id='header' className='m-0'
                    style={{
                        backgroundColor: '#5E2E53',
                        width: '100vw',
                        height: '13vh',
                        zIndex: '10',

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
                <div className='none'>
                    <FetchMySwipe />
                </div>
            </div>
        </>
    )
}

export default Activities;