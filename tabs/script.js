window.addEventListener('DOMContentLoaded', function () {

  'use strict';
  let tabsHeader = document.querySelector('.tabs-header'),
    tabsHeaderTitle = document.querySelectorAll('.tabs-header__title'),
    tabsContent = document.querySelectorAll('.tabs-content');


  function hideTabsContent(a) {
    for (let i = a; i < tabsContent.length; i++) {
      tabsContent[i].classList.remove('show');
      tabsContent[i].classList.add('hide');
    }
  }

  hideTabsContent(1);

  function showTabsContent(b) {
    if (tabsContent[b].classList.contains('hide')) {
      tabsContent[b].classList.add('show');
      tabsContent[b].classList.remove('hide');
    }
  }

  tabsHeader.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('tabs-header__title')) {
      for (let i = 0; i < tabsHeaderTitle.length; i++) {
        if (target == tabsHeaderTitle[i]) {
          hideTabsContent(0);
          showTabsContent(i);
          break;
        }
      }
    }
  });
});