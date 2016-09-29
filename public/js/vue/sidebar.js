var sidebar = new Vue({
  el: '#sidebar',
  data: {
    sections: [
        {
          title: 'College',
          content: [
            { text: 'Statistics 360', link: '/college/stats.html'},
            { text: 'Statistics 360', link: '/college/discrete.html'},
          ]
        },
        {
          title: 'Acm ',
          content: [
            { text: 'About', link: '/acm/about.html'},
          ]
        },
        {
          title: 'Projects',
          //The array of projects coming from the projects vue component
          content: [
            { text: 'Remember', link: '/projects/remember.html'},
            { text: 'Go chat', link: '/projects/gochat.html'},
            { text: 'Valet', link: '/projects/valet.html'},
            { text: 'Cracking the coding interview', link: '/projects/cracking.html'},
          ]
        },
        {
          title: 'Technologies',
          content: [
            { text: 'Go', link: '/technologies/go.html'},
            { text: 'Laravel', link: '/technologies/laravel.html'},
            { text: 'SQL', link: '/technologies/sql.html'},
            { text: 'Javascript', link: '/technologies/javascript.html'},
            { text: 'Bash', link: '/technologies/bash.html'},
            { text: 'Vim', link: '/technologies/vim.html'},
            { text: 'Vue.js', link: '/technologies/vue.html'},
            { text: '.bashrc', link: '/technologies/bashrc.html'},
            { text: '.vimrc', link: '/technologies/vimrc.html'},
          ]
        },
        {
          title: 'Reading',
          content: [
            { text: 'Books', link: '/reading/books.html'},
          ],
        },
        {
          title: 'Body Building',
          content: [
            { text: 'Workouts', link: '/bodybuilding/workouts.html'},
            { text: 'Log', link: '/bodybuilding/log.html'},
            { text: 'Eating', link: '/bodybuilding/eating.html'},
          ]
        },
        {
          title: 'Inspiration',
          content: [
            { text: 'Videos', link: '/inspiration/videos.html'},
            { text: 'Quotes', link: '/inspiration/quotes.html'},
          ]
        },
        {
          title: 'Meetups',
          content: [
            { text: 'Ann Arbor Gophers', link: '/meetups/gophers.html'},
          ]
        },
        {
          title: 'Career',
          content: [
            { text: 'Interview Prep', link: '/career/interviews.html' },
            { text: 'Resume', link: '/career/resume.html' },
          ]
        },
      ],
    },
    ready: function() {
      console.log('Sidebar loaded');
    }
});
