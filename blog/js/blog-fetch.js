// let url = "https://www.brmcontractors.net/assets/data/brm.json";

async function getBlogs() {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderBlogs() {
    let blogs = await getBlogs();
    let html = '';
   


    blogs.forEach(blog => {
    
        let htmlSegment = `

        <div class="blog-card">
          <div class="blog" style="padding:12px;">
            <div class="top">
              <h1>${blog.category}</h1>
 <h5 style="color:blue">category selection --> ${document.getElementById("catData").value}</h5>
 <h5 style="color:red">author selection --> ${document.getElementById("authorData").value}</h5>
              <img src="${blog.img2}">
              <img src="${blog.img1}">
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

    let container = document.querySelector('.container');
    container.innerHTML = html;
}
// renderBlogs();

function renderUrl () {
  url = document.getElementById("urlData").value;
  renderBlogs();
}


function renderLength(){
    let blogs = document.querySelectorAll(".blog-card");
    window.alert(blogs.length);
}

