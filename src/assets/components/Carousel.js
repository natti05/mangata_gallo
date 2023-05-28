import React from "react";
import Flickity from 'react-flickity-component';

const flickityOptions = {
    initialIndex: 2
}

export default function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src="../images/pic6.jpg" alt=''/>
      <img src="../images/pic7.jpg" alt=''/>
      <img src="../images/pic8.jpg" alt=''/>
    </Flickity>
  )
};
