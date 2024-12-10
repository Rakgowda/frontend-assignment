import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav
      aria-label="Pagination Navigation"
      role="navigation"
      className="pagination"
    >
      <button
        aria-label="Previous page"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span aria-live="polite">
        Page {currentPage} of {totalPages}
      </span>
      <button
        aria-label="Next page"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
