import React from 'react';
import PropTypes from 'prop-types';

function Filter({ setFilterToState }) {
  const setFilterValue = (event) => {
    let value = event.currentTarget.value.toUpperCase();
    setFilterToState(value);
  };

  return (
    <div>
      <h4>Find contacts by name</h4>
      <input onChange={setFilterValue}></input>
    </div>
  );
}

Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};

export default Filter;
