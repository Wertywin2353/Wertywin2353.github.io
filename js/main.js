const params = new URLSearchParams(Telegram.WebApp.initData);
let OnlineCheck = new Date();
const userData = Object.fromEntries(params);
userData.user = JSON.parse(userData.user);
let username = userData.user.username;
let clickSFX = new Audio("./click.mp3");
clickSFX.volume = 0.2;
let GlobalDisplay = 0;

window.onload = function () {
    let time = OnlineCheck.getHours();
    setTimeout(
        function () {
            if(time <= 14) {
                document.getElementById("Online_Ind").style.color = "red";
                document.getElementById("Notify").firstChild.data = "Offline";
            }
            else {
                document.getElementById("Online_Ind").style.color = "greenyellow";
                document.getElementById("Notify").firstChild.data = "Online";
            }
        }, 1000
    );
    document.getElementById("user").firstChild.data = username;
}

function order(count, OrderButton) {
    clickSFX.play();
    OrderButton.style.border = "2px solid goldenrod";
    if(count == 100) {
        setTimeout(
            function () {
                window.location.href = "order.html?purshare=100G&user=" + username;
            }, 300
        );
    }
    else if(count == 500) {
        setTimeout(
            function () {
                window.location.href = "order.html?purshare=500G&user=" + username;
            }, 500
        );
    }
    else if(count == 1000) {
        setTimeout(
            function () {
                window.location.href = "order.html?purshare=1000G&user=" + username;
            }, 500
        );
    }
    else if(count == 3000) {
        setTimeout(
            function () {
                window.location.href = "order.html?purshare=3000G&user=" + username;
            }, 500
        );
    }
    else if(count == 52) {
        setTimeout(
            function () {
                window.location.href = "order.html?purshare=GoldPass&user=" + username;
            }, 500
        );
    }

}

function showPopup(status) {
    let popup = document.getElementById("Popup");
    if(GlobalDisplay == 0) {
        popup.style.display = "block";
        GlobalDisplay++;
        status.style.background = "rgba(255, 255, 255, 0.178)";
    }
    else if(GlobalDisplay == 1) {
        popup.style.display = "none";
        GlobalDisplay--;
        status.style.background = "transparent";
    }

}

function TryDebug() {
    if(username == "Wertywin2353") {
        window.location.href = "admtool.html";
    }
    else { return false; }
}