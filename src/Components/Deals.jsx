import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavLink} from "react-router-dom";
import Slider from "react-slick";
import Img1 from "../Assets/item-1.jpeg";
import Img2 from "../Assets/item-2.jpeg";
import Img3 from "../Assets/item-3.jpeg";
import Img4 from "../Assets/item-4.jpeg";
import Img5 from "../Assets/item-5.jpeg";
import Img6 from "../Assets/item-6.jpeg";
import Img7 from "../Assets/item-7.jpeg";

function Deals() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 720,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 },
      },
    ],
  };
  return (
    <>
      {/* <!-- Furniture Bestsellers Slider --> */}
      <div className="container-fluid items-section bg-white my-3 py-2 border shadow-sm">
        <div className="row pt-3">
          <div className="col slider-heading">
            <h4>Top Offers On</h4>
            <h6 className="text-muted">Men's Accessories</h6>
          </div>
          <div className="col col-sm-4 view-btn">
            <div>
              <button className="btn btn-primary shadow">View All</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Slider {...settings}>
                {itemData.map((val, index) => {
                  return (
                    <Item
                      key={index}
                      imgsrc={val.imgsrc}
                      text={val.text}
                      offer={val.offer}
                      detail={val.detail}
                    />
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

const Item = (props) => {
  return (
    <>
      <div className="card-data text-center">
        <img
          src={props.imgsrc}
          className="p-2 img-fluid"
          alt="item"
          height="300"
        />
        <div className="card-body p-1">
          <h6 className="card-title">{props.text}</h6>
          <NavLink to="/" className="card-link">
            {props.offer}
          </NavLink>
          <p className="card-subtitle text-muted mt-2">{props.detail}</p>
        </div>
      </div>
    </>
  );
};

const itemData = [
  {
    imgsrc: Img1,
    text: "Lorem Ipsum",
    offer: "Upto 70% Off",
    detail: "Accessories",
  },
  {
    imgsrc: Img2,
    text: "Lorem Ipsum",
    offer: "Upto 70% Off",
    detail: "Accessories",
  },
  {
    imgsrc: Img3,
    text: "Lorem Ipsum",
    offer: "Upto 70% Off",
    detail: "Accessories",
  },
  {
    imgsrc: Img4,
    text: "Lorem Ipsum",
    offer: "Upto 70% Off",
    detail: "Accessories",
  },
  {
    imgsrc: Img5,
    text: "Lorem Ipsum",
    offer: "Upto 70% Off",
    detail: "Accessories",
  },
  {
    imgsrc: Img6,
    text: "Lorem Ipsum",
    offer: "Upto 70% Off",
    detail: "Accessories",
  },
  {
    imgsrc: Img7,
    text: "Lorem Ipsum",
    offer: "Upto 70% Off",
    detail: "Accessories",
  },
];

export default Deals;
