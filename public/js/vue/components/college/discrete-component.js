//Side nav component
Vue.component('discrete-component', {
  template:
  `
    <h1>Discrete Structures</h1>
    <br />
    <br />

    <!-- Chapters -->
    <template v-for="chapter in chapters">

      <h3> Definitions </h3>
      <ul>
        <template v-for="definition in chapter.definitions">
            <li><strong>{{ definition.term }}</strong>: {{definition.definition}}</li>
        </template>
      </ul>

      </br>

      <h3> Concepts </h3>
      <ul>
        <template v-for="concept in chapter.concepts">
            <li><strong>{{ concept.title }}</strong>: {{ concept.text }}</li>
        </template>
      </ul>

    </template>

    <br />
    <br />

    <!-- Labs -->
    <h2> Labs </h2>
    <ul>
      <template v-for="lab in labs">
        <li><strong> {{ lab.title }}: </strong> <a href="{{ lab.code }}">Github gist</a></li>
      </template>
    </ul>
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
            { title: 'Equivalence relations', text: 'https://www.youtube.com/watch?v=yAGhqmTu6Iw and https://www.youtube.com/watch?v=UH6DMBMaBMk'},
            { title: 'next time partial orders', text: ''},
            { title: 'n! is worse than any exponential n', text: ''},
            { title: 'Determine if two graphs are isomorphic', text: 'http://www.ms.uky.edu/~csima/ma111/GraphsLecture2.pdf'},
            { title: 'Create different types of closures.jpg', text: 'https://www.cs.sfu.ca/~ggbaker/zju/math/closures.html'},
            { title: 'Detect if a graph has a hamiltonian circuit', text: 'http://www.ctl.ua.edu/math103/hamilton/analyzin.htm'},
            { title: 'Detect if a graph has a euler circuit', text: 'http://www.ctl.ua.edu/math103/hamilton/analyzin.htm'},
          ],
        },
      ],
      labs: [
        {
          title: 'Lab 1',
          code: 'https://gist.github.com/ZacharyJacobCollins/c05b4dce4a85f9f46bed9d6558607139',
        },
        {
          title: 'Lab 2',
          code: 'https://gist.github.com/ZacharyJacobCollins/c05b4dce4a85f9f46bed9d6558607139',
        },
      ]
    };
  }
});
