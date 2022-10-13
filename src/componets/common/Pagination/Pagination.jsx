import './Pagination.css';

const Pagination = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  halfPortionSize = 5,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let curP = currentPage;
  let curPF = curP - halfPortionSize < 0 ? 0 : curP - halfPortionSize;
  let curPL = curP + halfPortionSize;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div className='pagination'>
      {slicedPages.map((page) => {
        return (
          <div className='pagination__page' key={page}>
            <span
              key={page}
              className={currentPage === page ? 'selected_page' : ''}
              onClick={(event) => {
                onPageChanged(page);
              }}
            >
              {page}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
