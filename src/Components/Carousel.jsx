import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "../Assets/carousel-1.jpg";
import Img2 from "../Assets/carousel-2.jpg";
import Img3 from "../Assets/carousel-3.jpg";
import Img4 from "../Assets/carousel-4.jpg";
import Img5 from "../Assets/carousel-5.jpg";
import Img6 from "../Assets/carousel-6.jpg";

function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <>
      <div id="banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
            <Slider {...settings}>
                {CarouselData.map((val, index) => {
                  return (
                    <Banner key={index} imgsrc={val.imgsrc} />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Banner = (props) =>{
    return(
        <>
            <div className="card-data">
                <img src={props.imgsrc} className="img-fluid" alt="banner" />
            </div>
        </>
    );
}

const CarouselData = [
    { imgsrc: Img1},
    { imgsrc: Img2},
    { imgsrc: Img3},
    { imgsrc: Img4},
    { imgsrc: Img5},
    { imgsrc: Img6}
  ];

export default Carousel;
