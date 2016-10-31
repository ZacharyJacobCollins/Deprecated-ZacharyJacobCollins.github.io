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
        { term: "For loop", text: "No {} brackets required for i := 0; i < 10; i++ { sum += i }" },
        { term: "Infinite for loop ", text: "for { fmt.print(\"infinite\") }" },
        { term: "While loop", text: "'while' is spelled 'for' in go for sum < 1000 { sum += sum }" },
        { term: "If statement", text: "No parens () if x < 0 { return sqrt(-x) + \"i\" } " },
        { term: "If and else scope", text: "Variables declared inside an if short statement are also available inside any of the else blocks." },
        { term: "switch statement", text: "automatic break in syntax, stops when case succeeds.  Ex. switch time.Saturday { case today + 0: fmt.Println(\"Today.\").  Also if no condition, same as giving it a true value" },
        { term: "defer", text: "defers execution of a funciton until surrounding funciton returns.  neato  https://tour.golang.org/flowcontrol/12" },
        { term: "stacking defers", text: " you can push defers onto a stack for subsequent executions https://tour.golang.org/flowcontrol/13" },
        { term: "pointers", text: "https://tour.golang.org/moretypes/1" },
        { term: "structs", text: "https://tour.golang.org/moretypes/3" },
        { term: "pointers to structs", text: "Rather than necessitating need to use (*p).X notation to alter X struct field, can just use p.X https://tour.golang.org/moretypes/4" },
        { term: "explicitly and implicitly creating structs", text: "https://tour.golang.org/moretypes/5" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "Bookmark", text: "https://tour.golang.org/moretypes/1" },
      ]
    };
  }
});
