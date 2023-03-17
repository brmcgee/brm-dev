
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

    let category = document.querySelectorAll('.cat-option')
    if (category.length < 1) {
      fetchCategory(blogs);
    }

    let project = document.querySelectorAll('.project-option')
    if (project.length < 1) {
      fetchProject(blogs);
    }


    // } else {
    //   options.forEach(i => {
    //     document.getElementById('titleData').removeChild(i)
    //   })
    //   fetchTitles(blogs);
    // }

      // MAIN run all selections
    if (active === "all") {
      // filters 
        blogs.forEach(blog => {
          
          // initial 
          let htmlSegment = `
  
          <div class="service col-sm-12 col-xl-5 col-md-9 mx-auto d-block">
          <div class="card mx-auto d-block" id="blogCard" style="height:auto;box-sizing:border-box;">
            <div class="card-img img-fluid">
              <img src="${blog.img2}" style="height:calc(220px + 10vw);">
              <img src="${blog.img1}" style="height:calc(220px + 10vw);">
            </div>
            <div class="card-price">
              <p style="font-size:calc(1rem + .5vw);">${blog.category}</p>
            </div>
            <div class="card-body">
              <h4 style="font-size:calc(.9rem + .4vw)";>${blog.title}</h4>
              <p style="font-size:calc(14px + .1vw);">${blog.body}</p>
            </div>
            <div class="card-user bg-secondary pt-2 pb-2">
              <img src="${blog.avatar}" style="width:70px;height:70px;border:1px solid #333;">
              <div class="user-info">
                <h5 class="text-dark fw-bold pt-3">${blog.author}</h5>
                <small class="fw-bold"">${blog.date}</small>
              </div>
            </div>
          </div>
        </div>    
          
          `;   
  
          //filter categories
          let filter = blog.category.toLowerCase();
          let cat = document.getElementById("catData").value;
          if (filter.toLowerCase() === cat.toLowerCase()) { html += htmlSegment; }
    
          // filter card type 
          let author = document.getElementById("authorData").value;
          let aFiltered = blog.author;
          if (aFiltered.toLowerCase() === author.toLowerCase()) { html += htmlSegment;}

          //filter title
          let title = document.getElementById("titleData").value;
          let tFiltered = blog.title;
          if (tFiltered.toLowerCase() === title.toLowerCase()) { html += htmlSegment;}

          //filter project
          let project = document.getElementById("projectData").value;
          let pFiltered = blog.project;
          if (pFiltered.toLowerCase() === project.toLowerCase()) { html += htmlSegment;}


          if (author === "all" && cat === "all" && title === "all" && project === "all") {
            html += htmlSegment;
          }

        });
        let container = document.querySelector('.blog-cards');
        container.innerHTML = html;
        clearSource();
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
                        <a class="btn btn-lg btn-warning btn-lg-square border-inner rounded-0 mx-1" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                        <a class="btn btn-lg btn-warning btn-lg-square border-inner rounded-0 mx-1" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                        <a class="btn btn-lg btn-warning btn-lg-square border-inner rounded-0 mx-1" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                    </div>
                    
                </div>
            </div>
            <div class="bg-dark border-inner text-center p-4">
                <h4 class="text-uppercase text-light fw-strong display-6 text-roboto">${blog.category}</h4>
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
  
          <div class="col-md-6 col-xl-4 g-10">
            <div class="card mx-auto d-block blog-item m-3" style="min-width: 390px; width:100%">
              <div class="rounded-top">
                <img class="img-fluid" src="${blog.img1}" style="min-width: 390px; width:100% height: 300px; object-fit: cover;"> 
              </div>
              <div class="product-header display-4 color-red text-russo">
                <h2 class="p-3 h5 text-uppercase bg-red btn-rounded ms-2 mt-2 py-1 px-3" style="position: absolute; top: 1px; color: white;">${blog.category}</h2>
              </div>
              <div class="bg-dark d-flex-column align-items-center p-4 p-1">
                <h4 class="fs-5 text-uppercase text-light me-3 d-flex">${blog.title}
                  <img src="https://www.brmcontractors.net/assets/logo/brm-red.ico" class="img-fluid mx-auto d-block ms-1" style="width: 140px; height: 70px;">
                </h4>
                <p class="text-light text-roboto lead">${blog.body}</p>
              </div><div class="card-user">
              <div class="user-info bg-dark">
                <img src="${blog.avatar}" class="ms-3 mb-3 p-2"style="width:60px;height:60px;border-radius:50px;>
                <a class="text-light text-roboto ps-5 mb-0 pb-0"><span class="text-light ms-3">${blog.author}</span></a>
                <small class="text-roboto ps-5 small mt-0 pt-0 pb-2 text-secondary">${blog.date}</small>
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
    else if (active === 'table') {

    if (document.getElementById("passW").value === 'rem') { 

      let table = document.querySelector(".table");
      let blogTable = document.getElementById("tableBody");

      if (blogTable !== null) {
        // let rows = document.querySelectorAll("td");
        // rows.forEach(i => {
        //   blogTable.removeChild(i)
        // })
        table.removeChild(blogTable);
        console.log('remove table dude')

      }
      let tableHtml = `<h2 class="text-center">Database for ${url}</h2>`;

      tableHtml += `
      
      <div class="container-xxl" >
        <table class='table table-bordered border-warning table-striped table-dark'>

         <thead>
          <tr>
            <td>id</td>
            <td>isHero</td>
            <td>purpose</td>
            <td>category</td>
            <td>date</td>
            <td>author</td>
            <td>avatar</td>
            <td>project</td>
            <td>title</td>
            <td>body</td>
            <td>img1</td>
            <td>img2</td>
            <td>link</td>
          </tr>
          </thead>

          <tbody id="tableBody">
      `;
          blogs.forEach(i => {

            tableHtml += `
        <tr class="table-light table-bordered border-dark">
          <td>${i.id}</td>
          <td>${i.isHero}</td>
          <td>${i.purpose}</td>
          <td>${i.category}</td>
          <td>${i.date}</td>
          <td>${i.author}</td>
          <td><img src="${i.avatar}" style="width:50px;height:50px;border-radius:50%;"></td> 
          <td>${i.project}</td>
          <td>${i.title}</td>
          <td>${i.body}</td>
          <td><img src="${i.img1}" style="width:110px;height:110px"></td>
          <td><img src="${i.img2}" style="width:110px;height:110px"></td>
          <td class="align-bottom"><a href="#blogs"><button class="btn-main" onclick="renderBlogs(${i.id})">View</button></a></td>
        </tr>  `;
      });
      
      tableHtml += ` 
            </tbody>
            </table>
            </div>
            `;
 
      let tableContainer = document.querySelector('#contentTable');
      tableContainer.innerHTML = tableHtml;
      return;   
    } else {
      window.alert("oops.. need admin access");
    }  

  






    }
    // selector next/prev number i view
    else {
        blogs.forEach((blog) => {
          let index = Number(active);
          if (singleCount++ === index) {
            
            let segment = `
            <div class="mt-2 blog-wide col-xl-12 col-md-12 col-sm-12 mx-auto d-block">
            <div class="card mx-auto d-block" id="blogCard">
                <div class="card-img img-fluid">
                    <img src="${blogs[index].img2}" class="img-fluid">
                    <img src="${blogs[index].img1}" class="img-fluid">
                </div>
                <div class="card-price">
                    <p style="font-size: calc(1rem + 1.32vw)">${blogs[index].category}</p>
                </div><div class="card-body">
                    <h4 style="font-size: calc(1rem + .75vw);">${blogs[index].title}</h4>
                    <p style="font-size: calc(1rem + .5vw);">${blogs[index].body}</p>
                </div>
                <div class="card-user pb-2"><img src="${blogs[Number(active)].avatar}" class=" bg-warning">
                    <div class="user-info">
                        <h5>${blogs[index].author}</h5>
                        <small>${blogs[index].date}</small>
                        <div>
                    </div>
                </div>
                <p class="ms-3 pt-1 small color-dark">${blogs[index].project}</p>
                <p class="pt-1 small color-dark">${blogs[index].purpose}
                  <span class="pt-1 small color-dark">#${index}</span>
                </p>
                
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
}


// get JSON URL renderBlogs();
function renderUrl () {
  url = document.getElementById("urlData").value;
  renderBlogs('all');
}

// generate random blog 
function randomBlog(){
  let random = Math.floor(Math.random() * length);
  renderBlogs(random);
}

// on menu selection database change
document.getElementById("urlData").addEventListener("change", () => {
  let allTitles = document.querySelectorAll('.title-option');
  allTitles.forEach(i => {
    document.getElementById("titleData").removeChild(i);
  });

  let allAuthors = document.querySelectorAll('.author-option');
  allAuthors.forEach(i => {
    document.getElementById("authorData").removeChild(i);
  });

  let allCategory = document.querySelectorAll('.cat-option');
  allCategory.forEach(i => {
    document.getElementById("catData").removeChild(i);
  });

  let allProject = document.querySelectorAll('.project-option');
  allProject.forEach(i => {
    document.getElementById("projectData").removeChild(i);
  });

  getBlogs();
  renderUrl();
});


//render titles at sidenav
function fetchTitles(blogs){
  
  let titles = document.getElementById("titleData");
  let blogOption = document.createElement("option");
   
  blogOption.innerHTML = 'all';
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

//render author values at sidenav
function fetchAuthor(blogs){
  let all = ['all'];
  let authors = document.getElementById("authorData");
  let authOption = document.createElement("option");

  // build array without duplicate author 
  blogs.forEach((blog, i) => {
    if (all.indexOf(blog.author) < 0) {
      all.push(blog.author);
    }
  });

  // push array to select options menu author
  all.forEach(i => {
    let options = document.createElement("option");
    options.innerHTML = i;
    options.value = i;
    options.className = "author-option";
    authors.appendChild(options);
  })
};

// render category at sidenav
function fetchCategory(blogs){
  let all = ['all'];
  let category = document.getElementById("catData");
  let catOption = document.createElement("option");

  // build array without duplicate category 
  blogs.forEach((blog, i) => {
    // console.log(all.indexOf('all'))
    if (all.indexOf(blog.category) < 0) {
      all.push(blog.category);
    }
  });

  all.forEach((i) => {
    let options = document.createElement("option");
    options.innerHTML = i;
    options.value = i;
    options.className = "cat-option";
    category.appendChild(options);
  });
};

// render project at sidenav
function fetchProject(blogs){
  let all = ['all'];
  let project = document.getElementById("projectData");
  let projectOption = document.createElement("option");
  
  // build array without duplicate author 
  blogs.forEach((blog, i) => {
    if (all.indexOf(blog.project) < 0) {
      all.push(blog.project);
    }
  });

  all.forEach((i) => {
    let options = document.createElement("option");
    options.innerHTML = i;
    options.value = i.toLowerCase();
    options.className = "project-option";
    project.appendChild(options);
  });
};

// clear menu source 
function clearSource() {
  document.getElementById("catData").value = 'all';
  document.getElementById("projectData").value = 'all';
  document.getElementById("authorData").value = 'all';
  document.getElementById("titleData").value = 'all';
}

// create blog at index i
let activeIndex = 0;
function blog(i) {
  renderBlogs(i);
}

let next = document.getElementById("btnNext");
let prev = document.getElementById("btnPrev");

next.addEventListener("click", () => {
  // renderUrl();
  if (activeIndex >= length -1) {
    activeIndex = 0;
  }
  activeIndex++;
  blog(activeIndex);
});

prev.addEventListener("click", () => {
  // renderUrl();
  if (activeIndex <= 0) {
    activeIndex = length;
  }
  activeIndex--;
  blog(activeIndex);
})
