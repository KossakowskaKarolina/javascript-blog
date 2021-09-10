{'use strict';
/*
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
   */

  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);
  
    /* [DONE] remove class 'active' from all article links  */
  
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }   

    /* [DONE] add class 'active' to the clicked link */
  
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
  
    const activeArticles = document.querySelectorAll('article.active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }   

    /* [DONE] get 'href' attribute from the clicked link */
  
    const getAttribute = clickedElement.getAttribute('href'); 
    console.log(getAttribute);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  
    const getArticle = document.querySelector(getAttribute);
    console.log(getArticle);

    /* [DONE] add class 'active' to the correct article */ 

    getArticle.classList.add('active');

  }

  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  articles = document.querySelectorAll(optArticleSelector);

function generateTitleLinks(){

  /* [DONE] remove contents of titleList */

  function clearMessages(){
    document.querySelector(optTitleListSelector).innerHTML = '';
  }

  clearMessages();

  /* for each article */

  for(let article of articles){

    /* get the article id */
    
    const articleId = article.getAttribute('id');
    console.log(articleId);

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

  }
}

generateTitleLinks();


}