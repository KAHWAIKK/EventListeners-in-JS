//javascript event listeners

const view = document.querySelector('#view2');
//console.log(view);

const div = view.querySelector('div');
const h2 = view.querySelector('h2');

/* syntax of adding an eventlistener */
//addEventListener("event", function, useCapture)
// There are many different types of events that can occur.

/* For example:

The user selects, clicks, or hovers the cursor over a certain element.
The user chooses a key on the keyboard.
The user resizes or closes the browser window.
A web page finishes loading.
A form is submitted.
A video is played, paused, or ends.
An error occurs. */


//Ilustration of a click event
const doSomething= ()=>{
    alert('do Something')
}

//h2.addEventListener("click", doSomething ,false/* false is the default value of useCapture */)//when we click on the h2 element in the brwoser we will get a pop up alert that says doSomething

//We can also remove the event listener

//h2.removeEventListener("click",doSomething,false)//the click event functionality will no longer work

//but if doSomething was an anonymous function we would not be able to remove it, it is illustrated below

h2.addEventListener('click', (event)=>{
    console.log(event.target);//console returns <h2>My 2nd View</h2>
    //it is important to note that the anonymous function event with a property of target logs the html element of that particular eventlistener
    event.target.textContent = "clicked"//changing the textContent returns console prints <h2>clicked</h2>
})

/* Example that makes it safer to start working with a DOM when you load a page, that is the readystatechange event */


document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === "complete"){
        console.log('readyState: complete')//console returns readyState: complete
        initApp();//load the rest of your app
    }
},false);

const initApp = ()=>{
    const view = document.querySelector('#view2');
    const div = view.querySelector('div');
    const h2 = view.querySelector('h2');

    view.addEventListener("click",(event) =>{
        //event.stopPropagation();
        //However if we change the useCaption value to true, the event bubbling starts with the outermost element, to visualize this we use the stopPropagation method
        view.style.backgroundColor = "purple"
    },
    false);
    //You will notice that one event such as the click event at the innermost box triggers click events upwards, this is what is called event bubbling ,that the h2 element is inside the div, the div is inside the view section. However if we change the useCaption value to true, the event bubbling starts with the outermost element, to visualize this we use the stopPropagation method

    div.addEventListener("click",(event) =>{
        event.stopPropagation();
        div.style.backgroundColor = "yellow"
    },
    false);

    h2.addEventListener("click",(event) =>{
        //event.stopPropagation();
       event.target.textContent = "clicked";
    },
    false);


/* You will notice that one event such as the click event at the innermost box triggers click events upwards, this is what is called event bubbling ,that the h2 element is inside the div, the div is inside the view section. However if we change the useCaption value to true, the event bubbling starts with the outermost element, to visualize this we use the stopPropagation() method */

/* It is also worth noting that setting the value of useCapture to true enalbles event bubbling from outermost element tot innermost,while setting it to a default value of false enables event bubbling from innermost element to outermost element */

const nav = document.querySelector("nav");
nav.addEventListener("mouseover" ,(event) =>{
    event.target.classList.add("height100");
});
nav.addEventListener("mouseout" ,(event) =>{
    event.target.classList.remove("height100");
});
};

/* Let us now look at an eventListener that deals with forms and that is the preventDefault event listener */

document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === "complete"){
        console.log("readyState: complete");
        init();
    }
});

const init = () =>{
    const view3 = document.querySelector("#view3")
    console.log(view3)
    //console returns section with id value of view3
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        console.log("submit event");
    })
}