import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json'
    )
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentRecords = projects.slice(startIndex, startIndex + recordsPerPage);
  const totalPages = Math.ceil(projects.length / recordsPerPage);

  return (
    <div className="app">
      <h1>Kickstarter Projects</h1>
      <Table data={currentRecords} />
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        Showing page {currentPage} of {totalPages}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default App;
