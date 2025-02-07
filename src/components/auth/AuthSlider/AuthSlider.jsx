import Slider from "react-slick";
import quotesIcon from "../../../images/auth/quotes.svg";
import quotesUA from "../../quotes/ua/quotesUA.json";
import nextArrow from "../../../images/auth/arrowsSlider/nextArrow.svg";
import prevArrow from "../../../images/auth/arrowsSlider/prevArrow.svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-next slick-arrow" onClick={onClick}>
      <svg className="sliderIcon" width="5" height="10">
        <use href={nextArrow + "#icon-nextArrow"}></use>
      </svg>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-prev slick-arrow" onClick={onClick}>
      <svg className="sliderIcon" width="5" height="10">
        <use href={prevArrow + "#icon-prevArrow"}></use>
      </svg>
    </button>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const AuthSlider = () => {
  return (
    <div>
      <Slider {...settings}>
        {quotesUA.map((quote) => (
          <div className="sliderContainer" key={quote.id}>
            <svg className="quotesIcon" width="31" height="25">
              <use href={quotesIcon + "#icon-quotes"}></use>
            </svg>
            <p className="loginPageText">{quote.quote}</p>
            <p className="authorText">{quote.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AuthSlider;
