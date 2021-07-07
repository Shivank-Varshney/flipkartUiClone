import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "../Assets/ad-1.jpg";
import Img2 from "../Assets/ad-2.jpg";
import Img3 from "../Assets/ad-3.jpg";

function Ads() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 720,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 320,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <>
      <div id="ads">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
                {AdData.map((val, index) => {
                  return <Adver key={index} imgsrc={val.imgsrc} />;
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Adver = (props) => {
  return (
    <>
      <div className="card-data mx-2">
        <img src={props.imgsrc} className="img-fluid" alt="advertisement" />
      </div>
    </>
  );
};

const AdData = [{ imgsrc: Img1 }, { imgsrc: Img2 }, { imgsrc: Img3 }];

export default Ads;
