import PropTypes from 'prop-types';

function Header({title, subtitle}) {
  return (
    <header>
      <h1>Task Tracker {title} -- {subtitle}</h1>
    </header>
  );
}

//default props
Header.defaultProps = {
  subtitle: 'subtitle'
}

//PropTypes helps you catch errors before they happen
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
