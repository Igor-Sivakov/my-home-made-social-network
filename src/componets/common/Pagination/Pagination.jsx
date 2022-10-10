import './Pagination.css';

const Pagination = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let curP = currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div className='find-friends__pagination'>
      {slicedPages.map((page) => {
        return (
          <div className='find-friends__pagination__page' key={page}>
            <div
              key={page}
              className={currentPage === page ? 'selected_page' : ''}
              onClick={(event) => {
                onPageChanged(page);
              }}
            >
              {page}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
