import PropTypes from "prop-types";

function Header({ title, subtitle }) {
  return (
    <header>
      <h1 style={{ color: "yellow", backgroundColor: "black" }}>
        Task Tracker {title}
      </h1>
      <h2 style={subtitleStyle}>{subtitle}</h2>
    </header>
  );
}

//default props
Header.defaultProps = {
  subtitle: "subtitle",
};

//PropTypes helps you catch errors before they happen
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS
const subtitleStyle = {
  color: "red",
  backgroundColor: "gray",
};

export default Header;
