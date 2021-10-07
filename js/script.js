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
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author',
    optTagsListSelector = '.tags.list',
    optCloudClassCount = 5,
    optCloudClassPrefix = 'tag-size-';


  // eslint-disable-next-line no-inner-declarations
  function generateTitleLinks(customSelector = ''){
    //console.log(customSelector);

    /* [DONE] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    let html = '';
    //console.log(html);

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

      html = html + linkHTML;
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }

  }

  generateTitleLinks();

  const calculateTagsParams = function(tags){

    /*create a variable with object values */
    let numbersOfTags = Object.values(tags);

    /* find min value */
    const min = Math.min(...numbersOfTags);

    /* find max value */
    const max = Math.max(...numbersOfTags);

    /* create a new variable countTags with an object */
    let tagsValues = {min, max};

    return tagsValues;
  };

  const calculateTagClass = function(count, params){
    const classNumber = Math.floor( ( (count - params.min) / (params.max - params.min) ) * (optCloudClassCount - 1) + 1 );
    return optCloudClassPrefix + classNumber;
  };

  const generateTags = function(){

    /* [DONE] create a new variable allTags with an empty object */
    let allTags = {};

    /* [DONE] find all articles */

    /* [DONE] START LOOP: for every article: */
    const articles = document.querySelectorAll(optArticleSelector);
    for(let article of articles){

      /* [DONE] find tags wrapper */
      const postTags = article.querySelector(optArticleTagsSelector);
      //console.log (postTags);

      /* [DONE] make html variable with empty string */
      let html = '';
      //console.log(html);

      /* [DONE] get tags from data-tags attribute */
      const getTags = article.getAttribute('data-tags');
      //console.log (getTags);

      /* [DONE] split tags into array */
      const splitTags = getTags.split(' ');
      //console.log (splitTags);

      /* [DONE] START LOOP: for each tag */
      for(let tag of splitTags){

        /* [DONE] generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';
        //console.log(linkHTML);

        /* [DONE] add generated code to html variable */
        html = html + linkHTML;

        /* [DONE] check if this link is NOT already in allTags */
        if(!allTags[tag]) {

          /* [DONE] add generated code to allTags array */
          allTags[tag] = 1;
        } else {
          allTags[tag]++;
        }

      /* [DONE] END LOOP: for each tag */
      }

      /* [DONE] insert HTML of all the links into the tags wrapper */
      postTags.innerHTML = html;

    /* [DONE] END LOOP: for every article: */
    }

    /* [DONE] find list of tags in right column */
    const tagList = document.querySelector('.tags');

    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams:', tagsParams);

    /* [DONE] create variable for all links HTML code */
    let allTagsHTML = '';

    /* [DONE] START LOOP: for each tag in allTags: */
    for(let tag in allTags){

      /* [DONE] generate code of a link and add it to allTagsHTML */
      allTagsHTML += '<li><a href="#tag-' + tag + '" class="' + calculateTagClass(allTags[tag], tagsParams) + '">' + tag + ' (' + allTags[tag] + ') </a></li> ';

    /* [DONE] END LOOP: for each tag in allTags: */
    }

    /*[DONE] add HTML from allTagsHTML to tagList */
    tagList.innerHTML = allTagsHTML;
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


  const generateAuthors = function() {

    /* [DONE] find all articles */

    /* [DONE] START LOOP: for every article: */
    const articles = document.querySelectorAll(optArticleSelector);
    for(let article of articles){

      /* [DONE] find authors wrapper */
      const postAuthor = article.querySelector(optArticleAuthorSelector);
      //console.log(postAuthor);

      /* [DONE] make html variable with empty string */
      let html = '';

      /* [DONE] get author from data-author attribute */
      const getAuthor = article.getAttribute('data-author');
      //console.log(getAuthor);

      /* [DONE] generate HTML of the link */

      const linkHTML = 'by <a href="#author-' + getAuthor + '">' + getAuthor + '</a>';
      //console.log(linkHTML);

      /* [DONE] add generated code to html variable */
      html = html + linkHTML;

      /* [DONE] insert HTML of all the links into the authors wrapper */
      postAuthor.innerHTML = html;

    /* [DONE] END LOOP: for every article: */
    }
  };

  generateAuthors ();


  const authorClickHandler = function(event){

    /* [DONE] prevent default action for this event */
    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* [DONE] make a new constant "author" and extract author from the "href" constant */
    const author = href.replace('#author-', '');
    console.log(author);

    /* [DONE] find all author links with class active */
    const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');

    /* [DONE] START LOOP: for each active author link */
    for (let activeAuthor of activeAuthors){

      /* [DONE] remove class active */
      activeAuthor.classList.remove('active');

    /* [DONE] END LOOP: for each active author link */
    }

    /* [DONE] find all author links with "href" attribute equal to the "href" constant */
    const authorLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* [DONE] START LOOP: for each found author link */
    for(let authorLink of authorLinks){

      /* [DONE] add class active */
      authorLink.classList.add('active');

    /* [DONE] END LOOP: for each found author link */
    }

    /* [DONE] execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author="' + author + '"]');
  };


  const addClickListenersToAuthors = function(){
    /* [DONE] find all links to authors */
    const linksToAuthors = document.querySelectorAll('a[href^="#author-"]');

    /* [DONE] START LOOP: for each link */
    for(let linkToAuthor of linksToAuthors){

      /* [DONE] add authorClickHandler as event listener for that link */
      linkToAuthor.addEventListener('click', authorClickHandler);

    /* [DONE] END LOOP: for each link */
    }
  };

  addClickListenersToAuthors();
}