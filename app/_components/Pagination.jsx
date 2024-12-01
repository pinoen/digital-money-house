const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage <= 2) {
      pages.push(1, 2, 3, '...');
    } else if (currentPage >= totalPages - 1) {
      pages.push('...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...');
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-4 mb-28 gap-2">
      {generatePageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && setCurrentPage(page)}
          className={`px-4 py-2 rounded ${currentPage === page
            ? 'bg-blue-700 text-white font-bold'
            : page === '...'
              ? 'bg-gray-300 text-gray-700 cursor-default'
              : 'bg-blue-500 text-white'
            }`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
