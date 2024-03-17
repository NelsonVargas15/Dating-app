import "../assets/css/counter.css";
import PropTypes from "prop-types";

const Counter = ({ clicksCount }) => <div className="contador">{clicksCount}</div>;

Counter.propTypes = {
  clicksCount: PropTypes.number.isRequired,
};

export default Counter;
