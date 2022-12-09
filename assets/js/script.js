// Global variables

// Get current time
var currentDay = dayjs().format("MMMM DD, YYYY");
var currentHour = dayjs().format("H");

// Object to store future user text values with their itme block ids

var userTextObj = {
  hour9: "",
  hour10: "",
  hou11: "",
  hour12: "",
  hour13: "",
  hour14: "",
  hour15: "",
  hour16: "",
  hour17: "",
};

// TEMP TIME USING FOR DEVELOPMENT
currentHour = 14;

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  console.log("ready!");

  // Listener for click events on the save button.
  $("button.saveBtn").click(function () {
    // console log
    console.log(
      $(this).parent().attr("id") +
        " button was clicked with this text: " +
        $(this).siblings("textarea").val()
    );
    // set object property value to user text

    // object property is [.timeblock id] and value is the User Entered text
    userTextObj[$(this).parent().attr("id")] = $(this).siblings("textarea").val();
    console.log(userTextObj);


    // save user entered text to local storage
    localStorage.setItem("schedule", JSON.stringify(userTextObj));

  });

  // Apply the past, present, or future class to each timeblock by comparing the id to the current hour
  $(".time-block").each(function () {
    // FUTURE Time block hour > real current hour?
    if ($(this).data("hour") > currentHour) {
      console.log($(this).data("hour") + " > " + currentHour);
      $(this).addClass("future");

      // PAST...less than real current hour
    } else if ($(this).data("hour") < currentHour) {
      console.log($(this).data("hour") + " < " + currentHour);
      $(this).addClass("past");

      // PRESENT...equal to real current hour
    } else {
      console.log($(this).data("hour") + " = " + currentHour);
      $(this).addClass("present");
    }
  });

  // 4. TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Code to display the current date in the header of the page
  $("#currentDay").text(currentDay);
});
