let container = document.querySelectorAll(".container div");
let theBox = document.querySelector(".the-box");
console.log(container);
console.log(theBox);

if(window.localStorage.getItem("color")){
    console.log("Yes");
    theBox.style.backgroundColor = window.localStorage.getItem("color");
    // remove active class
    container.forEach(function(box){
        box.classList.remove("active");
    });
    // add active class
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}else{
    console.log("No");
}
console.log(window.localStorage.getItem("color"));
container.forEach(function(box){
    box.addEventListener("click",function(e){
        container.forEach(function(box){
            box.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        // window.localStorage.setItem("color",e.currentTarget.dataset.color);
        theBox.style.backgroundColor = e.currentTarget.dataset.color;

        window.localStorage.setItem("color",e.currentTarget.dataset.color);
    })
})