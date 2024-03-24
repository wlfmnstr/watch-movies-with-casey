import { carouselItems } from './carousel-items.ts';

export const OurflixContent = () => {
  const validPhoneNumber = true; // Define validPhoneNumber as a boolean variable
  return <div className={`Content-wrapper ${validPhoneNumber ? '' : 'blurred'} content`}>
    <div className="movie-strip">
      {carouselItems.map((item, i) => (
        <div key={i} className="movie-item">
          <div className='movie-image-container'>
            <img className="movie-image" src={item.image} alt={item.title} />
          </div>
          <div className={`movie-title ${item.titleFont}`}>{item.title}</div>
          <div className="movie-description">{item.description}</div>
        </div>
      ))}
    </div>
  </div>;
};
