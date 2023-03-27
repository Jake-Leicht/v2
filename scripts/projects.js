let projects = document.querySelectorAll(".project-item");

window.addEventListener("scroll", () => {
    revealProject();
});

function revealProject(){
    projects.forEach((elem) => {
        let winHeight = window.innerHeight;
        let elemTop = elem.getBoundingClientRect().top;
        let elemVisible = winHeight * 0.1;
        if(elemTop < winHeight - elemVisible){
            elem.classList.add("active");
        } else{
            elem.classList.remove("active");
        }
    });
}