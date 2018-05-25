document.querySelector("#search-input").addEventListener('keypress', (event) => {

    if (event.which == 13 || event.keyCode == 13) {

        const gitHubAPI = 'https://api.github.com/search/users?q=';
        const inputValue = document.querySelector("#search-input").value;
        const searchName = gitHubAPI + inputValue;
        const row = document.querySelector(".row");
        const card = "<div class='card col-4'>";

        const request = new XMLHttpRequest();
        request.open('GET', searchName, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                const users = JSON.parse(request.responseText);
                const usersList = users.items

                usersList.forEach(users => {
                    card += "<img class='card-img-top' scr='" + users.avatar_url + "' alt='Card'>";
                    card += "<div class='card-body'>";
                    card += "<h5 class='card-title'>" + users.login + "</h5>"
                    card += "</div>";
                    card += "</div>";
                    row.innerHTML = card;
                });

            } else {
                alert("Error")
            }
        };
        request.onerror = function() {};
        request.send();

        return false;
    }

    return true;
});