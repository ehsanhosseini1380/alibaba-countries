import "./module.css";

const Card = ({ image, title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p >
          <strong>Population:</strong><span className="card-description">{description.population}</span>
        </p>
        <p >
          <strong>Region:</strong><span className="card-description">{description.region}</span>
        </p>
        <p>
          <strong>Capital:</strong><span className="card-description">{description.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
