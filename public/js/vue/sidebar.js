var sidebar = new Vue({
  el: '#sidebar',
  data: {
    sections: [
        {
          title: 'College',
          content: [
            { text: 'Statistics 360', link: '/stats'},
            { text: 'Discrete Math', link: '/discrete'},
          ]
        },
        {
          title: 'Projects',
          content: [

          ]
        },
        {
          title: 'Body Building',
          content: [

          ]
        },
        {
          title: 'Snippets',
          content: [

          ]
        },
        {
          title: 'Books',
          content: [

          ],
        },
      ],
    }
});

var topNav = new Vue({
  el: '#topNav',
  data: {
        buttons: [
          { text: 'Home', link: '/home'},
          { text: 'Projects', link: '/projects'},
          { text: 'Body Building', link: '/bodybuilding'},
          { text: 'Snippets', link: '/snippets'},
          { text: 'Books', link: '/books'},
        ],
      },
});
