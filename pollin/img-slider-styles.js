const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14; //get first img width and add 14 margin value
let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //getting max scrollable width


const showHideIcons = () => {
    if(carousel.scrollLeft == 0) {
        arrowIcons[0].style.display = "none";
    } else {
        arrowIcons[0].style.display = "block";
    }
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
};


arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left reduce value from the carousel croll left else add to it 
        if (icon.id == "left") {
            carousel.scrollLeft -= firstImgWidth;
        } else {
            carousel.scrollLeft += firstImgWidth;
        }
        setTimeout(() => showHideIcons(), 60);

    });
});

const dragStart = (e) => {
    // updating global variables calue on mouse down event 
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}


const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer 
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);