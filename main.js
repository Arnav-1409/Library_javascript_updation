function loadCategory(arg) {
    var xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", 'books.json', true);
    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(xhttp.responseText);
            var books = responseData.book;
            renderHTML(books, arg);
        }
    };
    xhttp.send(null);
}

function renderHTML(books, arg) {
    var htmlStr = '';

    for (var i = 0; i < books.length; i++) {
        if ( !arg || books[i].category === arg) {
            htmlStr += "<div class='row2'>";
            htmlStr += "<div class='column2'>" + books[i].name + "</div>";
            htmlStr += "<div class='column2'>" + books[i].description + "</div>";
            htmlStr += "<div class='column2'>" + books[i].category + "</div>";
            htmlStr += "</div>";
        }
    }
    document.getElementById('content').innerHTML = htmlStr;
    htmlStr = '';

}

