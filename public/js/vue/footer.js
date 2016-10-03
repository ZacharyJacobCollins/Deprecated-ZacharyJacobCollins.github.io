//Vue footer instance
var footer = new Vue({
    el: "#footer",
    data: {
      footerSections: [
            { text: 'Github', link: 'https://github.com/ZacharyJacobCollins'},
            { text: 'Email', link: 'https://ZacharyJacobCollins@gmail.com'},
            { text: 'Twitter', link: 'twitter.com'},
      ],
      signature: {},
      logo: { license: 'MIT', link: 'https://github.com/ZacharyJacobCollins', text: '@Zachary Collins.' }
    },
});
