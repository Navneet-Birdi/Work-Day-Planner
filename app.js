// when I visit this page------
//I should see a clock in header
function startClock(){
setInterval(function(){
const current = moment().format("YYYY-MM-DD HH:mm:ss");
$("#current-Time").text(current)
},1000);
}






function createTimeBlock(hour){

//creating row first usingjQuery
const row = $("<div>");


const currentTime = Number(moment().format("H"));
//for past
const isPast = hour < currentTime;

//for present
const isPresent = hour === currentTime;

//for future
const isFuture = hour > currentTime;

let rowClass = 'row';

//condition to check if it is past,present or future
if(isPast){
    rowClass = rowClass + ' past';
}
if(isPresent){
    rowClass = rowClass + ' present';
}
if(isFuture){
    rowClass = rowClass + ' future';
}



row.attr('class', rowClass);

//All three columns in a row
//Creating time column first
const timeColumn = $("<section>");
timeColumn.attr('class','time-col col-2');
//Now Adding time to time Column
timeColumn.text(hour + ":00");


//Creating 2nd column text area
const textareaColumn = $("<section>");
textareaColumn.attr('class', 'textarea-col col-8');
//creating textarea in textarea column
const textarea = $('<textarea rows="3">')
//Now adding textarea column into textarea
textareaColumn.append(textarea);

//Creating 3rd column save button
const buttonColumn = $("<section>");
buttonColumn.attr('class', 'button-col col-2');

//create a new save button
const saveButton = $('<button class="btn btn-outline-primary btn-block">');
saveButton.text('Save');
buttonColumn.append(saveButton);



//adding all the columns in a row
row.append(timeColumn, textareaColumn, buttonColumn);
return row;

}
//clock in header
$(function(){
    startClock();
const timeBlockContainer = $(".container");
//})
for (let hour = 9; hour < 18; hour++){
    const timeBlock = createTimeBlock(hour);
    timeBlockContainer.append(timeBlock)
}

})

//When click on save button
//on click event
$(document).on ('click', '.savebutton', function(event){
//current button
const buttonClicked = $(event.target);
//to get a text area go to previous sibling and children on text area
const textarea = buttonClicked.parent().prev().children();

//get a text entered
const enteredText = textarea.val();
console.log(enteredText);




localStorage.setItem(hour,enteredText);


})







