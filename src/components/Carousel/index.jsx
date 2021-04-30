import React from 'react';
import Slider from 'react-slick';

import CarouselItem from './item';
import Dots from './dots';

import Slide1 from '../../assets/slides/slide1.png';
import Slide2 from '../../assets/slides/slide2.png';
import Slide3 from '../../assets/slides/slide3.png';
import Slide4 from '../../assets/slides/slide4.png';

const Carousel = () => {
  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    infinite: true,
    autoplay: true,
    appendDots: (dots) => <Dots dots={dots} />,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  return (
    <Slider {...settings} className="carousel">
      <CarouselItem
        image={Slide1}
        title="Marcenas mattis egestas"
        description="Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta."
      />
      <CarouselItem
        image={Slide2}
        title="Lorem ipsum dolor sit amet"
        description="Suspendisse potenti. Mauris dictum justo sit amet aliquam elementum."
      />
      <CarouselItem
        image={Slide3}
        title="Nullam sit amet odio lobortis"
        description="Nunc commodo mi nec quam congue rhoncus."
      />
      <CarouselItem
        image={Slide4}
        title="Phasellus tempor vulputate luctus"
        description="Mauris vel mauris varius, dapibus urna eget, finibus nisi."
      />
    </Slider>
  );
};

export default Carousel;
