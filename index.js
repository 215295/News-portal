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
    // const categoriesContainer= document.getElementById('categories-container')
    // categories.forEach(category => {
    //   console.log(category)
      // const categoryDiv=document.createElement('div')
      // categoryDiv.innerHTML=`
      // <h4>"${categories.length}" </h4>

      // `;
      // categoriesContainer.appendChild(categoryDiv);
    
    // });

   

loadcategories()
