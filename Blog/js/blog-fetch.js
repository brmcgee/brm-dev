async function getBlogs() {
    let url = 'https://www.brmcontractors.net/assets/data/brm.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

let selectUser = "Heather McGee";
let selectCategory = "Bathroom Remodel";


async function renderBlogs() {
    let blogs = await getBlogs();
    let html = '';
    blogs.forEach(blog => {

        let htmlSegment = `

        <div class="blog-card" style="border:1px solid #333; max-width:800px;">
          <div class="blog" style="padding:12px;">
            <div class="top">
              <h1>${blog.category}</h1>
              <img src="${blog.img2}" style="width:300px;margin-bottom:2px;" >
              <img src="${blog.img1}" style="width:300px" >
            </div>
            <div class="user">
              <img src="${blog.avatar}" style="height:75px;width:75px;border-radius:50px;">
              <p>${blog.author}</p>
              <p>${blog.date}</p>
            </div>
            <div class="content">
              <h2>${blog.title}</h2>
              <p>${blog.body}</p>
              <p>Category -- ${blog.project}</p>
            </div>
          </div>
        </div>       
        `;

        // if (blog.author === selectUser) {
        //     html += htmlSegment;
        // }
        if (blog.category === selectCategory) {
            html += htmlSegment;
        }
       
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}
renderBlogs();

function renderLength(){
    let blogs = document.querySelectorAll(".blog-card");
    window.alert(blogs.length);
}

