//Side nav component
Vue.component('sidenav-component', {
  methods: {
    sidebarclick: function(component) {
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
            { text: 'About', component: 'acm-component'},
          ]
        },
        {
          title: 'Projects',
          //The array of projects coming from the projects vue component
          content: [
            { text: 'Remember', component: 'remember-component'},
            { text: 'Go chat', component: 'gochat-component'},
            { text: 'Valet', component: 'valet-component'},
            { text: 'Cracking the coding interview', component: 'cracking-component'},
          ]
        },
        {
          title: 'Technologies',
          content: [
            { text: 'Go', component: 'gotech-component'},
            { text: 'Laravel', component: 'laraveltech-component'},
            { text: 'SQL', component: 'sqltech-component'},
            { text: 'Javascript', component: 'jstech-component'},
            { text: 'Bash', component: 'bashtech-component'},
            { text: 'Vim', component: 'vimtech-component'},
            { text: 'Vue.js', component: 'vuetech-component'},
            { text: '.bashrc', component: 'bashrctech-component'},
            { text: '.vimrc', component: 'vimrctech-component'},
          ]
        },
        {
          title: 'Reading',
          content: [
            { text: 'Books', component: 'books-component'},
          ],
        },
        {
          title: 'Resources',
          content: [
            { text: 'Frontend', component: 'frontendresources-component'},
          ],
        },
        {
          title: 'Body Building',
          content: [
            { text: 'Workouts', component: 'bbworkouts-component'},
            { text: 'Log', component: 'bblog-component'},
            { text: 'Eating', component: 'bbeating-component'},
          ]
        },
        {
          title: 'Media',
          content: [
            { text: 'Videos', component: 'videosmedia-component'},
            { text: 'Quotes', component: 'quotesmedia-component'},
            { text: 'Cool People', component: 'peoplemedia-component'},
            { text: 'Music', component: 'musicmedia-component'},
            { text: 'Memes', component: 'memesmedia-component'},
            { text: 'Ted Talks', component: 'tedtalksmedia-component'},
          ]
        },
        {
          title: 'Meetups',
          content: [
            { text: 'Ann Arbor Gophers', component: 'gophersmeetup-component'},
          ]
        },
        {
          title: 'Career',
          content: [
            { text: 'Interview Prep', component: 'inteviews-component' },
            { text: 'Resume', component: 'resume-component' },
          ]
        },
      ],
    }
  }
});
