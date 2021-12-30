var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
    if(queryData.id === undefined){
      fs.readdir('./data/Menu_data', function(error, filelist){
        var list ='<ul>';
        var i = 0;
        while(i < filelist.length){
          list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i = i + 1;
        }
        list = list+'</ul>';
        fs.readFile(`data/Main/Main_display`, 'utf8', function(err, description){
          var title = 'Welcome';
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>Atilla - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">ATILLA</a></h1>
            ${list}
            <p>${description}</p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      })
    } else {
      fs.readdir('./data/Menu_data', function(error, filelist){
        var list ='<ul>';
        var i = 0;
        while(i < filelist.length){
          list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i = i + 1;
        }
        list = list+'</ul>';
        fs.readFile(`data/Menu_data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>Atilla - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">ATILLA</a></h1>
            ${list}
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else {
    response.writeHead(404);
    response.end('Not found');
  }


});
app.listen(80);
