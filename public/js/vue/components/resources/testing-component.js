Vue.component('testing-component', {
  template:
  `
    <h1>Testing</h1>

    <br />
    <br />

    <ul>
      <template v-for="resource in resources">
          <li><a href="{{ resource.link }}">{{ resource.title }}</a></li>
      </template>
    </ul>

  `,
  data: function() {
    return {
        resources: [
          { title: 'Testing with laravel', link: 'https://www.youtube.com/watch?v=2U5GxROkanE'},
        ],
    };
  }
});
