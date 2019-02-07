// powered by newsapi.org
// brad's apikey: d84f664229aa40cea4a6897f9fae83cf

// this function will query the newsapi.org for stories based on the 'search' phrase or keywords
// this function takes two arguments
// search - this is the string to search for; if it is empty, this function currently does nothing
//    example: "tom brady"
// elementId - this is the id of the DOM element that you want to append the news stories onto
//    example: "#news-results"
// currently hard-coded to return only 5 articles
// if the search field is empty, the function just searches for the 5 top stories from the api



var searchNewsApi = function(search, elementId) {
  
  if (search.length > 0 && search !== "") {
  
    // build the query Url
    // use the everything endpoint
    let queryUrl = `https://newsapi.org/v2/everything?`;

    // Request Parameters:

    // q
    // keywords or phrases to search for
    // complete value for q must be URL-encoded
    // encodeURIComponent()
    //=====================================================
    search = encodeURIComponent(search.trim()); //encodes URI component
    //search = encodeURIComponent(search.trim());
    //=======================================================
    queryUrl += `q=${search}`;

    // sources
    // comma seperated string of news sources or blogs to include headlines from

    // domains
    // comma seperated string of domains

    // pageSize
    // int - number of results to return per page

    // hard coding the page size to 5
    queryUrl += `&pageSize=5`;

    // page
    // int - use this to page through results

    // hard coding the page to 1
    queryUrl += `&page=1`;

    // add the apikey
    queryUrl += `&apiKey=d84f664229aa40cea4a6897f9fae83cf`;

    // console.log(queryUrl);
  
    // make the API Call
    $.ajax({
      url: queryUrl,

      success: function(data, status, xhr) {
        // handle the response
        // console.log(data);
        //====================================================
        $(elementId).append(createNewsHtml(data));
        //$(elementId).append(createNewsHtml(data));
        //====================================================
      },
      error: function(xhr, status, error) {
        // handle errors
        // TODO tell the user something went wrong and try again

        console.log(xhr);
        console.log(status);
        console.log(error);
      }
    });
  } else {
    // search field was empty
    let queryUrl = "https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=1&apiKey=d84f664229aa40cea4a6897f9fae83cf"
    // make the API Call
    $.ajax({
      url: queryUrl,

      success: function(data, status, xhr) {
        // handle the response
        // console.log(data);
        //======================================================
        //$(elementId).append(createNewsHtml(data));
        $(elementId).append(createNewsHtml(data));
        //========================================================
      },
      error: function(xhr, status, error) {
        // handle errors
        // TODO tell the user something went wrong and try again

        console.log(xhr);
        console.log(status);
        console.log(error);
      }
    });
  }
};


// this function creates some html that can be appended to the DOM
// the function requires the data from an api call to apinews.org
// this function uses bootstrap classes
var createNewsHtml = function(apiData) {
  // create a container
  let myDiv = $("<div>");
  $(myDiv).addClass("container");
  let myHtml = "";

  // create a bootstrap card for each article object
  for (let i = 0; i < apiData.articles.length; i++) {
    myHtml += createNewsCard(apiData.articles[i]);
  }

  $(myDiv).html(myHtml);

  return myDiv;
};

// this function creates the html string that will define a card for an article object
var createNewsCard = function(article) {
  return `<div class="card" style="width: 25rem; border-style: solid; border-width: 3px;">
    <img src="${article.urlToImage}" class="card-img-top" alt="${article.description}">
    <div class="card-body">
      <p class="card-text">${article.description}</p>
      <a href="${article.url}" class="btn btn-primary">Go To Full Article</a>
    </div>
  </div>`;
};
//
