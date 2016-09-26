var projects = new Vue({
    el: '.projects',
    data: {
        title: 'Projects',
        projectData: [
            { text: 'Remember', link: '/projects/remember'},
            { text: 'Go chat', link: '/projects/gochat'},
            { text: 'Valet', link: '/projects/valet'},
            { text: 'Cracking the coding interview', link: '/projects/cracking'},
        ],
    }
});
