var topics = [
  "iguana",
  "music",
  "dog",
  "computer",
  "pizza"
];

var strung = JSON.stringify(topics);

function appendGifs(gifs) {
  var dataArray = (gifs.data);

  for (let x = 0; x < dataArray.length; x++) {
    var imageTemp = $("<img>");
    var stillSrc = dataArray[x].images.fixed_height_still.url;
    $(imageTemp).attr("src", stillSrc);
    $(imageTemp).attr("data-state", "still");

    $("#images").prepend(imageTemp);

    $(imageTemp).on("click", function (e) {
      var stillSrc = dataArray[x].images.fixed_height_still.url;
      var motionSrc = dataArray[x].images.fixed_height.url;
      console.log(e.currentTarget.dataset.state)

      switch (e.currentTarget.dataset.state) {
        case "still":
          $(this).attr("src", motionSrc);
          $(this).attr("data-state", "motion")
          break;
        case "motion":
          $(this).attr("src", stillSrc);
          $(this).attr("data-state", "still")
          break;
      }
    })
  }

}

function newButtons() {
  for (let i = 0; i < topics.length; i++) {
    var newButton = $("<button>");

    var topic = newButton.attr("src", topic);
    newButton.attr("class", topic);
    newButton.text(topics[i]);
    $(newButton).attr("class", "button");

    $(newButton).on("click", function (e) {
      $("#images").empty();

      var targ = ($(e).attr("target"));
      var innerTarg = targ.innerText;

      $.getJSON("https://api.giphy.com/v1/gifs/search?q=" + innerTarg +
        "&api_key=EPcjsGxa1IuaDljdOa1MHNorY3F8zAgB&limit=10",
        function (data, status) {
          appendGifs(data);
        });

    });

    $(".buttonContainer").append($(newButton));
  }
};


$(window).on('load', function () {
  newButtons();

  $("#search-btn").on("click", function () {
    var newSearch = $("#search-input").val().trim();
    var newBtn = $("<button>");

    $(newBtn).text(newSearch);
    $(".buttonContainer").append(newBtn);

    $(newBtn).on("click", function (e) {

      var targ = ($(e).attr("target"));
      var innerTarg = targ.innerText;

      $.getJSON("https://api.giphy.com/v1/gifs/search?q=" + innerTarg +
        "&api_key=EPcjsGxa1IuaDljdOa1MHNorY3F8zAgB&limit=10",
        function (data, status) {
          appendGifs(data);
        });
    })
  })
})