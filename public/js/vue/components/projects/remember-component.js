Vue.component('remember-component', {
  template:
  `
    <h1> Remember </h1>
    <h3>Check out the dev post <a href="http://devpost.com/software/remember-bl679g">here.</a></h3>
    <iframe width="870" height="612" src="https://www.youtube.com/embed/8WGbZKsCGwc" frameborder="0" allowfullscreen></iframe>

    <h3>Inspiration</h3>
    <p>We all lose things. It's part of being human. However, we are steadily moving toward an age where we are no longer required to rely on our own faulty recall and recognition. Already the internet and cell phones have moved us into a state wherein digitally-assisted memory is the norm. With Remember we want to move that digitally-assisted memory into the physical space.</p>

    <h3>What it does</h3>
    <p>Remember is an Amazon Alexa Skill that works in conjunction with webcams in your home to help you identify and locate your misplaced items.</p>

    <h3>How we built it</h3>
    <p>Remember is written in node.js and go. The Alexa skill is written in node.js. And, running off a raspberry pi with webcams connected to it is a go script that causes the device to act as a local server for processing the surfaces visible to the webcams. Alexa sends a signal to the pi to take pictures of the surrounding area. This triggers the go script that takes the pictures, saves them if items have moved significantly, splices them into smaller pictures to increase fidelity, sends them to clarifai for item recognition, processes the returned JSON and stores the processed results in Firebase. The Alexa skill then gets the results from firebase and tells you where the item you're looking for is located, provided that it was within Remember's vision.</p>

    <h3>What's next for Remember</h3>
    <p>Our original plan was to integrate Remember with the nest cam, but we were unavailable to acquire the hardware at Spartahack. With the nest cam, Remember would be able to take a 360° view of a room and process every visible surface for possible item locations. The increased quality of the photos, as well as the composite image processing, would make Remember better than you at finding your things.</p>

    <p>
      Furthermore, we'd like to increase accuracy and usability of the Skill, through additions to the functionality available to users of Alexa, with additions to supported phrases and abilities.
    </p>

    <p>
      Development of a mobile app and web interface to view stats about where your things are most often, and suggest possible locations for lost items. System tracks locations where items are lost and uses machine learning to help determine where you most often leave your items if the system can't detect them with its connected camera/s. This would be further integrated into the Alexa skill so users could ask Remember where it thinks their items could be.
    </p>

    <h3>Github Repository </h3>
    <a href="https://github.com/koltclassic/spartahack">Repo</a>
  `,
});
