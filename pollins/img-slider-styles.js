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
        // if clicked icon is left reduce value from the carousel scroll left else add to it 
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













const imagesPollin = [

    "images/pollin-img4.JPEG",
    "images/pollin-img-profile.jpg",
    "images/pollin-img10.JPEG",
    "images/pollin-img3.JPEG",
    "images/pollin-img-bg.JPEG",
    "images/pollin-img-front1.jpg",
    "images/pollin-img-front2.jpg",
    "images/pollin-img-front3.jpg",
    "images/pollin-img-front4.jpg",
    "images/pollin-img1.JPEG",
    "images/pollin-img5.JPEG",
    "images/pollin-img6.JPEG",
    "images/pollin-img7.JPEG",
    "images/pollin-img8.JPEG",
    "images/pollin-img9.JPEG",
    "images/pollin-img-r1.jpg",
    "images/pollin-img-r2.jpg",
    "images/pollin-img-r3.jpg",
    "images/pollin-img12.JPEG",
    "images/pollin-img13.JPEG",
    "images/pollin-img16.JPEG",
    "images/pollin-img-l2.jpg",
    "images/pollin-img-l3.jpg",
    "images/pollin-img17.JPEG",
    "images/pollin-img18.JPEG",
    "images/pollin-img19.JPEG",
    "images/pollin-img20.JPEG",
    "images/pollin-img21.JPEG",
    "images/pollin-img-back1.jpg",
    "images/pollin-img-back.jpg",
    "images/pollin-img34.jpg",
    "images/pollin-img22.JPEG",
    "images/pollin-img23.JPEG",
    "images/pollin-img24.JPEG",
    "images/pollin-img25.JPEG",
    "images/pollin-img26.JPEG",
    "images/pollin-img27.JPEG",
    "images/pollin-img28.JPEG",
    "images/pollin-img29.JPEG",
    "images/pollin-img30.JPEG",
    "images/pollin-img31.JPEG",
    "images/pollin-img32.JPEG",
    "images/pollin-img33.JPEG",
    "images/pollin-map.jpg",
    "images/pollin-map2.jpg"

];