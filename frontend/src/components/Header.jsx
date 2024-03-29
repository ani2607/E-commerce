import PropTypes from 'prop-types';
function Header({title}) {
  return (
    <div>
        <hr className="mt-10"/>
      <h1 className="text-7xl my-2 text-center font-bold">{title||'Mens Section'}</h1>
    </div>
  )
}

export default Header
Header.propTypes = {
  title: PropTypes.string.isRequired,
};