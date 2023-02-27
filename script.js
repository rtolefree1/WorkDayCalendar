// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let timeNowEl = $('#currentDay');


console.log("current time:", dayjs().format());
console.log("current time:", dayjs().hour()+":"+dayjs().minute());
timeNowEl.append( dayjs().hour()+":"+dayjs().minute()+":"+dayjs().second());

let hour9El = $('#hour-9');
let hour10El = $('#hour-10');
let hour11El = $('#hour-11');
let hour12El = $('#hour-12');
let hour1El = $('#hour-1');
let hour2El = $('#hour-2');
let hour3El = $('#hour-3');
let hour4El = $('#hour-4');
let hour5El = $('#hour-5');
let saveEl =  $('save');


// creating array for the calender to hold an array of calendar objects
let calenderObj = [];
function saveHour9(){
  let hour9Text = hour9El.children().eq(1).val();
  console.log("Doing work at the 9am hour");
  console.log("9th hour text contains:", hour9Text);
  //doing some work
  console.log("Testing id:",parseInt($(".time-block").attr("id")))
  // $("btn").click(function(){
  //   $("li").text(hour9Text)
  // });
  
  hour9El.children('textarea').append($('<li>adding some text</li>'));

  let calenderInfo = {
  TextValue: hour9Text
}
calenderObj.push(calenderInfo);
console.log(calenderInfo);
localStorage.getItem(calenderObj);
localStorage.setItem("calendar Object", JSON.stringify(calenderObj));


timeForStatus();
}
hour9El.children().eq(2).on('click', saveHour9);
hour9El.children().eq(2).textContent= '9am hour';

function saveHour10(){
  console.log("Doing work at the 10am hour");
  //doing some work
  timeForStatus();

}
hour10El.children().eq(2).on('click', saveHour10);
hour10El.textContent= '10am hour';

function saveHour11(){
  console.log("Doing work at the 11am hour");
  //doing some work
}
hour11El.children().eq(2).on('click', saveHour11);
hour11El.textContent= '11am hour';

function saveHour12(){
  console.log("Doing work at the 12pm hour");
  //doing some work
}
hour12El.children().eq(2).on('click', saveHour12);
hour12El.textContent= '12pm hour';

function saveHour1(){
  console.log("Doing work at the 1pm hour");
  //doing some work
}
hour1El.children().eq(2).on('click', saveHour1);
hour1El.textContent= '1pm hour';

function saveHour2(){
  console.log("Doing work at the 2pm hour");
  //doing some work
}
hour2El.children().eq(2).on('click', saveHour2);
hour2El.textContent= '2pm hour';

function saveHour3(){
  console.log("Doing work at the 3pm hour");
  //doing some work
}
hour3El.children().eq(2).on('click', saveHour3);
hour3El.textContent= '3pm hour';

function saveHour4(){
  console.log("Doing work at the 4pm hour");
  //doing some work
}
hour4El.children().eq(2).on('click', saveHour4);
hour4El.textContent= '4pm hour';

function saveHour5(){
  console.log("Doing work at the 5pm hour");
  //doing some work
}
hour5El.children().eq(2).on('click', saveHour5);
hour5El.textContent= '5pm hour';






$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-bl for ock containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

//Creating timer
function timeForStatus(){
  $(".time-block").each(function(){
    var htmlClockValue = parseInt($(this).attr("id"));
    if(3 < dayjs().hour){
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");

    }
   // console.log(parseInt($(this).attr("id")));//.children().eq(0).val()));

  });
}

// printCalendarEvent(){

// }
