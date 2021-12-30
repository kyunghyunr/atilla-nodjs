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
            <h1><a href="/">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="172.000000pt" height="139.000000pt" viewBox="0 0 172.000000 139.000000"
             preserveAspectRatio="xMidYMid meet">
            <metadata>
            Created by potrace 1.10, written by Peter Selinger 2001-2011
            </metadata>
            <g transform="translate(0.000000,139.000000) scale(0.050000,-0.050000)"
            fill="#000000" stroke="none">
            <path d="M1932 2379 c-32 -9 -92 -50 -134 -90 l-74 -74 -82 66 c-212 170 -491
            38 -487 -231 l1 -85 -76 0 c-184 0 -307 -170 -261 -362 42 -174 229 -341 383
            -343 45 0 51 -7 43 -52 -9 -46 -17 -50 -88 -42 -87 10 -177 -43 -176 -102 0
            -28 4 -27 23 6 34 60 56 69 168 70 l101 0 21 92 c21 90 21 91 -27 79 -193 -48
            -423 177 -402 394 16 171 157 251 332 188 43 -16 45 -14 22 28 -33 62 -13 230
            35 295 104 140 324 114 437 -53 31 -45 49 -60 49 -38 0 60 143 190 227 206
            171 32 312 -129 286 -323 l-12 -85 73 30 c185 77 379 -108 335 -320 -37 -177
            -213 -336 -337 -305 -60 15 -29 -180 32 -199 43 -14 42 -11 37 -234 -5 -182 1
            -197 62 -142 35 31 40 31 77 -3 25 -22 48 -30 57 -19 24 26 83 251 83 312 0
            76 68 129 134 106 54 -19 240 -302 215 -327 -16 -16 -57 40 -133 182 -76 143
            -176 185 -176 73 0 -75 -83 -367 -114 -401 -69 -77 23 -120 109 -51 30 24 33
            75 5 75 -38 0 -20 34 31 57 75 34 91 29 77 -27 -17 -67 15 -64 124 9 101 68
            118 50 26 -27 -37 -32 -86 -52 -125 -52 -41 -1 -79 -18 -110 -50 -34 -36 -68
            -50 -123 -50 -42 0 -80 -10 -84 -21 -13 -41 -273 -100 -327 -75 -39 18 -56 16
            -86 -11 -54 -49 -308 -53 -359 -6 -34 30 -41 31 -64 4 -30 -37 -162 -41 -196
            -7 -36 36 -53 2 -28 -54 25 -55 147 -71 225 -29 29 15 51 12 89 -13 64 -42
            275 -31 323 16 25 25 44 28 88 13 73 -26 258 11 326 64 27 22 72 39 100 39 27
            0 77 23 109 50 33 28 83 50 111 50 81 0 149 40 180 108 58 125 57 144 -6 238
            -34 49 -61 97 -61 105 0 8 -23 45 -51 82 -85 112 -249 77 -249 -53 0 -26 -14
            -98 -32 -160 l-31 -113 -84 0 -83 0 7 151 c6 131 1 159 -35 200 -70 80 -56
            130 45 157 379 101 344 763 -38 720 l-84 -10 -10 99 c-19 195 -193 327 -363
            275z m841 -1508 c-6 -17 -21 -31 -32 -31 -23 0 -29 66 -7 87 22 22 52 -21 39
            -56z"/>
            <path d="M1885 2212 c-96 -89 -86 -392 13 -392 10 0 22 -19 28 -42 22 -81 187
            -4 242 111 125 263 -86 503 -283 323z m183 -67 c9 -8 26 -15 39 -15 13 0 26
            -35 29 -78 6 -63 1 -75 -24 -65 -20 7 -40 -4 -54 -30 -26 -49 -62 -14 -43 41
            7 22 0 20 -24 -8 -31 -36 -33 -36 -23 -3 7 20 12 51 12 70 1 28 3 29 20 3 15
            -23 19 -14 20 35 0 63 17 81 48 50z"/>
            <path d="M1339 2205 c-87 -78 -57 -232 71 -360 47 -47 75 -86 62 -86 -12 -1
            -2 -10 23 -20 175 -70 291 215 158 389 -105 137 -216 165 -314 77z m209 -99
            c25 10 32 -1 32 -55 0 -37 3 -80 7 -94 3 -15 3 -20 -2 -11 -5 9 -22 5 -37 -8
            -36 -30 -64 -6 -32 26 38 38 28 59 -16 36 -35 -19 -40 -15 -40 28 0 72 22 121
            41 91 8 -14 29 -19 47 -13z"/>
            <path d="M2321 1883 c-150 -80 -172 -382 -31 -436 15 -6 23 -23 17 -39 -20
            -50 104 -33 172 24 241 203 105 592 -158 451z m157 -118 c19 -32 21 -32 23 5
            1 34 4 33 22 -10 11 -27 13 -81 5 -120 -13 -67 -15 -68 -29 -20 l-15 50 -2
            -53 c-2 -61 -40 -83 -85 -49 -34 24 -44 125 -14 144 10 6 12 19 6 29 -6 11 3
            19 21 19 18 0 27 9 20 20 -7 11 -3 20 8 20 11 0 29 -16 40 -35z"/>
            <path d="M984 1820 c-89 -84 50 -400 177 -400 10 0 13 -13 6 -30 -24 -64 124
            -37 183 34 164 195 -182 570 -366 396z m245 -141 c19 16 25 3 25 -62 0 -82 0
            -82 -34 -37 -19 25 -44 40 -56 33 -18 -12 -20 30 -5 107 1 6 12 -6 23 -26 16
            -26 28 -31 47 -15z"/>
            <path d="M1720 1790 c-41 -76 -130 -116 -230 -105 l-83 9 21 -77 c18 -67 52
            -107 52 -60 0 24 178 116 255 132 76 16 186 -15 284 -81 38 -26 70 -45 72 -42
            2 2 9 47 16 100 12 96 12 96 -32 65 -88 -62 -279 -18 -312 71 -14 38 -16 38
            -43 -12z"/>
            <path d="M1715 1621 c-228 -73 -400 -342 -317 -497 l23 -43 64 39 c78 48 131
            50 189 10 38 -27 49 -27 100 3 136 78 276 -17 228 -154 -44 -127 1 -160 106
            -77 49 39 51 45 23 77 -63 70 1 190 89 167 40 -11 42 -6 30 66 -42 242 -341
            471 -535 409z m195 -125 c44 -3 80 -17 80 -29 0 -13 21 -48 46 -77 73 -83 96
            -146 65 -176 -22 -19 -24 -18 -12 6 7 17 -1 12 -20 -10 -34 -40 -34 -39 -23 6
            8 35 5 41 -13 26 -15 -12 -36 -13 -53 -2 -15 9 -35 13 -43 8 -8 -5 -20 0 -27
            12 -7 11 -41 20 -76 20 -51 -1 -58 -5 -34 -22 24 -18 22 -19 -10 -8 -22 8 -51
            15 -65 16 -14 0 -25 14 -25 31 0 24 -7 22 -29 -8 -20 -26 -30 -30 -30 -12 -1
            22 -7 23 -29 5 -21 -18 -30 -16 -39 9 -7 18 -4 26 7 19 11 -7 20 3 20 21 0 18
            32 63 72 100 108 100 116 106 138 88 11 -9 56 -19 100 -23z"/>
            <path d="M674 1164 c-18 -20 -46 -73 -62 -119 -16 -46 -49 -110 -73 -142 -84
            -114 28 -338 146 -292 16 6 67 -21 116 -62 79 -66 96 -72 173 -61 50 6 86 3
            86 -8 0 -83 252 -97 264 -14 4 27 22 46 48 50 71 10 123 271 63 319 -84 68
            -149 -82 -96 -221 49 -131 -131 -184 -259 -77 -54 46 -76 53 -103 37 -39 -25
            -174 27 -230 89 -18 20 -53 37 -77 37 -43 0 -150 82 -150 115 0 10 23 48 51
            86 27 38 60 102 73 143 73 244 204 146 335 -249 58 -176 101 -175 101 2 0 57
            -10 78 -45 93 -27 12 -47 41 -51 74 -4 34 -16 50 -32 44 -15 -6 -40 23 -62 72
            -54 121 -150 158 -216 84z"/>
            <path d="M715 1138 c-19 -11 -35 -38 -35 -60 0 -51 -95 -238 -120 -238 -40 0
            -18 -37 44 -77 69 -43 113 -38 74 9 -36 43 -7 57 61 28 64 -26 78 -51 36 -65
            -39 -14 38 -90 119 -116 78 -26 104 -13 73 37 -11 19 -49 125 -83 235 -68 217
            -110 279 -169 247z"/>
            <path d="M1039 1079 c-57 -108 -8 -196 64 -114 l40 45 -10 -166 c-5 -91 -20
            -179 -33 -194 -49 -58 91 -173 172 -142 32 12 38 84 8 102 -27 17 -26 370 0
            370 12 0 30 -23 41 -52 29 -77 69 -48 67 50 -2 109 -12 116 -184 127 -126 8
            -148 5 -165 -26z"/>
            <path d="M1503 1079 c-36 -15 -43 -28 -31 -54 35 -73 33 -426 -2 -465 -44 -48
            6 -100 97 -100 93 0 115 30 82 108 -31 75 -20 353 17 429 39 79 -53 126 -163
            82z"/>
            <path d="M1785 1080 c-52 -22 -58 -64 -15 -100 35 -29 44 -409 10 -430 -11 -7
            -20 -30 -20 -51 0 -64 310 -59 327 6 37 136 -8 240 -54 128 -32 -76 -80 -96
            -101 -41 -20 52 -13 385 8 398 29 18 25 90 -5 90 -14 0 -43 5 -65 9 -22 5 -60
            1 -85 -9z"/>
            <path d="M2160 1070 c-21 -25 -20 -37 6 -65 34 -39 54 -359 27 -440 -25 -74
            -1 -81 150 -45 156 36 194 81 167 196 -13 54 -57 49 -67 -8 -9 -49 -41 -88
            -73 -88 -36 0 -54 336 -21 390 52 84 -123 139 -189 60z"/>
            <path d="M1693 947 c-31 -32 -13 -107 27 -107 43 0 46 7 27 75 -12 46 -29 56
            -54 32z"/>
            <path d="M2048 819 c-74 -34 -80 -43 -72 -99 8 -57 12 -59 43 -31 45 41 94 39
            119 -4 16 -27 21 -11 21 70 1 117 3 116 -111 64z"/>
            <path d="M1705 786 c-31 -12 -33 -154 -3 -210 32 -59 57 -11 58 108 0 96 -11
            117 -55 102z"/>
            </g>
            </svg>
            </a></h1>
            ${list}
            <h2>${title}</h2>
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
            <h1><a href="/">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="172.000000pt" height="139.000000pt" viewBox="0 0 172.000000 139.000000"
             preserveAspectRatio="xMidYMid meet">
            <metadata>
            Created by potrace 1.10, written by Peter Selinger 2001-2011
            </metadata>
            <g transform="translate(0.000000,139.000000) scale(0.050000,-0.050000)"
            fill="#000000" stroke="none">
            <path d="M1932 2379 c-32 -9 -92 -50 -134 -90 l-74 -74 -82 66 c-212 170 -491
            38 -487 -231 l1 -85 -76 0 c-184 0 -307 -170 -261 -362 42 -174 229 -341 383
            -343 45 0 51 -7 43 -52 -9 -46 -17 -50 -88 -42 -87 10 -177 -43 -176 -102 0
            -28 4 -27 23 6 34 60 56 69 168 70 l101 0 21 92 c21 90 21 91 -27 79 -193 -48
            -423 177 -402 394 16 171 157 251 332 188 43 -16 45 -14 22 28 -33 62 -13 230
            35 295 104 140 324 114 437 -53 31 -45 49 -60 49 -38 0 60 143 190 227 206
            171 32 312 -129 286 -323 l-12 -85 73 30 c185 77 379 -108 335 -320 -37 -177
            -213 -336 -337 -305 -60 15 -29 -180 32 -199 43 -14 42 -11 37 -234 -5 -182 1
            -197 62 -142 35 31 40 31 77 -3 25 -22 48 -30 57 -19 24 26 83 251 83 312 0
            76 68 129 134 106 54 -19 240 -302 215 -327 -16 -16 -57 40 -133 182 -76 143
            -176 185 -176 73 0 -75 -83 -367 -114 -401 -69 -77 23 -120 109 -51 30 24 33
            75 5 75 -38 0 -20 34 31 57 75 34 91 29 77 -27 -17 -67 15 -64 124 9 101 68
            118 50 26 -27 -37 -32 -86 -52 -125 -52 -41 -1 -79 -18 -110 -50 -34 -36 -68
            -50 -123 -50 -42 0 -80 -10 -84 -21 -13 -41 -273 -100 -327 -75 -39 18 -56 16
            -86 -11 -54 -49 -308 -53 -359 -6 -34 30 -41 31 -64 4 -30 -37 -162 -41 -196
            -7 -36 36 -53 2 -28 -54 25 -55 147 -71 225 -29 29 15 51 12 89 -13 64 -42
            275 -31 323 16 25 25 44 28 88 13 73 -26 258 11 326 64 27 22 72 39 100 39 27
            0 77 23 109 50 33 28 83 50 111 50 81 0 149 40 180 108 58 125 57 144 -6 238
            -34 49 -61 97 -61 105 0 8 -23 45 -51 82 -85 112 -249 77 -249 -53 0 -26 -14
            -98 -32 -160 l-31 -113 -84 0 -83 0 7 151 c6 131 1 159 -35 200 -70 80 -56
            130 45 157 379 101 344 763 -38 720 l-84 -10 -10 99 c-19 195 -193 327 -363
            275z m841 -1508 c-6 -17 -21 -31 -32 -31 -23 0 -29 66 -7 87 22 22 52 -21 39
            -56z"/>
            <path d="M1885 2212 c-96 -89 -86 -392 13 -392 10 0 22 -19 28 -42 22 -81 187
            -4 242 111 125 263 -86 503 -283 323z m183 -67 c9 -8 26 -15 39 -15 13 0 26
            -35 29 -78 6 -63 1 -75 -24 -65 -20 7 -40 -4 -54 -30 -26 -49 -62 -14 -43 41
            7 22 0 20 -24 -8 -31 -36 -33 -36 -23 -3 7 20 12 51 12 70 1 28 3 29 20 3 15
            -23 19 -14 20 35 0 63 17 81 48 50z"/>
            <path d="M1339 2205 c-87 -78 -57 -232 71 -360 47 -47 75 -86 62 -86 -12 -1
            -2 -10 23 -20 175 -70 291 215 158 389 -105 137 -216 165 -314 77z m209 -99
            c25 10 32 -1 32 -55 0 -37 3 -80 7 -94 3 -15 3 -20 -2 -11 -5 9 -22 5 -37 -8
            -36 -30 -64 -6 -32 26 38 38 28 59 -16 36 -35 -19 -40 -15 -40 28 0 72 22 121
            41 91 8 -14 29 -19 47 -13z"/>
            <path d="M2321 1883 c-150 -80 -172 -382 -31 -436 15 -6 23 -23 17 -39 -20
            -50 104 -33 172 24 241 203 105 592 -158 451z m157 -118 c19 -32 21 -32 23 5
            1 34 4 33 22 -10 11 -27 13 -81 5 -120 -13 -67 -15 -68 -29 -20 l-15 50 -2
            -53 c-2 -61 -40 -83 -85 -49 -34 24 -44 125 -14 144 10 6 12 19 6 29 -6 11 3
            19 21 19 18 0 27 9 20 20 -7 11 -3 20 8 20 11 0 29 -16 40 -35z"/>
            <path d="M984 1820 c-89 -84 50 -400 177 -400 10 0 13 -13 6 -30 -24 -64 124
            -37 183 34 164 195 -182 570 -366 396z m245 -141 c19 16 25 3 25 -62 0 -82 0
            -82 -34 -37 -19 25 -44 40 -56 33 -18 -12 -20 30 -5 107 1 6 12 -6 23 -26 16
            -26 28 -31 47 -15z"/>
            <path d="M1720 1790 c-41 -76 -130 -116 -230 -105 l-83 9 21 -77 c18 -67 52
            -107 52 -60 0 24 178 116 255 132 76 16 186 -15 284 -81 38 -26 70 -45 72 -42
            2 2 9 47 16 100 12 96 12 96 -32 65 -88 -62 -279 -18 -312 71 -14 38 -16 38
            -43 -12z"/>
            <path d="M1715 1621 c-228 -73 -400 -342 -317 -497 l23 -43 64 39 c78 48 131
            50 189 10 38 -27 49 -27 100 3 136 78 276 -17 228 -154 -44 -127 1 -160 106
            -77 49 39 51 45 23 77 -63 70 1 190 89 167 40 -11 42 -6 30 66 -42 242 -341
            471 -535 409z m195 -125 c44 -3 80 -17 80 -29 0 -13 21 -48 46 -77 73 -83 96
            -146 65 -176 -22 -19 -24 -18 -12 6 7 17 -1 12 -20 -10 -34 -40 -34 -39 -23 6
            8 35 5 41 -13 26 -15 -12 -36 -13 -53 -2 -15 9 -35 13 -43 8 -8 -5 -20 0 -27
            12 -7 11 -41 20 -76 20 -51 -1 -58 -5 -34 -22 24 -18 22 -19 -10 -8 -22 8 -51
            15 -65 16 -14 0 -25 14 -25 31 0 24 -7 22 -29 -8 -20 -26 -30 -30 -30 -12 -1
            22 -7 23 -29 5 -21 -18 -30 -16 -39 9 -7 18 -4 26 7 19 11 -7 20 3 20 21 0 18
            32 63 72 100 108 100 116 106 138 88 11 -9 56 -19 100 -23z"/>
            <path d="M674 1164 c-18 -20 -46 -73 -62 -119 -16 -46 -49 -110 -73 -142 -84
            -114 28 -338 146 -292 16 6 67 -21 116 -62 79 -66 96 -72 173 -61 50 6 86 3
            86 -8 0 -83 252 -97 264 -14 4 27 22 46 48 50 71 10 123 271 63 319 -84 68
            -149 -82 -96 -221 49 -131 -131 -184 -259 -77 -54 46 -76 53 -103 37 -39 -25
            -174 27 -230 89 -18 20 -53 37 -77 37 -43 0 -150 82 -150 115 0 10 23 48 51
            86 27 38 60 102 73 143 73 244 204 146 335 -249 58 -176 101 -175 101 2 0 57
            -10 78 -45 93 -27 12 -47 41 -51 74 -4 34 -16 50 -32 44 -15 -6 -40 23 -62 72
            -54 121 -150 158 -216 84z"/>
            <path d="M715 1138 c-19 -11 -35 -38 -35 -60 0 -51 -95 -238 -120 -238 -40 0
            -18 -37 44 -77 69 -43 113 -38 74 9 -36 43 -7 57 61 28 64 -26 78 -51 36 -65
            -39 -14 38 -90 119 -116 78 -26 104 -13 73 37 -11 19 -49 125 -83 235 -68 217
            -110 279 -169 247z"/>
            <path d="M1039 1079 c-57 -108 -8 -196 64 -114 l40 45 -10 -166 c-5 -91 -20
            -179 -33 -194 -49 -58 91 -173 172 -142 32 12 38 84 8 102 -27 17 -26 370 0
            370 12 0 30 -23 41 -52 29 -77 69 -48 67 50 -2 109 -12 116 -184 127 -126 8
            -148 5 -165 -26z"/>
            <path d="M1503 1079 c-36 -15 -43 -28 -31 -54 35 -73 33 -426 -2 -465 -44 -48
            6 -100 97 -100 93 0 115 30 82 108 -31 75 -20 353 17 429 39 79 -53 126 -163
            82z"/>
            <path d="M1785 1080 c-52 -22 -58 -64 -15 -100 35 -29 44 -409 10 -430 -11 -7
            -20 -30 -20 -51 0 -64 310 -59 327 6 37 136 -8 240 -54 128 -32 -76 -80 -96
            -101 -41 -20 52 -13 385 8 398 29 18 25 90 -5 90 -14 0 -43 5 -65 9 -22 5 -60
            1 -85 -9z"/>
            <path d="M2160 1070 c-21 -25 -20 -37 6 -65 34 -39 54 -359 27 -440 -25 -74
            -1 -81 150 -45 156 36 194 81 167 196 -13 54 -57 49 -67 -8 -9 -49 -41 -88
            -73 -88 -36 0 -54 336 -21 390 52 84 -123 139 -189 60z"/>
            <path d="M1693 947 c-31 -32 -13 -107 27 -107 43 0 46 7 27 75 -12 46 -29 56
            -54 32z"/>
            <path d="M2048 819 c-74 -34 -80 -43 -72 -99 8 -57 12 -59 43 -31 45 41 94 39
            119 -4 16 -27 21 -11 21 70 1 117 3 116 -111 64z"/>
            <path d="M1705 786 c-31 -12 -33 -154 -3 -210 32 -59 57 -11 58 108 0 96 -11
            117 -55 102z"/>
            </g>
            </svg>
            </a></h1>
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
app.listen(3001);
