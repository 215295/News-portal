/* selection */

const show_categories = document.getElementById("categories");
const countCategories = document.getElementById("countCategories");
const showCards = document.getElementById("showCards");
// const cardContaniner = document.getElementById("cardContaniner");
const modal_body = document.getElementById("modal_body");
// startloader
async function loadCategory() {
  
  try {

    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    showCategory(data.data.news_category);
  } catch (error) {
    throw error;
  }
}
loadCategory();

function showCategory(categories) {
  categories.forEach(category => {
    
    const CategoryDiv = document.createElement("div");
    CategoryDiv.innerHTML = `
    <a style="cursor:pointer;" class="text-primary text-decoration-none py-5" onclick=showCategoryNews(${category.category_id})>${category.category_name}</a>
      `;
    show_categories.appendChild(CategoryDiv);
  });
}
// startloader

function showCategoryNews(id) {
  // toggleSpiner(true)
  const newsUrl = `https://openapi.programming-hero.com/api/news/category/0${id}`;
 
  fetch(newsUrl)
    .then(res => res.json())
    .then(data => displayNews(data));
}

// dataNews
const displayNews = alldata => {
  const datalist = alldata.data;
  countCategories.innerHTML = "";
  const p = document.createElement("p");
  const dataLength = alldata.data.length;
  if (dataLength) {
    p.innerHTML = dataLength + ` News Found This Category `;
    countCategories.appendChild(p);
  } else {
    p.innerHTML = `No Data Found This Category `;
    countCategories.appendChild(p);
  }
  showCards.innerHTML = "";
  datalist.forEach(data => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card mb-3" style="max-width: 540px" >
            
        </div>
        <div  class="row g-0">
        <div class="col-md-4">
            <img src=${data.thumbnail_url} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text text-truncate">
                ${data.details}
            </p>
            <div class="d-flex align-items-center justify-content-around">

            <div class="d-flex pt-5">
                
            <a href=" "> <img class="rounded-circle mt-4 me-3 " src="${data.author.img} " alt="" class="rounded-circle " width="70" height="70" ></a>
            <div class="px-3 pt-4">
               <h5> ${data.author.name ? data.author.name : 'Not Found data'} </h5>
               
               <p>${data.author.published_date}</p>
            </div>
            
            <div class="mx-3 mt-5 "> <p >View:${data.total_view ? data.total_view :'Not Found data' } </p></div>   
            <div class="mt-5 ms-5  " ><button "userInfo('${data.category_id}', '${data._id}')"  class="btn btn-primary type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal""> details</button>  </div>                             
                   
          </div>

               
            
      `;

    showCards.appendChild(div);
  });
  toggleSpiner(false)
};

// userinfo 
function userInfo(cId, user_id) {
  let url = `https://openapi.programming-hero.com/api/news/category/${cId}`;
  fetch(url)
    .then(res => res.json())
    .then(data => showData(data, user_id));
}

// details 
function showData(data, user_id) {
  modal_body.innerHTML = "";
  data.data.forEach(data => {
    if (data._id === user_id) {
      let div = document.createElement("div");
      document.querySelector(".modal-title").innerHTML = data.title;
      div.innerHTML = `
      <img src=${data.thumbnail_url} class="img-fluid rounded-start" alt="..." />
      <p class="card-text text-truncate">
                ${data.details}
      </p>
      
      `;
      modal_body.appendChild(div);
    }
  });
}

 //all news 
 
const showAllNews = async () => {
  try {
    const url = `https://openapi.programming-hero.com/api/news/category/08`;
    const res = await fetch(url);
    const allData = await res.json();
    let dataLength = allData.data;
    console.log(dataLength);
    if (dataLength.length) {
      const p = document.createElement("p");
      p.innerHTML = dataLength.length + ` Data found here`;
      countCategories.appendChild(p);
    } else {
      p.innerHTML = `Data not found`;
      countCategories.appendChild(p);
    }
    
    allData.data.slice(0, 15).forEach(data => {
      const div = document.createElement("div");
      
      div.innerHTML = `
        <div class="card mb-3" style="max-width: 540px" >
            
        </div>
        <div  class="row g-0">
        <div class="col-md-4">
            <img src=${data.thumbnail_url} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text text-truncate" >
                ${data.details}
            </p>
            <div class="d-flex align-items-center justify-content-around">
            <div class="d-flex pt-5">
                   <a href=" "> <img class="rounded-circle mt-4 me-3 " src="${data.author.img} " alt="" class="rounded-circle " width="70" height="70" ></a>
                   <div class="px-3 pt-4">
                   <h5> ${data.author.name ? data.author.name : 'Not Found'} </h5>
                   
                   <p>${data.author.published_date}</p>
                </div>
                
                <div class="mx-3 mt-5 "> <p >View:${data.total_view ? data.total_view :'Not Found data'} </p></div> 
            </div>
            <a onclick= "userInfo('${data.category_id}', '${data._id}')"  class="btn btn-primary type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal""> details</a>
          </div>
            </div>
            
        </div>
        </div>
      `;

      showCards.appendChild(div);
    });
    // stoploader
  } catch (error) {
    console.log(error);
    throw error;
  }
};

showAllNews();
const toggleSpiner=isLoading=>{
  const loaderSection= document.getElementById('loader')
  if(isLoading){
    loaderSection.classList.remove('d-none')
  }
  else{
    loaderSection.classList.add('d-none')
  }

}
