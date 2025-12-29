let numbers = [1, 2, 3, 4, 5];
let listHTML = "";

for (let i = 0; i < numbers.length; i++) {
    listHTML += "<li>Number at index " + i + " is " + numbers[i] + "</li>";
}

document.getElementById("numberList").innerHTML = listHTML;

// This code changes the text of the html code that has the id="numberList" 
// the text changes into listHTML which is the numbers (1,2,3,4,5) 
// that will appear that appear instead of listHTML which will appear instead of the text that is in the html.