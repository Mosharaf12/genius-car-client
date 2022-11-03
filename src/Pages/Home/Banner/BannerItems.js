import React from 'react';
import './BannerItems.css'

const BannerItems = ({slide}) => {
    const {image,id,pre,next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
        <img src={image} alt='' className="w-full" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
         <h1 className='text-6xl font-bold text-white'>
          Affordable <br />
          Price for car <br />
          Servicing
         </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-1/2 ">
       <p className='text-xl text-white '>
          There are many variations of passages of available, but the majority have suffered alteration in some from.
       </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 top-3/4 ">
        <button className="btn btn-outline btn-success mr-5">Success</button>
        <button className="btn btn-warning">Warning</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${pre}`} className="btn btn-circle mr-5">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
      </div> 
    );
};

export default BannerItems;