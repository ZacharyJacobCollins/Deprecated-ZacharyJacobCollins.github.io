//Side nav component
Vue.component('discrete-component', {
  template:
  `
    <h1>Discrete Structures</h1>
    <!-- Chapters -->
    <template v-for="chapter in chapters">
      <template v-for="concept in concepts">

      </template>
    </template>

    <br />
    <br />

    <!-- Labs -->
    <h2> Labs </h2>
    <template v-for="lab in labs">
      <strong> {{ lab.title }}: </strong> <a href="lab.code">code</a>
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
