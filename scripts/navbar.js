const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
        if(item.isIntersecting){
            item.target.classList.add("show");
        } else{
            item.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((elem) => observer.observe(elem));

// let resumeIcon = document.getElementById("resume-icon");
// resumeIcon.addEventListener("mouseover", function(){
//     resumeIcon.target.classList.add("hidden");
// });

// offset | position
export const sectionElems = document.querySelectorAll(".section");
const navBtn = document.querySelectorAll(".navbar-item");

export function navHeight(){
    return document.getElementById("header").clientHeight;
}

export function windowScrollTo(elem){
    let navbarHeight = navHeight();
    window.scrollTo({
        top: elem.offsetTop - navbarHeight,
        behavior: "smooth"
    });
}

// * Navbar
navBtn.forEach((elem) => {
    elem.addEventListener("click", () => {
        switch(elem.id){
            case "nav-home":
                windowScrollTo(sectionElems[0]);
                break;
            case "nav-skills":
                windowScrollTo(sectionElems[2]);
                break;
            case "nav-portfolio":
                windowScrollTo(sectionElems[3]);
                break;
            case "nav-contact":
                windowScrollTo(sectionElems[4]);
                break;
        }
    });
});