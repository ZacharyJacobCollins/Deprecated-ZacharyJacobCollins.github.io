//Side nav component
Vue.component('sidenav-component', {
  methods: {
    componentclick: function(component) {
      this.$emit('componentclick', component);
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
                  <!-- Where componentclick found in the vue component -->
                  <li><a href="#{{ c.component }}" @click="componentclick(c.component)">{{ c.text }}</a></li>
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
          ]
        },
        {
          title: 'Acm',
          content: [
            { text: 'About', component: 'acm-component'},
          ]
        },
        {
          title: 'Algorithms',
          content: [
            { text: 'Binary Tree Implementation', component: 'binarytree-component' },
            { text: 'Linked List Implementation', component: 'linkedlist-component' },
            { text: 'Heap sorts', component: 'heapsort-component' },
            { text: "Djikstra's Algorithm", component: 'djikstras-component' },
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
            { text: 'Go', component: 'go-component'},
            { text: 'Laravel', component: 'laravel-component'},
            { text: 'SQL', component: 'sql-component'},
            { text: 'Javascript', component: 'js-component'},
            { text: 'Bash', component: 'bash-component'},
            { text: 'Vim', component: 'vim-component'},
            { text: 'Vue.js', component: 'vue-component'},
            { text: 'Excel', component: 'excel-component'},
            { text: 'CSS', component: 'css-component'},
            { text: 'Emmet', component: 'emmet-component'},
          ]
        },
        {
          title: 'Resources',
          content: [
            { text: 'Frontend', component: 'frontendresources-component'},
            { text: 'Testing', component: 'testing-component'},
          ],
        },
        {
          title: 'Body Building',
          content: [
            { text: 'Workouts', component: 'workouts-component'},
            { text: 'Eating', component: 'eating-component'},
          ]
        },
        {
          title: 'Media',
          content: [
            { text: 'Books', component: 'books-component'},
            { text: 'Videos', component: 'videos-component'},
            { text: 'Quotes', component: 'quotes-component'},
            { text: 'Cool People', component: 'people-component'},
            { text: 'Music', component: 'music-component'},
            { text: 'Memes', component: 'memes-component'},
            { text: 'Purchases', component: 'purchases-component'},
          ]
        },
        {
          title: 'Career',
          content: [
            { text: 'Interview Prep', component: 'interviews-component' },
            { text: 'Resume', component: 'resume-component' },
          ]
        },
      ],
    }
  }
});
