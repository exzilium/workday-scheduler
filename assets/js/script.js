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

    /* ^^^ Where you left off: You're trying to see if you can use an object (userTextObj)
to store all your user text. In this click event listener, you're trying to see if you can
Get the ID of the timeblock
User that ID to say userTextObj.[property] = the user text
The property thing isn't working yet, but the user text is being set into the object,
just not on the right property (a new property is being created)
*/
  });

  //This code should use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

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
