import PropTypes from "prop-types";
import Button from "./Button";
// Can do (props) to get all props or just do {title} to get the props.title
const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" />
      <Button />
    </header>
  );
};

// Default props
Header.defaultProps = {
  title: "Task Tracker",
};

// Set the type of the prop, shows warning in console if type is wrong, but still renders
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS that can be applied to an element by using: style={headingStyle}
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
