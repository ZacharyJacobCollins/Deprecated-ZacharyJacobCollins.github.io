var sidebar = new Vue({
  el: '#sidebar',
  data: {
    sections: [
        {
          title: 'College',
          content: [
            { text: 'Statistics 360', link: '/college/stats'},
            { text: 'Discrete Math', link: '/college/discrete'},
          ]
        },
        {
          title: 'Acm ',
          content: [
            { text: 'About', link: '/acm/about'},
            { text: 'Meeting Minutes', link: '/acm/meetings/minutes'},
          ]
        },
        {
          title: 'Projects',
          content: [
            { text: 'Remember', link: '/projects/remember'},
            { text: 'Go chat', link: '/projects/gochat'},
            { text: 'Valet', link: '/projects/valet'},
          ]
        },
        {
          title: 'Snippets',
          content: [
            { text: 'Go', link: '/snippets/go'},
            { text: 'Laravel', link: '/snippets/laravel'},
            { text: 'SQL', link: '/snippets/sql'},
            { text: 'Javascript', link: '/snippets/javascript'},
            { text: 'Bash', link: '/snippets/bash'},
            { text: 'Vim', link: '/snippets/vim'},
          ]
        },
        {
          title: 'Books',
          content: [
            { text: 'Full index', link: '/books/index'},
            { text: 'Interview Prep', link: '/books/interviews'},
            { text: 'Growth', link: '/books/growth'},
            { text: 'Pleasure', link: '/books/pleasure'},
          ],
        },
        {
          title: 'Body Building',
          content: [
            { text: 'Workouts', link: '/bodybuilding/workouts'},
            { text: 'Log', link: '/bodybuilding/workoutlog'},
            { text: 'Eating', link: '/bodybuilding/eating'},
          ]
        },
        {
          title: 'Inspiration',
          content: [
            { text: 'Videos', link: '/inspiration/videos'},
            { text: 'Quotes', link: '/inspiration/quotes'},
          ]
        },
        {
          title: 'Meetups',
          content: [
            { text: 'Videos', link: '/inspiration/videos'},
            { text: 'Quotes', link: '/inspiration/quotes'},
          ]
        },
      ],
    }
});
