var projects = new Vue({
    el: '.projects',
    data: {
        title: 'Projects',
        projectData: [
            { title: 'Remember', link: '/projects/remember.html'},
            { title: 'Go chat', link: '/projects/gochat.html'},
            { title: 'Valet', link: '/projects/valet.html'},
            { title: 'Cracking the coding interview', link: '/projects/cracking.html'},
        ],
    }
});
