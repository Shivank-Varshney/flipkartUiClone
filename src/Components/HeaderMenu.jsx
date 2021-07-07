import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "../Assets/item-list-1.png";
import Img2 from "../Assets/item-list-2.png";
import Img3 from "../Assets/item-list-3.png";
import Img4 from "../Assets/item-list-4.png";
import Img5 from "../Assets/item-list-5.png";
import Img6 from "../Assets/item-list-6.png";
import Img7 from "../Assets/item-list-7.jpg";
import Img8 from "../Assets/item-list-8.png";
import Img9 from "../Assets/item-list-9.png";

function HeaderMenu() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 8}
        },
        {
          breakpoint: 720,
          settings: { slidesToShow: 7}
        },
        {
          breakpoint: 480,
          settings: { slidesToShow: 6}
        }
      ]
  };
  return (
    <>
      <div className="container-fluid" id="sub-menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
                {CardData.map((val, index) => {
                  return (
                    <Card key={index} imgsrc={val.imgsrc} text={val.text} />
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

const Card = (props) => {
  return (
    <>
      <div className="card-data">
        <img
          src={props.imgsrc}
          className="img-fluid mx-auto"
          alt="header menu"
        />
        <p className="text-center bolder">{props.text}</p>
      </div>
    </>
  );
};

const CardData = [
  { imgsrc: Img9, text: "Top Offers" },
  { imgsrc: Img1, text: "Appliances" },
  { imgsrc: Img2, text: "Mobiles" },
  { imgsrc: Img3, text: "Electronics" },
  { imgsrc: Img4, text: "Fashion" },
  { imgsrc: Img5, text: "Grocery" },
  { imgsrc: Img6, text: "Travel" },
  { imgsrc: Img7, text: "Home" },
  { imgsrc: Img8, text: "Toys" },
];

export default HeaderMenu;
