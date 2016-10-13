Vue.component('videos-component', {
  template:
  `
  <h1> Videos </h1>
  <template v-for="section in sections">
    <h2>{{ section.title }}</h2>
      <ul>
        <template v-for="video in section.videos">
            <li>
              <strong>{{ video.title }}</strong>: <a href="{{ video.link}}">link</a>
            </li>
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
                { title: 'CT Fletcher, Life is hard. ', link: 'https://www.youtube.com/watch?v=Fh-rCrREEgA' },
            ],
        },
      ]
    };
  }
});
