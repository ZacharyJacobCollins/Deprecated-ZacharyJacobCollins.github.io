var topNav = new Vue({
  el: '#topNav',
  data: {
        buttons: [
          { text: '127.0.0.1', link: '/home/reference.html'},
          { text: 'Projects', link: '/projects/index.html'},
          { text: 'Body Building', link: '/bodybuilding/index.html'},
          { text: 'Technologies', link: '/technologies/index.html'},
          { text: 'Reading', link: '/reading/index.html'},
        ],
      },
});


var sideNav = new Vue({
  el: '#sideNav',
  data: {
    sections: [
        {
          title: 'College',
          content: [
            { text: 'Statistics 360', link: '/college/stats.html'},
            { text: 'Discrete 314', link: '/college/discrete.html'},
            { text: 'Comp II', link: '/college/comp.html'},
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
          title: 'Resources',
          content: [
            { text: 'Frontend', link: '/resources/frontend/index.html'},
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
          title: 'Media',
          content: [
            { text: 'Videos', link: '/media/videos.html'},
            { text: 'Quotes', link: '/media/quotes.html'},
            { text: 'Cool People', link: '/media/people.html'},
            { text: 'Music', link: '/media/music.html'},
            { text: 'Memes', link: '/media/memes.html'},
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
