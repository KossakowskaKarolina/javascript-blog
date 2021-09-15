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
    //articles = document.querySelectorAll(optArticleSelector + customSelector),
    optArticleTagsSelector = '.post-tags .list';


  // eslint-disable-next-line no-inner-declarations
  function generateTitleLinks(customSelector = ''){
    console.log(customSelector);

    /* [DONE] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    let html = '';
    console.log(html);

    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
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

  }

  generateTitleLinks();

  const generateTags = function(){

    /* find all articles */

    /* START LOOP: for every article: */
    const articles = document.querySelectorAll(optArticleSelector);
    for(let article of articles){

      /* [DONE] find tags wrapper */

      const postTags = article.querySelector(optArticleTagsSelector);
      console.log (postTags);

      /* [DONE] make html variable with empty string */

      let html = '';
      console.log(html);

      /* [DONE] get tags from data-tags attribute */

      const getTags = article.getAttribute('data-tags');
      console.log (getTags);

      /* [DONE] split tags into array */

      const splitTags = getTags.split(' ');
      console.log (splitTags);

      /* [DONE] START LOOP: for each tag */

      for(let tag of splitTags){

        /* [DONE] generate HTML of the link */

        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';
        console.log(linkHTML);

        /* [DONE] add generated code to html variable */

        html = html + linkHTML;

      /* [DONE] END LOOP: for each tag */
      }

      /* [DONE] insert HTML of all the links into the tags wrapper */

      postTags.innerHTML = html;

    /* [DONE] END LOOP: for every article: */
    }
  };

  generateTags();

  const tagClickHandler = function(event){

    /* [DONE] prevent default action for this event */

    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');
    //console.log(href);

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');
    //console.log(tag);

    /* [DONE] find all tag links with class active */

    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    //console.log(activeTags);

    /* [DONE] START LOOP: for each active tag link */

    for(let activeTag of activeTags){

      /* [DONE] remove class active */

      activeTag.classList.remove('active');

    /* [DONE] END LOOP: for each active tag link */
    }

    /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

    const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* [DONE] START LOOP: for each found tag link */

    for(let tagLink of tagLinks){

      /* [DONE] add class active */

      tagLink.classList.add('active');

    /* [DONE] END LOOP: for each found tag link */
    }
    /* [DONE] execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');
  };

  const addClickListenersToTags = function(){

    /* [DONE] find all links to tags */

    const linksToTags = document.querySelectorAll('a[href^="#tag-"]');

    /* [DONE] START LOOP: for each link */

    for(let linkToTag of linksToTags){

      /* add tagClickHandler as event listener for that link */
      linkToTag.addEventListener('click', tagClickHandler);

    /* [DONE] END LOOP: for each link */
    }
  };

  addClickListenersToTags();

}