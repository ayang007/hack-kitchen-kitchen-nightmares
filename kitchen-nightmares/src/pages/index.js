import React from 'react';
import fanart1 from '../img/fanart1.png';
import fanart2 from '../img/fanart2.jpeg';
import fanart3 from '../img/fanart3.jpeg';
import fanart4 from '../img/fanart4.jpeg';
import './index.css';

import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
    return (
        <>
            <h1>Welcome to Gordon Ramsay's fanpage!</h1>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/rEMXENwQZA4?controls=0&autoplay=1&mute=1&playsinline=1&playlist=rEMXENwQZA4&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="pad-home">
            <p>I love Gordon!!!!!
            I don't really know much web dev but I knew that I had to make this website. And I'm a very perseverant person so I will endure through this <b>pain</b> that is the process of making this in order to appease my man.
            </p>
            <p>
                Anyway, here's some fanart I did yesterday I thin it looks pretty good, hope you like it Gordon!!!!!!!! &lt;3
            </p>
            </div>
            <div className="carousel-div">
                <Carousel variant="dark" className="carousel">
                    <Carousel.Item>
                        <img src={fanart1} alt="Fanart 1" className="fanart"/>
                        <Carousel.Caption>
                            <h3>Fanart 1</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={fanart2} alt="Fanart 2" className="fanart"/>
                        <Carousel.Caption>
                            <h3>Fanart 2</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={fanart3} alt="Fanart 3" className="fanart"/>
                        <Carousel.Caption>
                            <h3>Fanart 3</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={fanart4} alt="Fanart 4" className="fanart"/>
                        <Carousel.Caption>
                            <h3>Fanart 4</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div class="pad-home">
            <section>
                <h2>Blog</h2>
                Also i didn't mention this before but I hope you liked the fancam I made. I spent a while doing it because I have never used movie maker before so it was like, I don't know, pretty annoying. Whoever made that needs to like talk to people because clearly it is not intuitive at all!

                <p>
                    Also this whole HTML thing, like it seems so pointless, like why can't I just type what I want and have it appear, why do I need these random like p? Like I don't wanna type that, I just want to type the things that I think and have that appear like is that so hard? Man, some people are such idiots. 
                </p>

                <p> Oh I just remembered, I need to go shopping and I dont want to forget the things I need so let me make a list. 
                </p>
                <ul>
                    <li>ground beef</li>
                    <li>pa</li>
                </ul>
            </section>
            </div>
        </>
    );
};
