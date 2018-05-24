let gitHubAPI = 'https://api.github.com/search/users?q=';
let inputValue = document.querySelector("#search-input").value;
let searchName = gitHubAPI + inputValue;

var request = new XMLHttpRequest();
request.open('GET', searchName, true);

request.onload = function() {
if (request.status >= 200 && request.status < 400) {
// Success!
let github = JSON.parse(request.responseText);


console.log(github);



} else {

}
};

request.onerror = function() {
};

request.send();
