import './Users.css';
import UserProfile from './UserProfile';

const Users = (props) => {
  let userProfileElement = props.state.users.map((profile) => (
    <UserProfile
      user={profile}
      key={profile.id}
      getFollow={props.getFollow}
      getUnfollow={props.getUnfollow}
      followingInProgress={props.state.followingInProgress}
    />
  ));

  let pagesCount = Math.ceil(
    props.state.totalUsersCount / props.state.pageSize
  );

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let curP = props.state.currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);
  let randomPageNumber = Math.floor(Math.random() * 10);

  return (
    <div className='find-friends'>
      <h2 className='main-page__h2'>USERS</h2>
      {userProfileElement}
      <div className='find-friends__pageBtn__inner'>
        <button
          className='find-friends__pageBtn btn'
          onClick={(event) => {
            props.onPageChanged(randomPageNumber);
          }}
        >
          Show more
        </button>
      </div>
      <div className='find-friends__pagination'>
        {slicedPages.map((page) => {
          return (
            <div className='find-friends__pagination__page' key={page.id}>
              <div
                key={page.id}
                className={
                  props.state.currentPage === page ? 'selected_page' : ''
                }
                onClick={(event) => {
                  props.onPageChanged(page);
                }}
              >
                {page}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
