import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getData } from "../../services/httpManager";
import { ThemeContext } from "../../providers/ThemeProvider";
import { CountriesContext } from "../../providers/CountriesProvider";
import Chip from "../../components/chip/Chip";
import PropTypes from "prop-types";
import "./module.css";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);
  const { detailCountry, setDetailCountry } = useContext(CountriesContext);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleChipClick = (borderedCountry) => {
    navigate(`/country/${borderedCountry}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://restcountries.com/v2/alpha/${id}?fields=nativeName,topLevelDomain,currencies,languages,population,name,subregion,flag,region,capital,borders,alpha3Code`;
        const data = await getData(apiUrl);
        setDetailCountry(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className={`content ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {Object.keys(detailCountry).length !== 0 && detailCountry.alpha3Code === id ? (
        <div className="parent">
          <div className="left-child">
            <div className="btn">
              <button className="back-btn" onClick={handleBackClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`back-btn-icon ${
                    isDarkMode ? "back-btn-icon--dark" : "back-btn-icon--light"
                  }`}
                >
                  <path d="M19 12H5M12 19L5 12l7-7" />
                </svg>
                Back
              </button>
            </div>
            <img src={detailCountry.flag} alt={`${detailCountry.name} flag`} />
          </div>
          <div className="right-child">
            <h2 className="label">{detailCountry.name}</h2>
            <div className="grid">
              <div className="stack">
                <DetailRow
                  label="Native Name"
                  value={detailCountry.nativeName}
                />
                <DetailRow
                  label="Population"
                  value={detailCountry.population.toLocaleString()}
                />
                <DetailRow label="Region" value={detailCountry.region} />
                <DetailRow label="Sub Region" value={detailCountry.subregion} />
                <DetailRow label="Capital" value={detailCountry.capital} />
              </div>
              <div className="stack">
                <DetailRow
                  label="Top Level Domain"
                  value={detailCountry.topLevelDomain.join(",")}
                />
                <DetailRow
                  label="Currencies"
                  value={detailCountry.currencies
                    .map((item) => item.name)
                    .join(",")}
                />
                <DetailRow
                  label="Languages"
                  value={detailCountry.languages
                    .map((item) => item.name)
                    .join(",")}
                />
              </div>
            </div>
            {detailCountry.borders && (
              <div className="chips-container">
                <p className="label">Border Countries:</p>
                {detailCountry.borders.map((borderedCountry) => (
                  <Chip
                    key={borderedCountry}
                    label={borderedCountry}
                    onClick={() => handleChipClick(borderedCountry)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const DetailRow = ({ label, value }) => {
  return (
    <p className="label">
      {label}:<span className="description">{value}</span>
    </p>
  );
};

export default DetailPage;
