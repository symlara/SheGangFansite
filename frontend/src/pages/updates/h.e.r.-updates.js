import image01 from '../../assets/her-returns-to-form-on-her-debut-album-back-of-my-mind.jpg';


const HERUpdates = () => {

    return (
        <div className='app__updates__blog section__padding'>
            <div className='app__updates__blog-heading'>
                <h2 className='text-white'>H.E.R. Updates</h2>
            </div>
            <div className='app__updates__blog-container'>
                <div className='app__updates__blog-container_groupA'>
                    <img className="updates-image lazyload" src={image01} alt="back of my mind" />
                    &nbsp;
                    <div className='app__updates__blog-container_article'>
                        <div className='app__updates__blog-container_article-content'>
                            <a href="https://www.her-official.com/#tour" target="_blank" rel="noopener noreferrer"><h3>BOMM Tour Schedule</h3></a>
                        </div>
                    </div>
                </div>

                <div className='app__updates__blog-container_groupB'>
                    <div className='app__updates__blog-container_article'>
                        <div className='app__updates__blog-container_article-content'>
                            <a href="https://www.coldplay.com/tour/" target="_blank" rel="noopener noreferrer"><h3>World Tour w/ Coldplay</h3></a>
                        </div>
                    </div>

                    <div className='app__updates__blog-container_article'>
                        <div className='app__updates__blog-container_article-content'>
                            <h3>Appearances</h3>
                        </div>
                    </div>

                    <div className='app__updates__blog-container_article'>
                        <div className='app__updates__blog-container_article-content'>
                            <h3>Interviews</h3>
                            <ul>
                                <a href="https://www.ebony.com/covers/june-cover-her-and-dad-kenny-wilson/" target="_blank" rel="noopener noreferrer"><li className='text-white text-xl'>EBONY Cover Story</li></a>
                                <br />
                                <a href="https://www.essence.com/entertainment/exclusive-her-nationwide-campaign/" target="_blank" rel="noopener noreferrer"><li className='text-white text-xl'>Essence</li></a>
                            </ul>
                        </div>
                    </div>


                    <div className='app__updates__blog-container_article'>
                        <div className='app__updates__blog-container_article-content'>
                            <h3>Festivals</h3>
                            <ul>
                                <a href="http://lightsonfest.com/"  target="_blank" rel="noopener noreferrer"><li className='text-white text-xl'>Light On Fest</li></a>
                            </ul>
                        </div>
                    </div>

                    <div className='app__updates__blog-container_article'>
                        <div className='app__updates__blog-container_article-content'>
                            <h3>Collaborations</h3>
                            <ul>
                                <a href="https://news.nationwide.com/her-featured-in-new-nationwide-commercial/" target="_blank" rel="noopener noreferrer"><li className='text-white text-xl'>Nationwide</li></a>
                            </ul>
                        </div>
                    </div>

                    <div className='app__updates__blog-container_article'>
                        <div className='app__updates__blog-container_article-content'>
                            <a href="#/"  rel="noopener"><h3>Projects</h3></a>
                        </div>
                    </div>

                    <div className='app__updates__blog-container_article'>
                        <div className='app__updates__blog-container_article-content'>
                            <h3>Acting Gigs</h3>
                            <ul>
                                <a href="https://www.hollywoodreporter.com/movies/movie-news/h-e-r-to-make-acting-debut-in-the-color-purple-movie-musical-exclusive-1235004336/" target="_blank" rel="noopener noreferrer"><li className='text-white text-xl'>Acting Debut in ‘The Color Purple’</li></a>
                                <br />
                                <a href="https://insidethemagic.net/2022/07/her-belle-beauty-and-the-beast-special-th1/" target="_blank" rel="noopener noreferrer"><li className='text-white text-xl'>H.E.R. Cast as Disney Princess Belle For New ‘Beauty and the Beast’ Movie</li></a>
                            </ul>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HERUpdates;