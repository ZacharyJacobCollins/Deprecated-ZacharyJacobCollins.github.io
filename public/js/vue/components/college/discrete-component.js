//Side nav component
Vue.component('discrete-component', {
  template:
  `
    Discrete Mathematical Structures
    <!-- Lab one gist -->
    <script src="https://gist.github.com/ZacharyJacobCollins/06ad43ed99e8b2d0be66cf29fab7cafc.js"></script>
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
          ],
        },
      ]
    }
  }
});
