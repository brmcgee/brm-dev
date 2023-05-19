const imagesPollin = 
[

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
   

const previewElem = document.getElementById("rowPreview");
const modalElem = document.getElementById("modalContent");




const renderRowPreview = function () {

    previewElem.innerHTML = "";

    imagesPollin.forEach((img, index) => {
        let html = 
        `
        <div class="col-3">
          <img src="https://www.brmdev.com/pollin/${img}" onclick="openLightbox();toSlide(${index+1})" class="hover-shadow preview mb-2">
        </div>  
        `;

        previewElem.innerHTML += html;
    });

};


const renderModalContent = function () {

    modalElem.innerHTML = "";

    imagesPollin.forEach((img, index) => {
        let html = 
        `
        <div class="slide">
          <img src="https://www.brmdev.com/pollin/${img}" class="image-slide" alt="Image ${index+1}" />
        </div>
        `;

        modalElem.innerHTML += html;

    });

    modalElem.innerHTML += `
    <a class="previous" onclick="changeSlide(-1)">&#10094;</a>
    <a class="next" onclick="changeSlide(1)">&#10095;</a>    
    `;

    

    modalElem.innerHTML += '<div id="thumbnail" class="dots">';

    


    modalElem.innerHTML += '</div>';
  
};



function myStart() {
    renderRowPreview();
    renderModalContent();
}

myStart();


const thumbElem = document.getElementById('thumbnail');

imagesPollin.forEach((img, index) => {
    let html2 = 
    `
    <div class="col">
      <img src="https://www.brmdev.com/pollin/${img}" class="modal-preview hover-shadow" onclick="toSlide(${index-1})" alt="${index}">
    </div>
    `;

    thumbElem.innerHTML += html2; 

});