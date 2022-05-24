

const Profile = () => {
  return (
    <main className='main-content'>
          <div className='card'>
            <div className='inner-for__img'>
              <div className='main-content__img'>
                <img
                  src='https://images.unsplash.com/photo-1615003162333-d3ff3ce1f0f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dWx0cmElMjB3aWRlJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                  alt='background_img'
                />
              </div>
            </div>
            <div className='card-inner'>
              <div className='card__avatar'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOi6B1EjD4lkdZg4ClLhWTxjsfVQVRsdW1aw&usqp=CAU'
                  alt='avatar'
                />
              </div>
              <div className='card__info'>
                <h3 className='card__h3'>Igor Sivakov</h3>
                <p className='card__p'>Date of birth: 19th october</p>
                <p className='card__p'>City: KIEV</p>
                <p className='card__p'>Education: KPI'12</p>
                <p className='card__p'>Web site: //it-kamasutra.com</p>
              </div>
            </div>
          </div>
          <div className='post-inner'>
            <div className='post-wrapper'>
              <div className='post__h3'>My post</div>
              <textarea
                className='text-area'
                placeholder='your news...'
              ></textarea>
              <button className='button'>Send</button>
            </div>
          </div>
          <div className='comments-inner'>
            <div className='commetns__circle'></div>
            <div className='comments__text'>Hey, why nobody loves me?</div>
          </div>
        </main>
  );
}

export default Profile;