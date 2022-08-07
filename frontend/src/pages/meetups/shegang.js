import 'react-multi-carousel/lib/styles.css';
import image02 from '../../assets/shegang.png';
import 'tachyons'

const Meetups = () => {
    return (
        <div className='app__meetups__blog section__padding'>
            <div className='app__updates__blog-heading'>
                <h2 className='text-white text-3xl font-semibold text-center pb-3' id="shegang">SheGang Meetups</h2>
            </div>
            <div className='app__meetups__blog-container'>
                <div className='app__meetups__blog-container_groupA'>
                    <img className="meetups-image lazyload" src={image02} alt="shegang" />
                    &nbsp;
                    <div className='app__meetups__blog-container_article'>
                        <div className='app__meetups__blog-container_article-content'>
                            <a href="http://lightsonfest.com/" target="_blank" rel="noopener noreferrer"><h3>Lights On Fest</h3></a>
                        </div>
                    </div>
                </div>

               <div className='app__meetups__blog-container_groupB'>
                    <div className='app__meetups__blog-container_article'>
                        <div className='app__meetups__blog-container_article-content'>
                           <h3>Tour Meet Ups</h3>
                                <ul>
                                    <a href="https://www.her-official.com/#tour" target="_blank" rel="noopener noreferrer"><li className='text-white text-xl'>BOMM Tour Schedule</li></a>
                                    <a href="https://www.coldplay.com/tour/" target="_blank" rel="noopener noreferrer"><li className='text-white text-xl'>World Tour w/ Coldplay</li></a>
                                </ul>
                        </div>
                    </div>

                    <div className='app__meetups__blog-container_article'>
                        <div className='app__meetups__blog-container_article-content'>
                            <h3>Traveling</h3>
                        </div>
                    </div>

                    <div className='app__meetups__blog-container_article'>
                        <div className='app__meetups__blog-container_article-content'>
                            <h3>Adventures</h3>
                        </div>
                    </div>

                    <div className='app__meetups__blog-container_article'>
                        <div className='app__meetups__blog-container_article-content'>
                            <h3>Connections for professional and networking purposes</h3>
                        </div>
                    </div>
                    
               </div>
            </div>
        </div>
    );
}

export default Meetups;