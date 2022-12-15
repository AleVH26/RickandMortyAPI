export const Pagination = ({ prev, next, onPrev, onNext }) => {
  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <>
      <div className="buttonsContainer">
        {prev ? (
          <button onClick={handlePrev} className="paginationBtn">
            Previous
          </button>
        ) : null}
        {next ? (
          <button onClick={handleNext} className="paginationBtn">
            Next
          </button>
        ) : null}
      </div>
    </>
  );
};
