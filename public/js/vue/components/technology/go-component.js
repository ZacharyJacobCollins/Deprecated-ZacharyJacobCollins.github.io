Vue.component('go-component', {
  template:
  `
    <h1> Go </h1>
    <ul>
      <template v-for="concept in concepts">
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
        { term: "Can initialize with initialize sequence ex.  ", text: "var i, j int = 1, 2" },
        { term: "Rune", text: "Alias for int32" },
        { term: "Type Conversions", text: "The expression T(v) converts the value v to the type T." },
        { term: "Constants", text: "Constants are declared like variables, but with the const keyword. const Pi = 3.14" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "Bookmark", text: "https://tour.golang.org/flowcontrol/1" },
      ]
    };
  }
});
