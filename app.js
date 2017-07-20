/**
 * Created by Ritesh on 7/19/2017.
 */
const  express =require('express');
const app =express();
const request = require('request');


app.set("view engine","ejs");

app.get('/',function (req,res) {
    res.render('index')
})

app.get('/results',function (req,res) {

    var search =req.query.search;
    console.log(search)
    request('http://omdbapi.com/?s='+search+'&apikey=thewdb',function (error,response,body) {
        if(!error && response.statusCode==200)
        {
                var data = JSON.parse(body);
                res.render('results',{data:data})


        }
    })

})



app.listen(8000,function () {
    console.log('Server is Running at the http://localhost8000')
})

