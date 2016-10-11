Vue.component('topnav-component', {
  methods: {
    componentclick: function(component) {
        this.$emit('componentclick', component);
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
          <input placeholder="search" type="" id="search-input" v-on:blur="reset" />
        </div>

        <div class="nav-block music-player">
          <iframe style="position: absolute; height: 100%; width: 100%; border: none" src="https://www.youtube.com/embed/PTF5xgT-pm8" allowfullscreen></iframe>
        </div>
        
        <ul id="topNav" class="main-nav" v-if="! search">
            <template v-for="topNavSection in topNavSections">
                <li><a href="#" @click="componentclick(topNavSection.component)"><strong>{{ topNavSection.button }}</strong></a></li>
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
          { button: 'Technologies', component: 'technologies-component'},
          { button: 'Media', component: 'media-component'},
          { button: 'Body Building', component: 'bodybuilding-component'},
        ],
      }
  }
});
