//HEADER COMPONENT
var headTemplate = Vue.extend({
  template: `
    <head>
      <meta charset="utf-8">
      <title>Zachary Jacob Collins</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="author" content="Zachary Collins">

    <meta name="keywords" content="zac, zac collins, zachary collins, zachary jacob collins, computer science, web, blog, tech, google">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='https://fonts.googleapis.com/css?family=Miriam+Libre:400,700|Source+Sans+Pro:200,400,700,600,400italic,700italic' rel='stylesheet' type='text/css'>
      <!--[if lte IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
      <![endif]-->
      <link rel="stylesheet" href="/public/css/laravel-9d78469b5d.css">
      <link rel="apple-touch-icon" href="/favicon.png">

    </head>
  `
});

//FOOTER COMPONENT
var footTemplate = Vue.extend({
  template: `
  <footer id="footer" class="main">
      <ul>
        <template v-for="section in sections">
              <li><a href="{{ section.link }}">{{ section.text }}</a></li>
        </template>
      </ul>
      <p> MIT <a href="https://github.com/ZacharyJacobCollins">@Zachary Collins.</a></p>
      <p class="less-significant">
        <!-- Logo here.  SVG Works well .  -->
      </p>
  </footer>
  `,
});

var sidenavTemplate = Vue.extend({
  props: ['sections'],
  template: `
  <section id="sideNav" class="sidebar">
    <ul>
      <template v-for="section in sections">
        <li><strong>{{ section.title }}</strong>
          <ul>
            <template v-for="c in section.content">
                <li><a href="{{ c.link }}">{{ c.text }}</a></li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
  </section>`
});

// register the components glbally to vue.js
Vue.component('sidenav-component', sidenavTemplate);
Vue.component('header-component', headTemplate);
Vue.component('footer-component', footTemplate);


// create a root vue instance
new Vue({
  el: 'html',
  ready: function() {
    console.log('Stylesheet and footer components loaded');
  }
});
