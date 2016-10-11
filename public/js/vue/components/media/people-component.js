Vue.component('people-component', {
  template:
  `
  <template v-for="person in people">
    <h2>{{ person.name }}</h2>
    <ul>
      <li><strong>{{ person.name }}</strong>: {{ person.relevance }}</li>
    </ul>
  </template>
  `,
  data: function() {
    return {
      people: [
        {
          name: 'David DeSandro ',
          link: '',
          relevance: 'Codepen/Pinterest dude.  Good frontend stuff.  ',
        },
        {
          name: 'Les Twins',
          link: '',
          relevance: 'Phenomenal Dancers',
        },
        {
          name: 'Eric Thomas',
          link: '',
          relevance: 'Motivational Speaker  ',
        },
        {
          name: 'Haseeb Qureshi',
          link: '',
          relevance: 'Works at Air b n b, effective altruist, ex pro poker player, really cool software engineering guy'
        },
      ]
    }
  }
});
