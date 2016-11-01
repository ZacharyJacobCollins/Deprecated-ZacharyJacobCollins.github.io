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
        { term: "arrays", text: "var a [10]int   ---   is an array with 10 spaces for integers" },
        { term: "slices", text: "s []int --- go's version of a dynamic array.  A slice does not store any data, it just describes a section of an underlying array. " },
        { term: "array to slice conversion", text: "https://tour.golang.org/moretypes/7   primes := [6]int{2, 3, 5, 7, 11, 13}    var s []int = primes[1:4] " },
        { term: "initializing a struct with types", text: "https://tour.golang.org/moretypes/9" },
        { term: "slice manipulation", text: "s := []int{2, 3, 5, 7, 11, 13}    s = s[1:]   selects the index at one and everything after it.  Prints 3, 5, 7, 11, 13....." },
        { term: "slice length and capacity ", text: "https://tour.golang.org/moretypes/11 A slice has both a length and a capacity. The length of a slice is the number of elements it contains. The capacity of a slice is the number of elements in the underlying array, counting from the first element in the slice." },
        { term: "Zero value of a slice", text: "The zero value of a slice is nil." },
        { term: "slices and make", text: "you can use the make notation for slices to create an empty slice with pre-allocated capacity and length.  ex. b := make([]int, 0, 5) // len(b)=0, cap(b)=5" },
        { term: "for range", text: "example https://tour.golang.org/moretypes/16" },
        { term: "maps, or go's version of dictionaries", text: "use make to do like a 'new map' java equivalent.  full instantiation looks like var m map[string]string = make(map[string]string);  and then to use do m['Bell Labs'] = 'dat boi'  fmt.Print(m['Bell Labs']) which will give dat boi" },
        { term: "map literals", text: "basically map string stuff to structs.  var m = map[string]Vertex{ \"Bell Labs\": Vertex{ 40.68433, -74.39967, }, \"Google\": Vertex{ 37.42202, -122.08408, }, } https://tour.golang.org/moretypes/20" },
        { term: "map manipulations", text: "possible mutations; delete, retrieval, insertions, 'test if key is in map by elem, ok = m[key]' If key is in m, ok is true. If not, ok is false. https://tour.golang.org/moretypes/22" },
        { term: "first class functions", text: "https://tour.golang.org/moretypes/25  function closures" },
        { term: "methods", text: "method is a func with a reciever argument. https://tour.golang.org/methods/2" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "", text: "" },
        { term: "sqlite", text: "https://astaxie.gitbooks.io/build-web-application-with-golang/content/en/05.3.html" },
        { term: "Bookmark", text: "https://tour.golang.org/moretypes/18" },
      ]
    };
  }
});
