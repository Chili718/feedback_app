import PropTypes from 'prop-types'; /* import prop types impt */

function Header({text = 'Feedback UI'}) {
  return (
    <header>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

/*
Alternate Way to set the default prop types

Header.defaultProps = {
    text: 'Feedback UI',
} */

/* Header.propTypes = {
    text: PropTypes.string,
} */

export default Header;
