var projects = new Vue({
    el: '.projects',
    data: {
        title: 'Projects',
        projectData: [
            { text: 'Remember', link: '/projects/remember.html'},
            { text: 'Go chat', link: '/projects/gochat.html'},
            { text: 'Valet', link: '/projects/valet.html'},
            { text: 'Cracking the coding interview', link: '/projects/cracking.html'},
        ],
    }
});
