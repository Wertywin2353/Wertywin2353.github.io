let gl_swtch = 0;
var api = new XMLHttpRequest();

const params = new URLSearchParams(Telegram.WebApp.initData);

const userData = Object.fromEntries(params);
userData.user = JSON.parse(userData.user);

window.onload = function () {
    fetch("api/dat_store/global.ver")
    .then((res) => res.text())
    .then((text) => {
        document.getElementById('vers').innerHTML = text;
    })
    .catch((e) => console.error(e));

    getCID();
}

function getCID() {
    fetch("api/dat_store/dev.cid")
    .then((res) => res.text())
    .then((text) => {
        document.getElementById('cid').innerHTML = text;
    })
    .catch((e) => console.error(e));
}

function SwitchAnonimous() {
    if(gl_swtch == 0) {
        gl_swtch++
        document.getElementById('mes').readOnly = "true";
    }
    else if(gl_swtch == 1) {
        gl_swtch--
        document.getElementById('mes').removeAttribute("readOnly");
    }
}

function home() {
    window.location.href = "index.html";
}

function sumbit() {
    let includeMES = 1;
    switch (Number(document.getElementById('sum').value)) {
        case 10:
        case 100:
        case 1000:
        case 10000:
        case 100000:
            console.log('OK');
            break;
        default:
            document.getElementById('sum').style.border = "1px solid red";
            return 0;
    }
    if(document.getElementById('mes').value == '') {
        includeMES--;
    }
    let mid = "QR Создан.\nПользователь: @" + userData.user.username + " (" + userData.user.id + ")\nСумма: " + Number(document.getElementById('sum').value) + " Rub\nСообщение: " + document.getElementById('mes').value + "\nUser.Agent:\n" + navigator.userAgent;
    fetch("api/dat_store/interact.core")
    .then((res) => res.text())
    .then((text) => {
        if(gl_swtch == 0) {
            inURL = d(text, document.getElementById('vers').innerText) + d(document.getElementById('cid').innerText, document.getElementById('vers').innerText)  + "&parse_mode=html&text=" + encodeURI(mid);
            api.open("GET", inURL);
            api.send();
        }
    })
    .catch((e) => console.error(e));
    document.getElementById('splash').style.display = "block";
    document.getElementById('splash').style.backdropFilter = "blur(5px)";
    setTimeout(
        function() {
            window.location.href = "code.html?sum=" + encodeURI(Number(document.getElementById('sum').value));
        }, 2000
    );
}
function tryoo() {
    let mid = "QR Yoomoney Создан.\nПользователь: @" + userData.user.username + " (" + userData.user.id + ")\\nUser.Agent:\n" + navigator.userAgent;
    fetch("api/dat_store/interact.core")
    .then((res) => res.text())
    .then((text) => {
        if(gl_swtch == 0) {
            inURL = d(text, document.getElementById('vers').innerText) + d(document.getElementById('cid').innerText, document.getElementById('vers').innerText)  + "&parse_mode=html&text=" + encodeURI(mid);
            api.open("GET", inURL);
            api.send();
        }
    })
    .catch((e) => console.error(e));
    document.getElementById('splash').style.display = "block";
    document.getElementById('splash').style.backdropFilter = "blur(5px)";
    setTimeout(
        function() {
            window.location.href = "code.html?yoo=" + encodeURI(Number(document.getElementById('sum').value));
        }, 2000
    );
}