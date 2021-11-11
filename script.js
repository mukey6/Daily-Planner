var hour9 = $("#9")
var hour10 = $("#10")
var hour11 = $("#11")
var hour12 = $("#12")
var hour1 = $("#1")
var hour2 = $("#2")
var hour3 = $("#3")
var hour4 = $("#4")
var hour5 = $("#5")
var currentTime = moment().hour();


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

function updateHourly(){
    for (let i = 9; i <= 18 ; i++) {

     // if time has passed set color 
        console.log("current time is " + currentTime)
        console.log("What is this " + i)
        console.log("current time is greater than ", currentTime>i)
     if (currentTime > i){
            $(".description").addClass("past")
            console.log("past")
        }
        // if time is current 
         if (currentTime == i){
            $(".description").addClass("present")
            console.log("present")
        }  
        // if (currentTime < i){
        //     $(".description").addClass("future")

        // }   
    }
}



function savedInput (){
    task = JSON.parse(localStorage.getItem("plan"));


}




$(".saveBtn").click(function (){
var task = $(this).siblings("textarea").val()

console.log($(this).siblings("textarea").val())

localStorage.setItem("plan", JSON.stringify(task))
})

updateHourly()