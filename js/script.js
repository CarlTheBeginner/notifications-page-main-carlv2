'use strict';

const notifCount = document.querySelector('.notification-count');
const notifUnread = document.querySelectorAll('.unread');
const redDot = document.querySelectorAll('.red-dot');
const btnMarkAsRead = document.querySelector('.notification-link');

notifCount.innerHTML = notifUnread.length;

const CheckMarkAllAsRead = function () {
  notifCount.innerHTML = 0;

  redDot.forEach((red) => {
    red.style.display = 'none';
  });

  notifUnread.forEach((notif) => {
    notif.classList.remove('unread');
  });
};

btnMarkAsRead.addEventListener('click', CheckMarkAllAsRead);
