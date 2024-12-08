const params = new URLSearchParams(Telegram.WebApp.initData);

const userData = Object.fromEntries(params);
userData.user = JSON.parse(userData.user);
const {
    bg_color,
    text_color,
    hint_color,
    button_color,
    button_text_color,
    secondary_bg_color,
} = Telegram.WebApp.themeParams;
let tester = new Image();
tester.src = userData.user.photo_url;

window.onload = function () {
    checkSubscription()
    fetch("api/dat_store/global.ver")
    .then((res) => res.text())
    .then((text) => {
        document.getElementById('ver').innerHTML = text;
    })
    .catch((e) => console.error(e));
    document.getElementById('userpic').style.scale = 0.9;
    if(userData.user.is_premium == true) {
        document.getElementById('premium').style.display = "inline";
    }
    document.getElementById('username').innerHTML = "@" + userData.user.username;
    document.getElementById('userid').innerHTML = userData.user.id;
    setTimeout(
        function () {
            document.getElementById('userpic').style.scale = 1;
            document.getElementById('userpic').setAttribute('src', userData.user.photo_url);
        }, 2000
    );
    if(document.getElementById('low') != undefined) {
        fetch("api/payment-id/" + userData.user.id + ".dhistory")
        .then((res) => res.text())
        .then((text) => {
        let arr = text.split(';');
        let i = 0;
        document.getElementById('nothing-here').innerHTML = "";
        while(i < arr.length) {
            let pre = String(arr[i]);
            console.log(arr[i]);
            let data = pre.split(' ');
            if(data[0] == "Stars") {
                document.getElementById('nothing-here').innerHTML = document.getElementById('nothing-here').innerHTML + "<br><div id='window' style='text-align: left; width: 90%;'>" + "<h1 style='float: right;'>" + data[2] + "<img src='media/adaptive-premium.webp' width='35' style='position: relative; top: 5.5px'></h1>" + "<h3>Донат №" + (i + 1) + "</h3><span style='opacity: 80%;'>" + data[0] + " ● " + data[1] + "</div>";
            }
            else {
                document.getElementById('nothing-here').innerHTML = document.getElementById('nothing-here').innerHTML + "<br><div id='window' style='text-align: left; width: 90%;'>" + "<h1 style='float: right;'>" + data[2] + "₽</h1>" + "<h3>Донат №" + (i + 1) + "</h3><span style='opacity: 80%;'>" + data[0] + " ● " + data[1] + "</div>";
            }
            i++;
        }
        })
        .catch((e) => console.error('Donation history not exist.' + e));




        document.getElementById('low').style.fill = button_color;
        console.log('filled: ' + button_color);
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: 'User id: ' + userData.user.id, 
            width: 256,
            height: 256,
            colorDark: button_color,
            colorLight: "transparent",
            correctLevel: QRCode.CorrectLevel.H,
            // 2192
        });
    }
}

function notloadedPIC(pic) {
    pic.setAttribute('src', 'media/user.png');
}

function showUserQR() {
    document.getElementById('QR-Splash').style.display = "block";
    document.getElementById('id-place').innerHTML = userData.user.id;
}

function checkSubscription() {
    Telegram.WebApp.MainButton.setText('Проверка...'); //  Изменяем текст кнопки во время проверки
  
    Telegram.WebApp.sendData('check_subscription');
  
    Telegram.WebApp.onEvent('subscription_status', (status) => {
      if (status === 'subscribed') {
        console.log('Подписан!');
        Telegram.WebApp.MainButton.setText('Вы подписаны!');
        //  Разблокируем функционал
      } else if (status === 'not_subscribed') {
        console.log('Не подписан!');
        Telegram.WebApp.MainButton.setText('Подписаться!');
        Telegram.WebApp.showAlert(
            'Для продолжения, пожалуйста, подпишитесь на канал!',
            'https://t.me/Wertywin2353Life' // Ссылка на ваш канал
        );
  
        Telegram.WebApp.MainButton.onClick(() => {
          Telegram.WebApp.openLink('https://t.me/Wertywin2353Life'); // Открываем ссылку на канал при нажатии кнопки
        });
  
      } else {
          console.error("Ошибка проверки подписки");
          Telegram.WebApp.MainButton.setText('Ошибка!');
      }
  
  
    });
}
  