import PropTypes from "prop-types";
import { Button } from "rsuite";
import "../assets/css/boton.css";

const CustomButton = ({ text, handleClick }) => (
  <Button color="blue" appearance="primary" size="lg"  onClick={handleClick}>
    {text}
  </Button>
);

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CustomButton;