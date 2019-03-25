import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';
import Image1 from '../media/carouselPics/pic1.jpg';
import Image2 from '../media/carouselPics/pic2.jpg';
import Image3 from '../media/carouselPics/pic3.jpg';
import Image4 from '../media/carouselPics/pic4.jpg';
import Image5 from '../media/carouselPics/pic5.jpg';
import Image6 from '../media/carouselPics/pic6.jpg';
import Image7 from '../media/carouselPics/pic7.jpg';
import Image8 from '../media/carouselPics/pic8.jpg';
import Image9 from '../media/carouselPics/pic9.jpg';
import Image10 from '../media/carouselPics/pic10.jpg';
import Image11 from '../media/carouselPics/pic11.jpg';
import '../style/carousel.css';

// const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8,
//                 Image9, Image10, Image11];
 
class DemoCarousel extends Component {
    render() {
        const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8,
            Image9, Image10, Image11];
        let carouselContents = [];
        images.forEach(element => {
            carouselContents.push(
                    <img src={`${element}`} />
                    
                   )
        })
       
        return (
            <div id="carouselContainer">
                <Carousel 
                autoPlay={true} 
                infiniteLoop={true} 
                dynamicHeight={false} 
                stopOnHover={false}
                width={"100%"}
                
                
                >
                    
                    {carouselContents}
                </Carousel>

            </div>
        );
    }
};
 
export default DemoCarousel;