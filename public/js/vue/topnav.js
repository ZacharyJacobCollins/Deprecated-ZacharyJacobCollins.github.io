var topNav = new Vue({
  el: '#topNav',
  data: {
        buttons: [
          { text: '127.0.0.1', link: '/reference.html'},
          { text: 'Projects', link: '/projects/index.html'},
          { text: 'Body Building', link: '/bodybuilding/index.html'},
          { text: 'Technologies', link: '/technologies/index.html'},
          { text: 'Reading', link: '/reading/index.html'},
        ],
      },
});
