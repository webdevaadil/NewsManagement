import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide , pagination} from "swiper/react";
import "swiper/css";
import Img1 from "../Images/blog-img3.png";
import Carousel from "react-elastic-carousel";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 }
];
export const Learnslider = ({newsdata}) => {
  return (
  <> 
          {/* <Swiper
            slidesPerView={3}
            spaceBetween={45}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            navigation={true}        
            modules={[Pagination, Navigation]}
            className="mySwiper"  
            
          >
            {newsdata&&newsdata.map((item,index)=>{
              return(
          <>
          <div className="tranding_1">
          <div className="tranding-item1">
          <div className="traningimg">            
          <SwiperSlide>
          <a
              target="blank"
              href={item.url}
            >
              {" "}
              <img src={item.img} alt="trandingimg"></img>
            </a>
          </SwiperSlide>

          </div>
          <a target="blank" href={item.url}>
            {item.title}
          </a>
        </div>
      </div>
</>
 )
})}
</Swiper> */}

      <div>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },         
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
           {newsdata&&newsdata.map((item,index)=>{
              console.log(item);
              return(
          <>
          <div className="tranding_1">
          <div className="tranding-item1">
          <div className="traningimg">            
          <SwiperSlide>
          <a
              target="blank"
              href={item.url}
            >
              {" "}
              <img src={item.img} alt="trandingimg"></img>
            </a>
          </SwiperSlide>

          </div>
          <a target="blank" href={item.url}>
            {item.title}
          </a>
        </div>
      </div>
      </>
      )
      })}
      </Swiper> */}
      <div className="container">
            <Carousel breakPoints={breakPoints}>
            {newsdata&&newsdata.map((item,index)=>{
              console.log(item);
              return(
          <>
          <div className="tranding-item1">
          <div className="traningimg">            
          
          <a
              target="blank"
              href={item.url}
            >
              {" "}
              <img src={item.img} alt="trandingimg"></img>
            </a>
         

          </div>
          <a target="blank" href={item.url}>
            {item.title}
          </a>
        </div>
    
      </>
      )
      })} 

            </Carousel>
            </div>
      </div>

  </>
  )
}
