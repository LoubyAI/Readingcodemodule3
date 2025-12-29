function greet(name) {
    document.getElementById("message").innerHTML = "Hello, " + name;
}

greet("John");

// It takes the html code that has the Id="message" and changes its paragraph or headers into "Hello, John",
// I can see its inserted into the javascript code greets() 
// So if I change the name from John into greets("Jón"),
//  it will change the paragrapgh of the html code that has the id=message into "Hello, Jón"