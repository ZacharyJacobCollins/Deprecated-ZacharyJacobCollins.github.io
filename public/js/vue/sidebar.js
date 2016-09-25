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
          //The array of projects coming from the projects vue component
          content: projects._data.projectData
        },
        {
          title: 'Snippets',
          content: [
            { text: 'Go', link: '/snippets/go.html'},
            { text: 'Laravel', link: '/snippets/laravel.html'},
            { text: 'SQL', link: '/snippets/sql.html'},
            { text: 'Javascript', link: '/snippets/javascript.html'},
            { text: 'Bash', link: '/snippets/bash.html'},
            { text: 'Vim', link: '/snippets/vim.html'},
            { text: '.bashrc', link: 'snippets/bashrc.html'},
            { text: '.vimrc', link: '/snippets/vimrc.html'},
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
