// let url = "https://www.brmcontractors.net/assets/data/brm.json";

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
   


    if (active === "all") {
      blogs.forEach(blog => {
        
    
        let htmlSegment = `

        <div class="service col-sm-12 col-xl-6 col-md-8 mx-auto d-block">
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
        </div>    `;   

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
    let blogs = document.querySelectorAll("#blogCard");
    return blogs;
}

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
