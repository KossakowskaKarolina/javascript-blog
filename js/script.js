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

  };




  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    articles = document.querySelectorAll(optArticleSelector);


  const generateTitleLinks = function (){

    /* [DONE] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    let html = '';
    console.log(html);

    /* [DONE] for each article */

    for(let article of articles){

      /* [DONE] get the article id */

      const articleId = article.getAttribute('id');

      /* [DONE] find the title element */

      //const title = article.querySelector(optTitleSelector);

      /* [DONE] get the title from the title element */

      const getTitle = article.querySelector(optTitleSelector).innerHTML;

      /* [DONE] create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + getTitle + '</span></a></li>';

      /* [DONE] insert link into titleList */

      //const link = document.createElement('a');
      //link.innerHTML = linkHTML;
      //document.querySelector(optTitleListSelector).appendChild(link);

      html = html + linkHTML;

      //titleList.insertAdjacentHTML('afterend', linkHTML);

    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }

  };

  generateTitleLinks();


}