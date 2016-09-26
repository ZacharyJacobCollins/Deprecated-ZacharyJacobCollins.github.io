var topNav = new Vue({
  el: '#topNav',
  data: {
        buttons: [
          { text: '127.0.0.1', link: '/'},
          { text: 'Projects', link: '/projects/index'},
          { text: 'Body Building', link: '/bodybuilding/index'},
          { text: 'Technologies', link: '/technologies/index'},
          { text: 'Books', link: '/books/index'},
        ],
      },
});
