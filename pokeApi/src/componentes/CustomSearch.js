
import React, { useState } from 'react';

const CustomSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="md-form active-cyan active-cyan-2 mb-3">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default CustomSearch;
