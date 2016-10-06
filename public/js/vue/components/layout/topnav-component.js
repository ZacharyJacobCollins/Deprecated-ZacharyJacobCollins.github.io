Vue.component('topnav-component', {
  methods: {
    sidebarclick: function(component) {
      // console.log(component);
      this.$emit('topnavclick', component);
    }
  },
  template:
  `
    <nav class="main">
        <!-- Name -->
        <a href="/" class="brand nav-block">
          <span>Zachary Jacob Collins</span>
        </a>

        <!-- Search input -->
        <div class="search nav-block">
          <input placeholder="search" type="button" id="search-input" v-on:blur="reset" />
        </div>

        <ul id="topNav" class="main-nav" v-if="! search">
            <template v-for="topNavSection in topNavSections">
                <li><a href="#" @click="topnavclick(topNavSection.component)"><strong>{{ topNavSection.button }}</strong></a></li>
            </template>
            <div class="responsive-sidebar-nav">
              <a href="#" class="toggle-slide menu-link btn">&#9776;</a>
            </div>
        </ul>
    </nav>
  `,
  data: function() {
      return {
        topNavSections:
        [
          { button: '127.0.0.1', component: 'home-component'},
          { button: 'Projects', component: 'projects-component'},
          { button: 'Body Building', component: 'bodybuilding-component'},
          { button: 'Technologies', component: 'technologies-component'},
          { button: 'Reading', component: 'technologies-component'},
        ],
      }
  }
});
