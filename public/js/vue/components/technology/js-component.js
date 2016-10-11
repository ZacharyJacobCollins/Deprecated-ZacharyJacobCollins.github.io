Vue.component('js-component', {
  template:
  `
    <h1>Javascript</h1>
    <p>

$.ajax({
    type: "POST",
    url: "/webservices/PodcastService.asmx/CreateMarkers",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify({ Markers: markers }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data){alert(data);},
    failure: function(errMsg) {
        alert(errMsg);
    }
});

you can import scripts to web workers with
importScripts('script1.js');
    </p>
  `,
});
