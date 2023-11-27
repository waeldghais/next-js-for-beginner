import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label }) => {
  return (
    <button className="bg-gray-800 text-white font-bold cursor-pointer px-6 py-2">{label}</button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
 // onClick: PropTypes.func,
};

export default Button;