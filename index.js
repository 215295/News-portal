const loadcategories =( )=>{
    const url='https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
    .then(res=>res.json())
    .then(data =>displayNews_category(data.data.news_category))
 }

   const displayNews_category=news_category=>{
    const categoriesContainer= document.getElementById('categories-container')
    news_category.forEach(category => {
      
      const categoryDiv=document.createElement('div')
      categoryDiv.innerHTML=`
      <div class="d-flex"> 
      <a class="text-decoration-none fw-bold px-4" href="#">${category. category_name} </a>

      
    </div>

      `;
    categoriesContainer.appendChild(categoryDiv);
      
    });
   }
    
loadcategories()


const loadNewsCards=()=>{
 const  url='https://openapi.programming-hero.com/api/news/category/01'
  fetch(url)
  .then(res =>  res.json())
  .then(data=>displayNewsCards(data.data))
}
const displayNewsCards=newscards=>{
  const newscarddiv=document.getElementById('news-carddiv')
  newscards.forEach(newscard => {
    console.log(newscard)
    const newsDiv=document.createElement('div')
    newsDiv.innerHTML=`
    <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${newscard.thumbnail_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${newscard.title} </h5>
                <p class="card-text">${newscard.details} </p>
         
                  <div class="d-flex pt-5">
                
                  <a href=" "> <img class="rounded-circle mt-4 me-3 " src="${newscard.author.img} " alt="" class="rounded-circle " width="70" height="70" ></a>
                  <div class="px-3 pt-4">
                     <h5> ${newscard.author.name ? newscard.author.name : 'Not Found'} </h5>
                     
                     <p>${newscard.author.published_date}</p>
                  </div>
                  
                  <div class="mx-3 mt-5 "> <p >View:${newscard.total_view} </p></div>   
                  <div class="mt-5 ms-5  " ><button  onclick="displayModa('${newscard.category_id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailsModal">Details</button>  </div>                             
                         
                </div>
              
                
                
              </div>
            </div>
          </div>
        </div>
    `;
    newscarddiv.appendChild(newsDiv);
    
  });
}
loadNewsCards ()


const loadModal=()=>{
  const url='https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a'
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayModal(data.data))
}
const displayModal=modals=>{
  const 
 modals.forEach(modal => {
  
  
 });

}
loadModal()







// const loadCatgory = () => {

//  const url = 'https://openapi.programming-hero.com/api/news/categories'

//  fetch(url)
//       .then(res => res.json())
//       .then(data => displayShow(data.data.news_category))

// }

// const displayShow = (data) => {

//   // console.log(data)

//   // const x = Object.keys(data);
//   // const count = x.length
//   // console.log(count)

//   const catagoriContainer = document.getElementById('catagoris-container');



//   data.forEach(data => {

//       console.log(data)

//       const newDiv = document.createElement('div')

//       newDiv.innerHTML = `
              
//            <li  onclick="cotagoriesId('${data.category_id}')" class="text text-secondary p-4"> ${data.category_name} </li>
//           `;

//       catagoriContainer.appendChild(newDiv)

//   })
// }
/////nav

// // const inputNamber = document.getElementById('input-number');

// // if (data.length > 0) {
// //     inputNamber.value =  ${data.length} items found ;
// // } else {

// //     inputNamber.value = 'No news found';
// // }




// const cotagoriesId = (id) => {

//   toggleSpinner(true)
//   // console.log(id)
//   fetch(https://openapi.programming-hero.com/api/news/category/${id})

//       .then(res => res.json())
//       .then(data => cotagoriesIdShow(data.data))

// }

// const cotagoriesIdShow = (data) => {
//   console.log(data)
//   const showContainer = document.getElementById('show-container')
//   showContainer.textContent = '';
//   data.forEach(data => {

//       // console.log(data)

//       const div = document.createElement('div');
//       div.innerHTML = `
//       <div class="card mb-3" style="width:1120px;">
//             <div class="row g-0">
//             <div class="col-md-4">
//                 <img src="${data.thumbnail_url}" class="img-fluid rounded-start" alt="...">
//             </div>
//             <div class="col-md-8">
//                 <div class="card-body">
//                     <h5 class="card-title"> ${data.title}</h5>
//                     <p class="card-text"> ${data.details.length > 250 ? data.details.slice(0, 250) + '...' : data.details}.</p>

                    // <img class="rounded-5 mt-4 me-3" style="width: 50px;" src="${data.author.img}" class="img-fluid rounded-start" >
                    // <span> ${data.author.name ? data.author.name : 'Not Found'} </span>
                    //   <span class="ps-4 pe-3"> <i class="fa-regular fa-eye"></i> ${data.total_view} </span>
                    //   <button onclick="showDetails('${data.category_id}')" class ="mx-5 pe-1 btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailsModal">show ditails</button>

//                 </div>
//             </div>
//         </div>
//         </div>
            
//             `;
//       showContainer.appendChild(div)
//   })

//   toggleSpinner(false)

// }

// //Toggele add 

// const toggleSpinner = (isloading) => {
//   const loadingCotent = document.getElementById('loading');

//   if (isloading) {
//       loadingCotent.classList.remove('d-none');
//   }
//   else {
//       loadingCotent.classList.add('d-none')
//   }
// }




// const showDetails = modal => {
//   fetch(https://openapi.programming-hero.com/api/news/category/${modal})
//       .then(res => res.json())
//       .then(data => displayShowDetails(data.data))
// }

// const displayShowDetails = data => {
//   data.forEach(data => {
//       console.log(data)

//       const modalBody = document.getElementById('modals-body');

//       modalBody.innerHTML = `

//           <img src="${data.author.img}" class="img-fluid rounded-start" alt="...">
//             <h3 class ="text-secondary pt-3"> Name : ${data.author.name ? data.author.name : 'data not Found'}  </h3>
//             <h5 class ="text-secondary pt-3"> Published date : ${data.author.published_date ? data.author.published_date : 'data not Found'}  </h5>
//             <p class="card-text"> Details : ${data.details.length > 100 ? data.details.slice(0, 100) + '...' : data.details}.</p>
//           `;
//   })

// }



// loadCatgory()


// // const showDispl = () => {

// //     const bloge = document.getElementById('blog')
// //     if (isloading.length > 0) {
// //         bloge.classList.remove('d-none');

// //         bloge.innerText = bloge
// //     }

