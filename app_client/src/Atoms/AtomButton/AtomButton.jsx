import PropTypes from 'prop-types';
import "./AtomButton.css";
function AtomButton({ capital, lowercase, special }) {
    return (
        <div className="atom-button">
            <span className="capital-letter char-position">{capital}</span>
            <span className="lower-case char-position">{lowercase}</span>
            <span className="special-character char-position">{special}</span>
            <span className="vazio"></span>
        </div>
    )
}

AtomButton.propTypes = {
    capital: PropTypes.string.isRequired,
    lowercase: PropTypes.string.isRequired,
    special: PropTypes.string.isRequired
};
  
export default AtomButton;
  