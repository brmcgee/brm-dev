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
async function renderBlogs(active) {
    let blogs = await getBlogs();
    let html = '';
   

    if (active === "all") {
      blogs.forEach(blog => {
    
        let htmlSegment = `

        <div class="blog-card">
          <div class="blog">

            <div class="top">

              <div class="head-top">
                <img src="https://www.brmcontractors.net/assets/logo/brm-red.ico" style="width:75px;height:75px;">
                <h1>${blog.category}</h1>
              </div>

              <div class="img-top">
                <img src="${blog.img2}">
                <img src="${blog.img1}">
              </div>
            </div>

            <div class="user">
              <img src="${blog.avatar}" style="height:75px;width:75px;border-radius:50px;">
              
              <div class="user-content">
                <p>${blog.author}</p>
                <p>${blog.date}</p>
              </div>
            </div>

            <div class="content">
              <h2>${blog.title}</h2>
              <p>${blog.body}</p>
              <p>Category -- ${blog.project}</p>
              <p style="color:blue;margin:0;padding:0;">category selection --> ${document.getElementById("catData").value}</p>
              <p style="color:red;margin:0;padding:0;">author selection --> ${document.getElementById("authorData").value}</p>
            </div>
          </div>
        </div>       `;   

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
            <div class="blog-card">
              <div class="blog">
    
                <div class="top">
    
                  <div class="head-top">
                    <img src="https://www.brmcontractors.net/assets/logo/brm-red.ico" style="width:75px;height:75px;">
                    <h1>${blogs[index].category}</h1>
                  </div>
    
                  <div class="img-top">
                    <img src="${blogs[index].img2}">
                    <img src="${blogs[index].img1}">
                  </div>
                </div>
    
                <div class="user">
                  <img src="${blogs[Number(active)].avatar}" style="height:75px;width:75px;border-radius:50px;">
                  
                  <div class="user-content">
                    <p>${blogs[index].author}</p>
                    <p>${blogs[index].date}</p>
                  </div>
                </div>
    
                <div class="content">
                  <h2>${blogs[index].title}</h2>
                  <p>${blogs[index].body}</p>
                  <p>Category -- ${blogs[index].project}</p>
                  <p>index ${singleCount - 1}</p>
                  <p style="color:blue;margin:0;padding:0;">category selection --> ${document.getElementById("catData").value}</p>
                  <p style="color:red;margin:0;padding:0;">author selection --> ${document.getElementById("authorData").value}</p>
                </div>
              </div>
            </div>       `;
            
            html = segment;
            container = document.querySelector('.blog-cards');
            return container.innerHTML = html;
          }
         
    })
  }
  singleCount = 0;
}
// renderBlogs();

function renderUrl () {
  url = document.getElementById("urlData").value;
  renderBlogs('all');
}

function renderLength(){
    let blogs = document.querySelectorAll(".blog-card");
    window.alert(blogs.length);
}

//create blog at index i
function blog(i) {
  renderBlogs(i);
}

