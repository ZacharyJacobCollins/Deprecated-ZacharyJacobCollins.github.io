Vue.component('frontendresources-component', {
  template:
  `
    <h1> Frontend resources </h1>
    <h3>Fonts</h3>

    <ul>
      <li v-for='font in fonts'>
        {{ font.title }}: {{ font.link }}
      </li>
    </ul>
  `,
  data: function() {
    return {
      fonts: [
          { title: 'Catamaran', link: 'https://fonts.google.com/specimen/Catamaran'},

        ],
      },
    };
  }
});
