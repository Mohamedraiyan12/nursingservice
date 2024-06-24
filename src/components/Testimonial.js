
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from './Reviews';
// import Quote from './assets/homeimg.png';
import './Testimonial.css'
const Testimonial = () => {
  return (
    <section className="testimonialcontent" id='testimonial'>
      <div className="container">
      <div className="testimonialheading">
        <h5>Testimonial</h5>
        <h2>What members are saying</h2>
      </div>
      <div className="slider-container">
        {/* <blockquote>
          <img className="top-quote quote" src={Quote} alt="quote"/>
          <img className="bottom-quote quote" src={Quote} alt="quote"/>
        </blockquote> */}
        <Splide className="splide"
          options={{
            perPage: 1,
            autoplay: true,
            speed: 500,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id} className="spliderbox">
              <img className="review-img" src={review.image} alt=""  width={150} height={150}/>
              <div className="content">
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      </div>
    </section>
  );
};
export default Testimonial;