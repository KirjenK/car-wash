import React from 'react';

import { Carousel } from 'react-carousel-minimal';

import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';
import img5 from './images/img5.jpeg';

interface Image {
  image: string;
}

export default function Slider():JSX.Element {
  const data: Image[] = [
    {
      image: img5,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img1,
    },
    {
      image: img2,
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#90268F',
  };

  return (
        <Carousel
          data={data}
          time={2500}
          captionStyle={captionStyle}
          radius="20px"
          slideNumber
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic
          dots
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails
          thumbnailWidth="100px"
          style={{
            cursor: 'pointer',
          }}
        />
  );
}
