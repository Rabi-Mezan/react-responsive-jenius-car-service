import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://raw.githubusercontent.com/ProgrammingHero1/Genius-Car-Mechanics-module-61/main/src/images/banner/banner1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>We Provide The Best Service</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://raw.githubusercontent.com/ProgrammingHero1/Genius-Car-Mechanics-module-61/main/src/images/banner/banner2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We Have The Best Mechanics</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://raw.githubusercontent.com/ProgrammingHero1/Genius-Car-Mechanics-module-61/main/src/images/banner/banner3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We Charge The Least </h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default Banner;