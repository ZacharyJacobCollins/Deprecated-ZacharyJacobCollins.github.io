//Side nav component
Vue.component('sidenav-component', {
  methods: {
    sidebarclick: function(component) {
      // console.log(component);
      this.$emit('sidebarclick', component);
    }
  },
  template:
  `
    <!-- Sidenav -->
    <section id="sideNav" class="sidebar">
      <ul>
        <template v-for="sideNavSection in sideNavSections">
          <li><strong>{{ sideNavSection.title }}</strong>
            <ul>
              <template v-for="c in sideNavSection.content">
                  <!-- Where sidebarclick found in the vue component -->
                  <li><a href="#" @click="sidebarclick(c.component)">{{ c.text }}</a></li>
              </template>
            </ul>
          </li>
        </template>
      </ul>
    </section>
    <!-- /Sidenav -->
  `,
  data: function() {
    return {
    sideNavSections: [
        {
          title: 'College',
          content: [
            { text: 'Statistics 360', component: 'statistics-component'},
            { text: 'Discrete 314', component: 'discrete-component'},
            { text: 'Comp II', component: 'comp-component'},
          ]
        },
        {
          title: 'Acm ',
          content: [
            { text: 'About', component: '/acm/about.html'},
          ]
        },
        {
          title: 'Projects',
          //The array of projects coming from the projects vue component
          content: [
            { text: 'Remember', component: 'remember-component'},
            { text: 'Go chat', component: '/projects/gochat.html'},
            { text: 'Valet', component: '/projects/valet.html'},
            { text: 'Cracking the coding interview', component: '/projects/cracking.html'},
          ]
        },
        {
          title: 'Technologies',
          content: [
            { text: 'Go', component: '/technologies/go.html'},
            { text: 'Laravel', component: '/technologies/laravel.html'},
            { text: 'SQL', component: '/technologies/sql.html'},
            { text: 'Javascript', component: '/technologies/javascript.html'},
            { text: 'Bash', component: '/technologies/bash.html'},
            { text: 'Vim', component: '/technologies/vim.html'},
            { text: 'Vue.js', component: '/technologies/vue.html'},
            { text: '.bashrc', component: '/technologies/bashrc.html'},
            { text: '.vimrc', component: '/technologies/vimrc.html'},
          ]
        },
        {
          title: 'Reading',
          content: [
            { text: 'Books', component: '/reading/books.html'},
          ],
        },
        {
          title: 'Resources',
          content: [
            { text: 'Frontend', component: '/resources/frontend/index.html'},
          ],
        },
        {
          title: 'Body Building',
          content: [
            { text: 'Workouts', component: '/bodybuilding/workouts.html'},
            { text: 'Log', component: '/bodybuilding/log.html'},
            { text: 'Eating', component: '/bodybuilding/eating.html'},
          ]
        },
        {
          title: 'Media',
          content: [
            { text: 'Videos', component: '/media/videos.html'},
            { text: 'Quotes', component: '/media/quotes.html'},
            { text: 'Cool People', component: '/media/people.html'},
            { text: 'Music', component: '/media/music.html'},
            { text: 'Memes', component: '/media/memes.html'},
            { text: 'Ted Talks', component: '/media/tedtalks.html'},
          ]
        },
        {
          title: 'Meetups',
          content: [
            { text: 'Ann Arbor Gophers', component: '/meetups/gophers.html'},
          ]
        },
        {
          title: 'Career',
          content: [
            { text: 'Interview Prep', component: '/career/interviews.html' },
            { text: 'Resume', component: '/career/resume.html' },
          ]
        },
      ],
    }
  }
});
