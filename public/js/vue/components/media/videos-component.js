Vue.component('videos-component', {
  template:
  `
  <template v-for="section in sections">
    <h2>{{ section.title }}</h2>
      <ul>
        <template v-for="video in section.videos">
            <li><strong>{{ video.title }}</strong>: {{ video.link}}</li>
        </template>
      </ul>
  </template>
  `,
  data: function() {
    return {
      sections: [
        {
            title: 'Inspirational',
            videos: [
                { title: 'CT Fletcher bodybuilding', link: 'https://www.youtube.com/watch?v=DHTN3oXNDOA' },
            ],
        },
      ]
    };
  }
});
