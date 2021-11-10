var hour9 = $("#9")
var hour10 = $("#10")
var hour11 = $("#11")
var hour12 = $("#12")
var hour1 = $("#1")
var hour2 = $("#2")
var hour3 = $("#3")
var hour4 = $("#4")
var hour5 = $("#5")
var time = moment()
// console.log(time)

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

function updateHours(){
var hour = time.hour()
console.log(time.hour())

    // if time has passed set color 
    if (moment().isAfter(hour)) {
        $(".hour").addClass("past")
        // console.log(this)
    }

    // if time is current 
else if (moment () = hour){
    $(".hour").addClass("current")

}
    // if time is in the future
else {
    $(".hour").addClass("future")
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