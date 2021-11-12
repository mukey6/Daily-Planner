var currentTime = moment().hour();


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

function updateHourly(){
    for (let i = 9; i < 18 ; i++) {
 // if time has passed set color 
     if (currentTime > i){
           colorTimeBlock(i, "past")
        }
        // if time is current 
         if (currentTime == i){
            colorTimeBlock(i, "present")
        }  
        //if time is in the future
        if (currentTime < i){
            colorTimeBlock(i, "future")

        }   
    }
}

function colorTimeBlock(hour, time){
    $(`#${hour}`).children(".description").addClass(time)

}


function displaySchedule(){
    for (let i = 9 ; i < 18; i++) {
        let currentTask = JSON.parse(localStorage.getItem(i))
        $(`#${i}`).children(".description").text(currentTask) 
        
    }

}

$(".saveBtn").click(function (){
   var getID = $(this).parent().attr("id")
   
var task = $(this).siblings("textarea").val()

localStorage.setItem(getID, JSON.stringify(task))
})

updateHourly()
displaySchedule()