
var express = require('express');
var request = require('request');
var app = express();
var a ;


//var r = request.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=b1f49256aae047e5bca8693406f955e3');
//console.log(r);
request('https://newsapi.org/v1/articles?source=techcrunch&apiKey=b1f49256aae047e5bca8693406f955e3', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    a = body ;
   // console.log(response)
  }
})


app.get('/path', function(req,res){
     // res.send(a);

   var b = a.articles.prototype.map(function(v) { return { url: v.url, urlToImage: v.urlToImage, description: v.description }; });
      console.log(b);
});




app.listen(3000);

/*
//b1f49256aae047e5bca8693406f955e3


//how to send data from api to a HTML page
//Templating Engine name ejs - Helps in making fill in the blanks vala page
//har ka apna alag format hota hai jispe vo kam krta hai


//Ejs pages help in writing html 
 
//json data par map ya reduce lagega tab single array banega vo hum render krenge front end par.

*/

/* --Returned by above code
{"uri":{"protocol":"https:","slashes":true,"auth":null,"host":"newsapi.org","port":443,"hostname":"newsapi.org","hash":null,"search":"?source=techcrunch&apiKey=b1f49256aae047e5bca8693406f955e3","query":"source=techcrunch&apiKey=b1f49256aae047e5bca8693406f955e3","pathname":"/v1/articles","path":"/v1/articles?source=techcrunch&apiKey=b1f49256aae047e5bca8693406f955e3","href":"https://newsapi.org/v1/articles?source=techcrunch&apiKey=b1f49256aae047e5bca8693406f955e3"},"method":"GET","headers":{}}
*/

/* --Returned when entered in Browser
{"status":"ok","source":"techcrunch","sortBy":"top","articles":[{"author":"Darrell Etherington","title":"Trump’s manufacturing council includes Elon Musk, Michael Dell and Mark Fields","description":"Donald Trump's White House administration has revealed the full membership of its manufacturing council (via Steve Kopack), which he assigned Dow Chemical CEO..","url":"http://social.techcrunch.com/2017/01/27/trumps-manufacturing-council-includes-elon-musk-michael-dell-and-mark-fields/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/01/gettyimages-632479774.jpg?w=764&h=400&crop=1","publishedAt":"2017-01-27T14:29:26Z"},{"author":"Matthew Lynley","title":"Alphabet’s bets beyond search are starting to pay off","description":"Google reported mixed earnings for its fourth quarter today — but we're starting to see some flashes of improvement in its \"other bets\" category, which is..","url":"http://social.techcrunch.com/2017/01/26/alphabets-bets-beyond-search-are-starting-to-look-better/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2016/07/a3c4057e7d804c79b4bfb3278f4afced.jpg?w=764&h=400&crop=1","publishedAt":"2017-01-26T20:09:05Z"},{"author":"Josh Constine","title":"This Snapchat Spectacles case melted while charging","description":"Galaxy Note 7napchat? One owner of Snap Inc's Spectacles camera-glasses had a similar experience. They tell TechCrunch that after charging the Spectacles case..","url":"http://social.techcrunch.com/2017/01/26/melted-spectacles-case/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/01/melted-snapchat-case.jpg?w=764&h=400&crop=1","publishedAt":"2017-01-26T18:44:52Z"},{"author":"Natasha Lomas","title":"Trump order strips privacy rights from non-U.S. citizens, could nix EU-US data flows","description":"An Executive Order signed by U.S. President Donald Trump in his first few days in office could jeopardize a six-month-old data transfer framework that enables..","url":"http://social.techcrunch.com/2017/01/26/trump-order-strips-privacy-rights-from-non-u-s-citizens-could-nix-eu-us-data-flows/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/01/gettyimages-632212696.jpg?w=764&h=400&crop=1","publishedAt":"2017-01-26T15:41:33Z"}]}

*/