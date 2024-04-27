import PropTypes from 'prop-types';
import "./AtomButton.css";
function AtomButton({ capital, lowercase, special, pressed }) {
    return (
        <div className={`atom-button ${pressed}`}>
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
    special: PropTypes.string.isRequired,
    pressed: PropTypes.string
};
  
export default AtomButton;
  