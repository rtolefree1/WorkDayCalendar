let timeNowEl = $('#currentDay');
let timeVar = dayjs().format('hh:mm:ss');
let dayVar = dayjs().format('dddd') + ' ' + dayjs().format('MMMM') + ' ' + dayjs().format('DD');
timeNowEl.text(dayVar);



let hour9El = $('#hour-9');
let hour10El = $('#hour-10');
let hour11El = $('#hour-11');
let hour12El = $('#hour-12');
let hour1El = $('#hour-13');
let hour2El = $('#hour-14');
let hour3El = $('#hour-15');
let hour4El = $('#hour-16');
let hour5El = $('#hour-17');
let saveEl =  $('save');

// creating local storage object will be empty on the first pass
// after text is added then local storage will have event information
hour9El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar")));
console.log(hour9El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar"))));
// creating array for the calender to hold an array of calendar objects
//--9th hour --
let calenderArr = []; //array for the calendar objects

function saveHour9(){
  // getting text for the event input
  let hour9Text = hour9El.children().eq(1).val();
  console.log(hour9Text);
  
  //pushing data to array the setting to local storage
  calenderArr.push(hour9Text);
  localStorage.setItem("calendar", JSON.stringify(calenderArr));

timeForStatus();
}
hour9El.children().eq(2).on('click', saveHour9);



//--10th hour --
// creating array for the calender to hold an array of calendar objects
let calenderArr2 = [];

// creating local storage object will be empty on the first pass
// after text is added then local storage will have event information
hour10El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar2")));
function saveHour10(){
  // getting text for the event input
  let hour10Text = hour10El.children().eq(1).val();
  console.log("Doing work at the 10am hour");
 
   //pushing data to array the setting to local storage
 calenderArr2.push(hour10Text);
 localStorage.setItem("calendar2", JSON.stringify(calenderArr2));
}
hour10El.children().eq(2).on('click', saveHour10);


//--11th hour --
let calenderArr3 = []; //array for the calendar objects
// creating local storage object will be empty on the first pass
// after text is added then local storage will have event information
hour11El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar3")));
function saveHour11(){

  // getting text for the event input
  let hour11Text = hour11El.children().eq(1).val();
  console.log("Doing work at the 11am hour");

 //pushing data to array the setting to local storage
  calenderArr3.push(hour11Text);
  localStorage.setItem("calendar3", JSON.stringify(calenderArr3));

}
hour11El.children().eq(2).on('click', saveHour11);



//--12th hour --
let calenderArr4 = [];
hour12El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar4")));
function saveHour12(){
  let hour12Text = hour12El.children().eq(1).val();
  console.log("Doing work at the 12pm hour");
  
  calenderArr4.push(hour12Text);
  localStorage.setItem("calendar4", JSON.stringify(calenderArr4));
}
hour12El.children().eq(2).on('click', saveHour12);


//-- hour 1 --
let calenderArr5 = [];
hour1El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar5")));
function saveHour1(){
  let hour1Text = hour1El.children().eq(1).val();
  console.log("Doing work at the 1pm hour");
 
  calenderArr5.push(hour1Text);
  localStorage.setItem("calendar5", JSON.stringify(calenderArr5));
}
hour1El.children().eq(2).on('click', saveHour1);



//-- hour 2 --
let calenderArr6 = [];
hour2El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar6")));
function saveHour2(){
  let hour2Text = hour2El.children().eq(1).val();
  console.log("Doing work at the 2pm hour");

  calenderArr6.push(hour2Text);
  localStorage.setItem("calendar6", JSON.stringify(calenderArr6));
}
hour2El.children().eq(2).on('click', saveHour2);
//hour2El.textContent= '2pm hour';


//-- hour 3 --
let calenderArr7 = [];
hour3El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar7")));
function saveHour3(){
  let hour3Text = hour3El.children().eq(1).val();
  console.log("Doing work at the 3pm hour");

  calenderArr7.push(hour3Text);
  localStorage.setItem("calendar7", JSON.stringify(calenderArr7));
}
hour3El.children().eq(2).on('click', saveHour3);


//-- hour 4 --
let calenderArr8 = [];
hour4El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar8")));
function saveHour4(){
  let hour4Text = hour4El.children().eq(1).val();
  console.log("Doing work at the 4pm hour");
  
  calenderArr8.push(hour4Text);
  localStorage.setItem("calendar8", JSON.stringify(calenderArr8));
}
hour4El.children().eq(2).on('click', saveHour4);


//-- hour 5 --
let calenderArr9 = [];
hour5El.children().eq(1).val(JSON.parse(localStorage.getItem("calendar9")));
function saveHour5(){
  let hour5Text = hour5El.children().eq(1).val();
  console.log("Doing work at the 5pm hour");
 
  calenderArr9.push(hour5Text);
  localStorage.setItem("calendar9", JSON.stringify(calenderArr9));
  var clockNow = parseInt($(".time-block").attr("id"));
  console.log("clock ",clockNow);
}
hour5El.children().eq(2).on('click', saveHour5);


var objTimeArr = [hour9El, hour10El, hour11El, hour12El, hour1El, hour2El, hour3El, hour4El, hour5El]
var timeArr = ["9","10","11","12","13","14","15","16","17"];


let date = new Date();
let currentTime = date.toLocaleTimeString();
let morningEveningValue = date.toLocaleTimeString().split(" ")[1];


for(let i = 0; i < objTimeArr.length; i++)
      {
       timeForStatus(timeArr[i], objTimeArr[i]);
      }



//Creating timer
function timeForStatus(timeValue, obj){
    //debugger;
    let date = new Date();
    let currentTime = date.toLocaleTimeString();
    let currentTime2 = dayjs().format('HH');
    console.log("timeValue",timeValue);
    console.log("currentTime2", currentTime2);
    
    // if time is after 5pm lets set value to 6pm
    // that way all is in past
    if(parseInt(currentTime2)>17){
      currentTime2 = 18;
    }
    console.log("current time 2", currentTime);

    // checking values to set past, preset or future 
      if (parseInt(timeValue) < parseInt(currentTime2)) {
        $(obj).addClass("past");
        $(obj).removeClass("future");
        $(obj).removeClass("present");
      } else if (parseInt(timeValue) > parseInt(currentTime2)) {
        $(obj).removeClass("past");
        $(obj).addClass("future");
        $(obj).removeClass("present");
      } else {
        $(obj).removeClass("future");
        $(obj).removeClass("past");
        $(obj).addClass("present");
      }
    
  }
    