document.addEventListener("DOMContentLoaded", function () {
  // Get the current hour using Day.js
  var currentHour = dayjs().hour();

  // Loop through each time block
  for (var i = 0; i <= 22; i++) {
    var hourBlock = document.getElementById("hour-" + i);

    // Check if the block is in the past, present, or future
    if (i < currentHour) {
      hourBlock.classList.remove("present", "future");
      hourBlock.classList.add("past");
    } else if (i === currentHour) {
      hourBlock.classList.remove("past", "future");
      hourBlock.classList.add("present");
    } else {
      hourBlock.classList.remove("past", "present");
      hourBlock.classList.add("future");
    }

    // Retrieve saved text from local storage
    var savedText = localStorage.getItem("hour-" + i);
    
    // Set the text area value to the saved text
    if (savedText !== null) {
      hourBlock.querySelector(".description").value = savedText;
    }
  }

  // Save text to local storage when save button is clicked
  document.querySelectorAll(".saveBtn").forEach(function (button) {
    button.addEventListener("click", function () {
      var hourId = this.closest(".time-block").id;
      var textArea = this.closest(".time-block").querySelector(".description");
      var text = textArea.value;

      // Save text to local storage
      localStorage.setItem(hourId, text);
    });
  });
});
