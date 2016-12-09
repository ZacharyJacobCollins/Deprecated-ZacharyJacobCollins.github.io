Vue.component('emmet-component', {
  template:
  `
    <h1> Emmet Shortcuts </h1>
    <ul>
      <template v-for="snippet in snippets">
          <li><strong>{{ snippet.title }}</strong>: {{ snippet.code }}</li>
      </template>
    </ul>
  `,
  data: function() {
    return {
      snippets: [
        { title: "Expand command", code: " ctrl-e in atom, shift space in vs code " },
        { title: "html beginning template", code: "! (then ctrl-e in atom)" },
      ]
    };
  }
});
