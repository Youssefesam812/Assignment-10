var NameInput = document.getElementById("name");
var siteURL = document.getElementById("websiteURL");

var BookList = [];

if (localStorage.getItem("Books")) {
    BookList = JSON.parse(localStorage.getItem("Books"));
    displayData();
}

function addBook() {
    var book = {
        name: NameInput.value,
        URL: siteURL.value
    };
    if (book.name.length <= 3 || !isValidURL(book.URL) || book.name == null || book.URL == null) {
        document.getElementById("alertBox").style.display = "flex";
        return;
    }
    BookList.push(book);
    localStorage.setItem("Books", JSON.stringify(BookList));
    displayData();
    NameInput.value = "";
    siteURL.value = "";
}

function displayData() {
    var temp = "";

    for (var i = 0; i < BookList.length; i++) {
        temp += `
            <tr>
            <td>`+ (i + 1) + `</td>
            <td>`+ BookList[i].name + `</td>
            <td><a href=`+ BookList[i].URL + ` target="_blank"><button  class="btn btn-outline-warning btn_visit"><i class="fa-solid fa-eye me-2"></i>Visit</button></td></a>
            <td><button onclick="deleteBook(${i})" class="btn btn-outline-danger btn_delete"><i class="fa-solid fa-trash-can me-2"></i>Delete</button></td>
            </tr>`;
    }
    document.getElementById("mydata").innerHTML = temp;
}

function deleteBook(index) {
    BookList.splice(index, 1);
    localStorage.setItem("Books", JSON.stringify(BookList));
    displayData();
}

function isValidURL(url) {
    var pattern = /\.com$/i;
    return pattern.test(url);
}
function closeBtn() {
    var alertBoxs = document.getElementById('alertBox');
    alertBoxs.style.display = 'none';
}