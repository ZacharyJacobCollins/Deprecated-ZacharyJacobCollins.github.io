//Footer component
Vue.component('footer-component', {
    template:
    `
    <footer id="footer" class="main">
        <ul>
          <template v-for="footerSection in footerSections">
                <li><a href="{{ footerSection.link }}">{{ footerSection.text }}</a></li>
          </template>
        </ul>
        <p> MIT <a href="https://github.com/ZacharyJacobCollins">@Zachary Collins</a></p>
        <p class="less-significant">
          <!-- Logo here.  SVG Works well .  -->
        </p>
    </footer>
    `,
    data: function () {
      return {
          footerSections: [
                { text: 'Github', link: 'https://github.com/ZacharyJacobCollins'},
                { text: 'Email', link: 'https://ZacharyJacobCollins@gmail.com'},
                { text: 'Twitter', link: 'https://twitter.com/Zachary44825716'},
          ],
          signature: {},
          logo: { license: 'MIT', link: 'https://github.com/ZacharyJacobCollins', text: '@Zachary Collins.' }
      }
    }
});
