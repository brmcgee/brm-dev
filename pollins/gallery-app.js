const imagesPollin = images;
   

const previewElem = document.getElementById("rowPreview");
const modalElem = document.getElementById("modalContent");




const renderRowPreview = function () {

    previewElem.innerHTML = "";

    imagesPollin.forEach((img, index) => {
        let html = 
        `
        <div class="col-3">
          <img src="${img}" onclick="openLightbox();toSlide(${index+1})" class="hover-shadow preview mb-2">
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
          <img src="${img}" class="image-slide" alt="Image ${index+1}" />
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