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
          title: 'Technologies',
          content: [
            { text: 'Go', link: 'technologies/go.html'},
            { text: 'Laravel', link: 'technologies/laravel.html'},
            { text: 'SQL', link: 'technologies/sql.html'},
            { text: 'Javascript', link: 'technologies/javascript.html'},
            { text: 'Bash', link: 'technologies/bash.html'},
            { text: 'Vim', link: 'technologies/vim.html'},
            { text: '.bashrc', link: 'technologies/bashrc.html'},
            { text: '.vimrc', link: 'technologies/vimrc.html'},
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
            { text: 'Workouts', link: 'bodybuilding/workouts.html'},
            { text: 'Log', link: 'bodybuilding/workoutlog.html'},
            { text: 'Eating', link: 'bodybuilding/eating.html'},
          ]
        },
        {
          title: 'Inspiration',
          content: [
            { text: 'Videos', link: 'inspiration/videos.html'},
            { text: 'Quotes', link: 'inspiration/quotes.html'},
          ]
        },
        {
          title: 'Meetups',
          content: [
          ]
        },
      ],
    }
});
