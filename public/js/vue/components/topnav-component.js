Vue.component('topnav-component', {
  template:
  `
    <nav class="main">
        <!-- Name -->
        <a href="/" class="brand nav-block">
          <span>Zachary Jacob Collins</span>
        </a>

        <!-- Search input -->
        <div class="search nav-block">
          <input placeholder="search" type="button" v-model="search" id="search-input" v-on:blur="reset" />
        </div>

        <ul id="topNav" class="main-nav" v-if="! search">
            <template v-for="topNavSection in topNavSections">
                <li><a href="{{ topNavSection.link }}"><strong>{{ topNavSection.button }}</strong></a></li>
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
          { button: '127.0.0.1', link: '/home/reference.html'},
          { button: 'Projects', link: '/projects/index.html'},
          { button: 'Body Building', link: '/bodybuilding/index.html'},
          { button: 'Technologies', link: '/technologies/index.html'},
          { button: 'Reading', link: '/reading/index.html'},
        ],
      }
  }
});
