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
        { term: "var can declare a list of variables: ", text: "var c, python, java bool" },
        { term: "undeclared variables are initialized to 0 or false etc.  ", text: "Ex.  var python when printed fmt.print(python) comes out 'false'" },
        { term: "", text: "" },
        { term: "", text: "" },
      ]
    };
  }
});
