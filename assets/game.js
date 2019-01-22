$("button").on("click", function() {
    // In this case, the "this" keyword refers to the button that was clicked
    var choice = $(this).attr("button-clicked");

          // Constructing a URL to search Giphy for the name of the person who said the quote
          var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          topic + "&api_key=EPcjsGxa1IuaDljdOa1MHNorY3F8zAgB&limit=10";
  
        // Performing our AJAX GET request
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After the data comes back from the API
          .then(function(response) {
            // Storing an array of results in the results variable
            var results = response.data;
            
            var topics = [
                "puppies",
                "positive",
                "baby animals",
                "inspiration",
                "art"
            ];
        
            var topicButton = $("<button>");
        
        
        
        // Your app should take the topics in this array and create buttons in your HTML:
            for (let i = 0; i < topics.length; i++){
                var newButton = $(topicButton).append(topics[i]);
                $(".buttonContainer").append(newButton(i));
            };
        
            // // Looping over every result item
            // for (var i = 0; i < results.length; i++) {
  
            //    // Creating a div for the gif
            //     var gifDiv = $("<div>");
  
            //     // Creating an image tag
            //     var topicImage = $("<img>");
  
            //     // Giving the image tag an src attribute of a proprty pulled off the
            //     // result item
            //     topicImage.attr("src", results[i].images.fixed_height.url);
  
            //     // Appending the paragraph and personImage we created to the "gifDiv" div we created
            //     gifDiv.append(p);
            //     gifDiv.append(personImage);
  
            //     // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            //     $("#gifs-appear-here").prepend(gifDiv);
            //   }
            // }
          });








// Try using a loop that appends a button for each string in the array.


// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).


// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.


// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.