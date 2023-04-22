function getJSON() {
  // To make the function blocking we manually create a Promise.
return new Promise(function (resolve) {
    
    axios.get("https://tutorialzine.com/misc/files/example.json")
    .then(function (json) {
        // The data from the request is available in a .then block
        // We return the result using resolve.
        return json.json()
    }).then( function (json) {
        render(json.data)
    });

    function render(dataObj){
        console.log(dataObj);
    }

});
}
