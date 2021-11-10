var hour9 = $("#9")
var hour10 = $("#10")
var hour11 = $("#11")
var hour12 = $("#12")
var hour1 = $("#1")
var hour2 = $("#2")
var hour3 = $("#3")
var hour4 = $("#4")
var hour5 = $("#5")
console.log(hour9)
var currentTime = moment().format("hh:mm a");
console.log("the time is ", currentTime)


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

function updateHourly(){
    for (let i = 9; i < 18 ; i++) {
        console.log(i)

     // if time has passed set color 
        if (currentTime < i){
            $(".hour" + i).addClass("past")
        }
        // if time is current 
        else if (i == currentTime){
            $(".hour").addClass("present")
        }

        else{
            $(".hour").addClass("future")

        }
    }
}

// function updateHours(){

//     // if time has passed set color 
//     if (moment().isAfter(hour)) {
//         $(".hour").addClass("past")
//         console.log("you have ", (moment().isAfter(hour)) )
//     }

//     // if time is current 
// else if (moment () = hour){
//     $(".hour").addClass("current")

// }
//     // if time is in the future
// else {
//     $(".hour").addClass("future")
// }

// }

function savedInput (){
    task = JSON.parse(localStorage.getItem("plan"));


}




$(".saveBtn").click(function (){
var task = $(this).siblings("textarea").val()

console.log($(this).siblings("textarea").val())

localStorage.setItem("plan", JSON.stringify(task))
})