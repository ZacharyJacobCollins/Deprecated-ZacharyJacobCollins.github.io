Vue.component('css-component', {
  template:
  `
    <h1> CSS </h1>
    <ul>
      <template v-for="snippet in snippets">
          <li><strong>{{ snippet.title }}</strong>: {{ snippet.code }}</li>
      </template>
    </ul>
  `,
  data: function() {
    return {
      snippets: [
        { title: "Dank gradient background example: ", code: "background-image: radial-gradient(circle, #54ffe2 0%, #5c0889 70%, #000000 100%);" },
        { title: "CSS background image", code: " background: url(kiwi.svg);" },
        { title: "Uppercase", code: "Can use a text-transform property to uppercase text with css" },
        
      ]
    };
  }
});
