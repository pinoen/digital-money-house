const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Anterior
      </button>
      <span>{currentPage} de {totalPages}</span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Siguiente
      </button>
    </div>
  )
}

export default Pagination
