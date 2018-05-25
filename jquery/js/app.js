"use strict";

$(document).keypress((event) => {

    if (event.keyCode == 13) {
        event.preventDefault();
        const gitHubAPI = "https://api.github.com/search/users?q=";
        const inputValue = $("#search-input").val();
        const searchName = gitHubAPI + inputValue;

        var request = $.ajax({
            url: searchName,
            method: "GET",
        });
        request.done(function(users) {
            const usersList = users.items;

            usersList.forEach(user => {
                $(".row").append("<div class='col-4'>" +
                    "<div class='m-2'>" +
                    "<img class='card-img-top' src='" + user.avatar_url + "' alt='Card'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>" + user.login + "</h5>" +
                    "</div>" +
                    "</div>" +
                    "</div>")
            });


        });
        request.fail(function(jqXHR, textStatus) {
            alert("Request failed: " + textStatus);

        });
    }
});