let sideBarLink = document.getElementsByClassName('side-bar__item__link');
for (let i = 0; sideBarLink.length; i++) {
  sideBarLink[i].addEventListener('click', function () {
    let current = document.getElementsByClassName(
      'side-bar__item__link_active'
    );
    current[0].className = current[0].className.replace(
      ' side-bar__item__link_active',
      ''
    );
    this.className += ' side-bar__item__link_active';
  });
}
