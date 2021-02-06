import PropTypes from "prop-types";

export const Button = ({ color, text, onClick }) => {
  return (
    <button
      // Since this is a component the onClick is a prop
      // that is decided by the parent
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
  text: "Button",
  onClick: null,
};

Button.propType = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
