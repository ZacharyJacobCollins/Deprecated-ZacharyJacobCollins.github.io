//Side nav component
Vue.component('discrete-component', {
  template:
  `
    <h1>Discrete Structures</h1>
    <br />
    <h3> Exam thursday on 9 to 10.5</h3>
    <br />

    <!-- Chapters -->
    <template v-for="chapter in chapters">

      <h3> Definitions </h3>
      <template v-for="definition in chapter.definitions">
          <strong>{{ definition.term }}</strong>: {{definition.definition}}
      </template>

      </br>

      <h3> Concepts </h3>
      <template v-for="concept in chapter.concepts">
          <strong>{{ concept.title }}</strong>: {{ concept.text }}
      </template>

    </template>

    <br />
    <br />

    <!-- Labs -->
    <h2> Labs </h2>
    <template v-for="lab in labs">
      <strong> {{ lab.title }}: </strong> <a href="{{ lab.code }}">code</a>
    </template>
  `,
  data: function() {
    return {
      chapters: [
        {
          title: 'Chapter 9',
          definitions: [

          ],
          concepts: [
            { title: 'Warshal\'s Algorithm', text: ' '},
            { title: 'Practice Problems\'s', text: 'Pg 606 #1,3,5,19,25,27,29'},
            { title: 'Lab 1', text: '2^n is number of subsets'},
            { title: 'Practice Problems\'s', text: 'Pg 615, #1,3,5,9,11,13,15,21,233,24,25,35,41'},
            { title: 'Equivalence relations', text: ''},
            { title: 'next time partial orders', text: ''},
            { title: 'n! is worse than any exponential n', text: ''},
            { title: 'Determin if a graph is isomorphic', text: 'http://www.ms.uky.edu/~csima/ma111/GraphsLecture2.pdf'},

          ],
        },
      ],
      labs: [
        {
          title: 'Lab 1',
          code: 'https://gist.github.com/ZacharyJacobCollins/c05b4dce4a85f9f46bed9d6558607139',
        },
      ]
    };
  }
});
