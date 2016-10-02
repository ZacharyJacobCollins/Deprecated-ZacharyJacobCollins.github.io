var footer = new Vue({
    el: "#footer",
    data: {
      footerSections: [
            { text: 'Github', link: 'https://github.com/ZacharyJacobCollins'},
            { text: 'ZacharyJacobCollins@gmail.com', link: 'https://gmail.com'},
            { text: 'Twitter', link: 'twitter.com'},
      ],
      signature: {},
      logo: { license: 'MIT', link: 'https://github.com/ZacharyJacobCollins', text: '@Zachary Collins.' }
    },
});
