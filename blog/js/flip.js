
async function getBlogs() {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

let singleCount = 0;
let length = 0;
let totalQuery = document.getElementById("totalQ");

async function renderBlogs(active) {
    let blogs = await getBlogs();
    let html = '';
    length = blogs.length;
    
    let options = document.querySelectorAll('.title-option')
    if (options.length < 1) {
      fetchTitles(blogs);
    }

    let authors = document.querySelectorAll('.author-option')
    if (authors.length < 1) {
      fetchAuthor(blogs);
    }

    // let category = document.querySelectorAll('.cat-option')
    // console.log(category)
    // if (category.length < 1) {
    //   fetchCategory(blogs);
    // }

    // } else {
    //   options.forEach(i => {
    //     document.getElementById('titleData').removeChild(i)
    //   })
    //   fetchTitles(blogs);
    // }

   
    if (active === "all") {
      // filters 
        blogs.forEach(blog => {
          
          let htmlSegment = `
  
          <div class="card-res">
          <div class="card-image">
            <img src="${blog.img1}">
          </div>
          <div class="card-text">
            <p class="card-meal-type">${blog.category}</p>
            <h2 class="card-title">${blog.title}</h2>
            <p class="card-body">${blog.body}</p>
            <p class="card-body">${blog.author}<span class="ms-3"><small class="text-secondary">${blog.date}</small></span></p>
            <div class="card-price"><img src="${blog.avatar}"></div>

            <p class="card-body"></p>

          </div>
          <div class="card-avatar"><img src="${blog.img2}"></div>
          </div>    
          
          `;   
  
          //filter categories
          let filter = blog.project.toLowerCase();
          let cat = document.getElementById("catData").value;
          if (filter === cat) { html += htmlSegment; }
          // if (cat === "all") { html += htmlSegment; }
    
          // filter card type 
          let author = document.getElementById("authorData").value;
          let aFiltered = blog.author;
          if (aFiltered === author) { html += htmlSegment;}

          
          let title = document.getElementById("titleData").value;
          let tFiltered = blog.title;
          if (tFiltered === title) { html += htmlSegment;}
            
          if (author === "all" && cat === "all" && title === "all") {
            html += htmlSegment;
          }

        });
        let container = document.querySelector('.blog-cards');
        container.innerHTML = html;
        return
    } 
    else if (active === "standard") {
            
        blogs.forEach(blog => {
          
          let htmlSegment = `
  
          <div class="card-res">
          <div class="card-image">
            <img src="${blog.img1}">
          </div>
          <div class="card-text">
            <p class="card-meal-type">${blog.category}</p>
            <h2 class="card-title">${blog.title}</h2>
            <p class="card-body">${blog.body}</p>
            <p class="card-body">${blog.author}<span class="ms-3"><small class="text-secondary">${blog.date}</small></span></p>
            <div class="card-price"><img src="${blog.avatar}"></div>

            <p class="card-body"></p>

          </div>
          <div class="card-avatar"><img src="${blog.img2}"></div>
          </div>    
          
          `;   
  
          //filter categories
          let filter = blog.project.toLowerCase();
          let cat = document.getElementById("catData").value;
          if (filter === cat) { html += htmlSegment; }
          // if (cat === "all") { html += htmlSegment; }
    
          // filter card type 
          let author = document.getElementById("authorData").value;
          let aFiltered = blog.author;
          if (aFiltered === author) { html += htmlSegment;}
  
          if (author === "all" && cat === "all") {
            html += htmlSegment;
          }
        });
        let container = document.querySelector('.blog-cards');
        container.innerHTML = html;
        return
    }
    else if (active === "reg") {
            
        blogs.forEach(blog => {
          
      
          let htmlSegment = `
  
          <div class="service col-sm-12 col-xl-4 col-md-7 mx-auto d-block">
          <div class="card mx-auto d-block" id="blogCard">
            <div class="card-img img-fluid">
              <img src="${blog.img2}">
              <img src="${blog.img1}">
            </div>
            <div class="card-price">
              <p>${blog.category}</p>
            </div>
            <div class="card-body">
              <h4 class="">${blog.title}</h4>
              <p>${blog.body}</p>
            </div>
            <div class="card-user">
              <img src="${blog.avatar}">
              <div class="user-info">
                <h5>${blog.author}</h5>
                <small>${blog.date}</small>
              </div>
            </div>
          </div>
        </div>      `;   
  
          //filter categories
          let filter = blog.project.toLowerCase();
          let cat = document.getElementById("catData").value;
          if (filter === cat) { html += htmlSegment; }
          // if (cat === "all") { html += htmlSegment; }
    
          // filter card type 
          let author = document.getElementById("authorData").value;
          let aFiltered = blog.author;
          if (aFiltered === author) { html += htmlSegment;}
  
          if (author === "all" && cat === "all") {
            html += htmlSegment;
          }
        });
        let container = document.querySelector('.blog-cards');
        container.innerHTML = html;
        return
    } 
    else if (active === "fade") {
      blogs.forEach(blog => {       
        let htmlSegment = `

        <div class="col-lg-4 col-md-6">
        <div class="team-item">
            <div class="position-relative overflow-hidden">
                <img class="img-fluid w-100" src="${blog.img1}" alt="">
                <div class="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                    <div class="d-flex align-items-center justify-content-start">
                        <a class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                        <a class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                        <a class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                    </div>
                    
                </div>
            </div>
            <div class="bg-dark border-inner text-center p-4">
                <h4 class="text-uppercase ">${blog.category}</h4>
                <p class="text-white m-0">${blog.title}</p>
            </div>
        </div>
    </div>

        
        `;   

        //filter categories
        let filter = blog.project.toLowerCase();
        let cat = document.getElementById("catData").value;
        if (filter === cat) { html += htmlSegment; }
        // if (cat === "all") { html += htmlSegment; }
  
        // filter card type 
        let author = document.getElementById("authorData").value;
        let aFiltered = blog.author;
        if (aFiltered === author) { html += htmlSegment;}

        if (author === "all" && cat === "all") {
          html += htmlSegment;
        }
      });
      let container = document.querySelector('.blog-cards');
      container.innerHTML = html;
      
    } 
    else if (active === "dark") {
            
        blogs.forEach(blog => {
          
          let htmlSegment = `
  
          <div class="col-md-6 col-xl-4">
            <div class="card mx-auto d-block blog-item m-3" style="width: 390px;">
              <div class="rounded-top">
                <img class="img-fluid" src="${blog.img1}" style="width: 390px; height: 300px; object-fit: cover;"> 
              </div>
              <div class="product-header display-4 color-red text-russo">
                <h2 class="p-3 h4 text-uppercase bg-red btn-rounded ms-2 mt-2 py-1 px-3" style="position: absolute; top: 1px; color: white;">${blog.category}</h2>
              </div>
              <div class="bg-dark d-flex-column align-items-center p-4 p-1">
                <h4 class="fs-5 text-uppercase text-light me-3 d-flex">${blog.title}
                  <img src="https://www.brmcontractors.net/assets/logo/brm-red.ico" class="img-fluid mx-auto d-block ms-1" style="width: 140px; height: 70px;">
                </h4>
                <p class="text-light text-roboto lead">${blog.body}</p>
              </div><div class="card-user">
              <div class="user-info bg-dark">
                <img src="${blog.avatar}" class="p-2"style="width:60px;height:60px;border-radius:50px;>
                <a class="text-light text-roboto ps-5 mb-0 pb-0"><span class="text-light ms-3">${blog.author}</span></a>
                <small class="text-roboto ps-5 small mt-0 pt-0 pb-2 text-light">${blog.date}</small>
              </div>
            </div>
          </div>
        </div>        
`;   
  
          //filter categories
          let filter = blog.project.toLowerCase();
          let cat = document.getElementById("catData").value;
          if (filter === cat) { html += htmlSegment; }
          // if (cat === "all") { html += htmlSegment; }
    
          // filter card type 
          let author = document.getElementById("authorData").value;
          let aFiltered = blog.author;
          if (aFiltered === author) { html += htmlSegment;}
  
          if (author === "all" && cat === "all") {
            html += htmlSegment;
          }
        });
        let container = document.querySelector('.blog-cards');
        container.innerHTML = html;
        return
    }
    else if (active === "overlay") {
            
        blogs.forEach(blog => {
          
          let htmlSegment = `
          
          <div class="col-lg-6 mx-auto d-block mt-2" style="min-width:65%;">
          <div class="p-1 card-overlay card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-l" 
          style="background: linear-gradient(rgba(19, 16, 34, 0.48) 0%, rgba(19, 16, 34, 0.68) 100%) 0% 0% / cover, 
          url(${blog.img1}) center center no-repeat;background-size: cover;">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <div class="lc-block pt-5 mt-5 mb-4">
              <h1 class="display-3 text-uppercase  mt-2" style="color:white;font-weight:600;">${blog.category}</h1>
                <h2 class="fw-bold">${blog.title}</h2>
                <p>${blog.body}</p>
              
              <ul class="d-flex list-unstyled mt-auto ms-auto overlay-link">
                <a class="btn btn-link btn-sm text-white" href="" role="button">${blog.author}</a>
                <img src="https://www.brmcontractors.net/assets/logo/brm-red.ico" class="float-start ms-5" style="height: 50px;border-radius:50px;width:80px;height:80px;">
              </ul>
              </div>
            </div>
          </div>
        </div>            `;   
  
          //filter categories
          let filter = blog.project.toLowerCase();
          let cat = document.getElementById("catData").value;
          if (filter === cat) { html += htmlSegment; }
          // if (cat === "all") { html += htmlSegment; }
    
          // filter card type 
          let author = document.getElementById("authorData").value;
          let aFiltered = blog.author;
          if (aFiltered === author) { html += htmlSegment;}
  
          if (author === "all" && cat === "all") {
            html += htmlSegment;
          }
        });
        let container = document.querySelector('.blog-cards');
        container.innerHTML = html;
        return
    }
    else {
        blogs.forEach((blog) => {
          let index = Number(active);
          if (singleCount++ === index) {
            
            let segment = `
            <div class="blog-wide col-xl-10 col-md-10 col-sm-12 mx-auto d-block">
            <div class="card mx-auto d-block" id="blogCard">
                <div class="card-img img-fluid">
                    <img src="${blogs[index].img2}">
                    <img src="${blogs[index].img1}">
                </div>
                <div class="card-price">
                    <p>${blogs[index].category}</p>
                </div><div class="card-body">
                    <h4 class="">${blogs[index].title}</h4>
                    <p>${blogs[index].body}</p>
                </div>
                <div class="card-user"><img src="${blogs[Number(active)].avatar}">
                    <div class="user-info">
                        <h5>${blogs[index].author}</h5>
                        <small>${blogs[index].date}</small>
                        <div>
                    </div>
                </div>
                <p class="ms-5 pt-1 small color-dark">${blogs[index].project}</p>
            </div>
          </div>
          </div>   `;
            
            html = segment;
            container = document.querySelector('.blog-cards');
            container.innerHTML = html;
          }
         
    })
    }

    singleCount = 0;
    totalQuery.innerHTML = renderLength().length;
    totalQuery.style.fontSize = "16px";
    
}


// renderBlogs();
function renderUrl () {
  url = document.getElementById("urlData").value;
  renderBlogs('all');
}

function renderLength(){
    let blogs = document.querySelectorAll(".card-res");
    return blogs;
}

function randomBlog(){
  let random = Math.floor(Math.random() * length);
  renderBlogs(random);
}



document.getElementById("urlData").addEventListener("change", () => {

  let allTitles = document.querySelectorAll('.title-option');
  allTitles.forEach(i => {
    document.getElementById("titleData").removeChild(i);
  });

  let allAuthors = document.querySelectorAll('.author-option');
  allAuthors.forEach(i => {
    document.getElementById("authorData").removeChild(i)
  });
  let allCategory = document.querySelectorAll('.cat-option');
  allCategory.forEach(i => {
    document.getElementById("catData").removeChild(i)
  });
  getBlogs();
  renderUrl();
});


//render titles at sidenav
function fetchTitles(blogs){
  
  let titles = document.getElementById("titleData");
  let blogOption = document.createElement("option");
   
  blogOption.innerHTML = 'All';
  blogOption.value = "all";
  blogOption.className = "title-option";
  titles.appendChild(blogOption);

  blogs.forEach((blog, i) => {
    let blogOption = document.createElement("option");
    blogOption.innerHTML = i + ". " + blog.title;
    blogOption.value = blog.title;
    blogOption.className = "title-option";
    titles.appendChild(blogOption);
  });
};

//render author at sidenav
function fetchAuthor(blogs){
  let authors = document.getElementById("authorData");
  let authOption = document.createElement("option");
  authOption.innerHTML = 'All';
  authOption.value = "all";
  authOption.className = "author-option";
  authors.appendChild(authOption);

  blogs.forEach((blog, i) => {
    let options = document.createElement("option");
    options.innerHTML = i + ". " + blog.author;
    options.value = blog.author;
    options.className = "author-option";
    authors.appendChild(options);
  });
};

//render author at sidenav
// function fetchCategory(blogs){
//   let category = document.getElementById("catData");
//   let catOption = document.createElement("option");
//   catOption.innerHTML = 'All';
//   catOption.value = "all";
//   catOption.className = "cat-option";
//   category.appendChild(catOption);

//   blogs.forEach((blog, i) => {
//     let options = document.createElement("option");
//     options.innerHTML = i + ". " + blog.category;
//     options.value = blog.category;
//     options.className = "cat-option";
//     category.appendChild(options);
//   });
// };



//create blog at index i
let activeIndex = 0;
function blog(i) {
  renderBlogs(i);
}

let next = document.getElementById("btnNext");
let prev = document.getElementById("btnPrev");

next.addEventListener("click", () => {
  renderUrl();
  if (activeIndex >= length -1) {
    activeIndex = 0;
  }
  activeIndex++;
  blog(activeIndex);
});

prev.addEventListener("click", () => {
  renderUrl();
  if (activeIndex <= 0) {
    activeIndex = length;
  }
  activeIndex--;
  blog(activeIndex);
})
