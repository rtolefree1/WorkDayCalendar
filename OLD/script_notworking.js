// let btnEL = $('.saveBtn')



// btnEL.on('click', function () {
//   let value = $(this).sibling('.description').val()
// })





// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let timeNowEl = $('#currentDay');
let timeVar = dayjs().format('hh:mm:ss');
let dayVar = dayjs().format('dddd') + ' ' + dayjs().format('MMMM') + ' ' + dayjs().format('DD');

// console.log("current time:", dayjs().format());
// console.log("current time:", dayjs().hour()+":"+dayjs().minute());
timeNowEl.text(dayVar);



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
let btnEL = $('.saveBtn');

var objTimeArr = [hour9El, hour10El, hour11El, hour12El, hour1El, hour2El, hour3El, hour4El, hour5El];
var objTextArr = [hour9Text='', hour10Text='', hour11Text='', hour12Text='', hour13Text='', hour14Text='', hour15Text='', hour16Text='', hour17Text=''];
var timeArr = ["9","10","11","12","1","2","3","4","5"];
let calenderArr = [];

// hour9El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar")));
// console.log(hour9El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar"))));
// // creating array for the calender to hold an array of calendar objects
// //--9th hour --
// let calenderArr = []; //
// function saveHour9(){
//   let hour9Text = hour9El.children().eq(1).val();
//   console.log(hour9Text);
  
//   calenderArr.push(hour9Text);
//   localStorage.setItem(`calendar${i}`, JSON.stringify(calenderArr));

// timeForStatus();
// }
// hour9El.children().eq(2).on('click', saveHour9);

// 

// This is working
  // $(".saveBtn").each(function(i){
  //   $(this).onclick;
   
  //   console.log("i value:", i);
  //   objTextArr[i] = objTimeArr[i].children().eq(1).val();
  //   calenderArr.push(objTextArr[i]);
  //   console.log("Text value:", objTextArr[i]);
  //   localStorage.setItem(`calendar${i}`, JSON.stringify(calenderArr));
  //   console.log("calendar obj1",objTimeArr[i].children().eq(1).val(JSON.parse(localStorage.getItem("calandar"))));
    
  // });
  objTimeArr[0].children().eq(1).val(JSON.parse(localStorage.getItem("calandar")));
  $(".saveBtn").on('click',function(i){
    //$(this).onclick;
    console.log('this',this);
    console.log("i value:", i);
    objTextArr[i] = objTimeArr[i].children().eq(1).val();
    calenderArr.push(objTextArr[i]);
    //console.log("Text value:", objTextArr[i]);
    localStorage.setItem(`calendar${i}`, JSON.stringify(calenderArr));
    console.log("calendar obj1",objTimeArr[i].children().eq(1).val(JSON.parse(localStorage.getItem("calandar"))));
    
  });


 
// $( document.body ).click(function() {
//   $(".saveBtn").each(function(i){
//     $(this).onclick;
//     // objTextArr[i] = objTimeArr[i].children().eq(1).val();
//     // calenderArr.push(hour9Text);
//     // console.log("Text value:", objTextArr[i]);
//     // localStorage.setItem(`calendar${i}`, JSON.stringify(calenderArr));
// })});

// //--10th hour --
// let calenderArr2 = [];
// hour10El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar2")));
// function saveHour10(){
//   let hour10Text = hour10El.children().eq(1).val();
//   console.log("Doing work at the 10am hour");
 
//  calenderArr2.push(hour10Text);
//  localStorage.setItem("calendar2", JSON.stringify(calenderArr2));
// }
// hour10El.children().eq(2).on('click', saveHour10);


// //--11th hour --
// let calenderArr3 = [];
// hour11El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar3")));
// function saveHour11(){
//   let hour11Text = hour11El.children().eq(1).val();
//   console.log("Doing work at the 11am hour");
 
//   calenderArr3.push(hour11Text);
//   localStorage.setItem("calendar3", JSON.stringify(calenderArr3));

//   // timeForStatus("1", hour11El);
// }
// hour11El.children().eq(2).on('click', saveHour11);



// //--12th hour --
// let calenderArr4 = [];
// hour12El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar4")));
// function saveHour12(){
//   let hour12Text = hour12El.children().eq(1).val();
//   console.log("Doing work at the 12pm hour");
  
//   calenderArr4.push(hour12Text);
//   localStorage.setItem("calendar4", JSON.stringify(calenderArr4));
// }
// hour12El.children().eq(2).on('click', saveHour12);


// //-- hour 1 --
// let calenderArr5 = [];
// hour1El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar5")));
// function saveHour1(){
//   let hour1Text = hour1El.children().eq(1).val();
//   console.log("Doing work at the 1pm hour");
 
//   calenderArr5.push(hour1Text);
//   localStorage.setItem("calendar5", JSON.stringify(calenderArr5));
// }
// hour1El.children().eq(2).on('click', saveHour1);



// //-- hour 2 --
// let calenderArr6 = [];
// hour2El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar6")));
// function saveHour2(){
//   let hour2Text = hour2El.children().eq(1).val();
//   console.log("Doing work at the 2pm hour");

//   calenderArr6.push(hour2Text);
//   localStorage.setItem("calendar6", JSON.stringify(calenderArr6));
// }
// hour2El.children().eq(2).on('click', saveHour2);
// //hour2El.textContent= '2pm hour';


// //-- hour 3 --
// let calenderArr7 = [];
// hour3El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar7")));
// function saveHour3(){
//   let hour3Text = hour3El.children().eq(1).val();
//   console.log("Doing work at the 3pm hour");

//   calenderArr7.push(hour3Text);
//   localStorage.setItem("calendar7", JSON.stringify(calenderArr7));
// }
// hour3El.children().eq(2).on('click', saveHour3);


// //-- hour 4 --
// let calenderArr8 = [];
// hour4El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar8")));
// function saveHour4(){
//   let hour4Text = hour4El.children().eq(1).val();
//   console.log("Doing work at the 4pm hour");
  
//   calenderArr8.push(hour4Text);
//   localStorage.setItem("calendar8", JSON.stringify(calenderArr8));
// }
// hour4El.children().eq(2).on('click', saveHour4);


// //-- hour 5 --
// let calenderArr9 = [];
// hour5El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar9")));
// function saveHour5(){
//   let hour5Text = hour5El.children().eq(1).val();
//   console.log("Doing work at the 5pm hour");
 
//   calenderArr9.push(hour5Text);
//   localStorage.setItem("calendar9", JSON.stringify(calenderArr9));
//   var clockNow = parseInt($(".time-block").attr("id"));
//   console.log("clock ",clockNow);
// }
// hour5El.children().eq(2).on('click', saveHour5);







// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-bl for ock containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
  

//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });

// var objTimeArr = [hour9El, hour10El, hour11El, hour12El, hour1El, hour2El, hour3El, hour4El, hour5El]
// var timeArr = ["9","10","11","12","1","2","3","4","5"];
//  var timeArrMorning = ["9","10","11"];
//  var timeArrEvening = ["12","1","2","3","4","5"];

let date = new Date();
let currentTime = date.toLocaleTimeString();
let morningEveningValue = date.toLocaleTimeString().split(" ")[1];
if(morningEveningValue === "AM")
    {
      for(let i = 0; i < 3; i++)
 {
   timeForStatus(timeArr[i], objTimeArr[i]);

 }
    }
    else if(morningEveningValue === "PM")
    {
      for(let i = 3; i < objTimeArr.length; i++)
      {
        timeForStatus(timeArr[i], objTimeArr[i]);
      }
    }

// for(let i = 0; i < objTimeArr.length; i++)
// {
//   timeForStatus(timeArr[i], objTimeArr[i]);

// }

// function setStatusMorning(){
//   for(let i = 0; i < 3; i++)
//  {
//    timeForStatus(timeArr[i], objTimeArr[i]);

//  }
// }

// function setStatusEvening(){
//   for(let i = 3; i < objTimeArr.length; i++)
//  {
//    timeForStatus(timeArr[i], objTimeArr[i]);

//  }
// }


//Creating timer
function timeForStatus(timeValue, obj){
    //debugger;
    let date = new Date();
    let currentTime = date.toLocaleTimeString();
    // let morningEveningValue = date.toLocaleTimeString().split(" ")[1];

    if(morningEveningValue === "AM")
    {
      if (parseInt(timeValue) < parseInt(currentTime)) {
        $(obj).addClass("past");
        $(obj).removeClass("future");
        $(obj).removeClass("present");
      } else if (parseInt(timeValue) > parseInt(currentTime)) {
        $(obj).removeClass("past");
        $(obj).addClass("present");
        $(obj).removeClass("future");
      } else {
        $(obj).removeClass("present");
        $(obj).removeClass("past");
        $(obj).addClass("future");
      }
    }else if(morningEveningValue === "PM")
    {
      
      if (parseInt(timeValue) < parseInt(currentTime)) {
        $(obj).addClass("past");
        $(obj).removeClass("future");
        $(obj).removeClass("present");
      } else if (parseInt(timeValue) > parseInt(currentTime)) {
        $(obj).removeClass("past");
        $(obj).addClass("future");
        $(obj).removeClass("present");
      } else {
        $(obj).removeClass("present");
        $(obj).removeClass("past");
        $(obj).addClass("future");
      }
      for(let i=0;i<3;i++){
        objTimeArr[i].addClass("past");
        objTimeArr[i].removeClass("present");
        objTimeArr[i].removeClass("future");
      }
      //hour9El, hour10El, hour11El
      // if(parseInt(currentTime) !== 12){
      //   objTimeArr[i].addClass("past");
      //   objTimeArr[i].removeClass("present");
      //   objTimeArr[i].removeClass("future");
      // }
    }

}

// printCalendarEvent(){

// }
// var clock = setInterval(myTimer, 1000);



// function myTimer() {
//   let date = new Date();
//   let time = date.toLocaleTimeString();
//   document.getElementById("clock").innerHTML = time;
//   $(".time-block").each(function () {
//     var clockNow = parseInt($(this).attr("id"));

//     if (clockNow < time) {
//       $(this).addClass("past");
//       $(this).removeClass("future");
//       $(this).removeClass("present");
//     } else if (clockNow > time) {
//       $(this).removeClass("past");
//       $(this).addClass("present");
//       $(this).removeClass("future");
//     } else {
//       $(this).removeClass("present");
//       $(this).removeClass("past");
//       $(this).addClass("future");
//     }
//   });
// }