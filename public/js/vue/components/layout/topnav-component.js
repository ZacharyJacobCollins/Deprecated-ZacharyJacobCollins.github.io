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
        <a href="/" id="name-title" class="brand nav-block">
          <span>Zachary Jacob Collins</span>
        </a>

        <!-- Search input -->
        <div class="search nav-block">
          <input placeholder="search" type="" id="search-input" v-on:blur="reset" />

          <!-- Youtube player (script and settings are in youtubeplayer.js the bottom of reference.html) -->
          <iframe id="ytplayer"
              class="music-player"
              type="text/html"
              width="425"
              height="50"
              src="https://www.youtube.com/embed/?playlist=atY2Z0J6zX8&showinfo=0"
              frameborder="0"
              allowfullscreen>
          </iframe>
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
