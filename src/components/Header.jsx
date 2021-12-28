import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title, onAdd, showAdd }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
    </header>
  );
}

//default props
Header.defaultProps = {
  title: "Task Tracker",
};

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
