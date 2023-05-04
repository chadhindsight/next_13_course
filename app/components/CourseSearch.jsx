'use client';
import { useState } from 'react';

// Handles searching for courses
const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/courses/search?query=${query}`);
    const courses = await response.json();
    getSearchResults(courses);
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type='text'
        className='search-input'
        placeholder='Search Courses...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
};

export default CourseSearch;