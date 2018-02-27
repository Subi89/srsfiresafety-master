import React, { Component } from 'react';
import carouselStyles from '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
var Carousel = require('react-responsive-carousel').Carousel;


class carousel extends Component {
    render(){
        return(
            <div class={carouselStyles.carousel}>
                <Carousel autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src={require('../images/1.jpg')} alt={""} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={require('../images/2.jpg')} alt={""} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={require('../images/1.jpg')} alt={""} />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={require('../images/2.jpg')} alt={""} />
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={require('../images/1.jpg')} alt={""} />
                        <p className="legend">Legend 5</p>
                    </div>
                    <div>
                        <img src={require('../images/2.jpg')} alt={""} />
                        <p className="legend">Legend 6</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default carousel;