import PropTypes from 'prop-types';  // Import PropTypes

const Card = ({ data }) => {
  console.log(data);

 

  return (
    <div className="cardContainer">
      {data?.map((curItem, index) => (
      
          <div className="card" key={index}>
          <img src={curItem.urlToImage} alt="News" />
          <div className="cardContent">
            <a className="title" onClick={() => window.open(curItem.url)}>
              {curItem.title}
            </a>
            <p>{curItem.description}</p>
            <button onClick={() => window.open(curItem.url)}>Read More</button>
          </div>
        </div>
        
      
      ))}
    </div>
  );
};

// Add PropTypes validation
Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      urlToImage: PropTypes.string,
      url: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Card;