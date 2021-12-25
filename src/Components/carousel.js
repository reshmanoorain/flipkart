import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./slider.css"
function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 5,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    }
    return (
      <div className="carousel">
        <Slider className="carousel-one" {...settings}>
          <div>
            <img className="slideimg" src="https://www.shopickr.com/wp-content/uploads/2015/06/snapdeal-intel-laptops-exchange-offers-6-27-2015.jpg" alt="" />
          </div>
          <div>
          <img className="slideimg" src="https://d3jayn037su4mq.cloudfront.net/sliders/mode-slider.jpg" alt="" />
          </div>
          <div>
            <img className="slideimg" src="https://www.americanexpress.com/content/dam/amex/in/staticassets/Reward-Multiplier/Flipkartcarouselbanner.jpg" alt="" />
          </div>
          <div>
          <img className="slideimg" src="https://rukminim1.flixcart.com/flap/844/140/image/15c2d4b3f35202c7.jpg?q=50" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
export default Carousel;
