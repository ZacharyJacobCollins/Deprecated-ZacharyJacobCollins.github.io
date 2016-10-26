Vue.component('go-component', {
  template:
  `
    <h1> Go </h1>
    <ul>
      <template v-for="concept in concepts.">
          <li><strong>{{ concept.term }}</strong>: {{ concept.text }}</li>
      </template>
    </ul>
  `,
  data: function() {
    return {
      concepts: [
        { term: "Naked return", text: "In function when you have a return that has values x = \"String\" and return with just return at end of func" },
        { term: "", text: "" },
      ]
    };
  }
});
