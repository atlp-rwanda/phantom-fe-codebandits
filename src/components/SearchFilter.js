import React from 'react';

<<<<<<< HEAD
const SearchFilter = ({ filter, setfilter }) => {
=======
const SearchFilter = ({ filter, setfilter, placeholder}) => {
>>>>>>> 753acfa (adds crud operations for buses)
  return (
    <div>
      <input
        type="text"
        value={filter || ''}
        onChange={(e) => setfilter(e.target.value)}
<<<<<<< HEAD
        placeholder="Search drivers..."
=======
        placeholder={placeholder}
>>>>>>> 753acfa (adds crud operations for buses)
        name="search"
        className='p-1 rounded-md border-2'
      />
    </div>
  );
};

export default SearchFilter;
