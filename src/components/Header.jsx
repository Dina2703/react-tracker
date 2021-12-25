import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="ok" />
      <Button color="red" text="remove" />
      <Button color="blue" text="add" />
    </header>
  );
}

//default props
// Header.defaultProps = {
//   subtitle: "subtitle",
// };

//PropTypes helps you catch errors before they happen
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS
// const subtitleStyle = {
//   color: "red",
//   backgroundColor: "gray",
// };

export default Header;
