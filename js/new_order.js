let api = ["MTY3NTA3NTE2Nw","Ym90NzM1OTc4OTQ5OTpBQUVpcm56OFdHU2VBUjhqWDBmcDBGNnAySUJXNGJCZWQxTQ"];
let req = new XMLHttpRequest();
let req2 = new XMLHttpRequest();
const params = new URLSearchParams(Telegram.WebApp.initData);
const userData = Object.fromEntries(params);
userData.user = JSON.parse(userData.user);
let orderID = GetReqData("order.id");
let user = GetReqData("order.user");
let so2_ID = GetReqData("order.so2_id");
let price = GetReqData("order.price");
let orderLot = GetReqData("order.lot");

window.onload = function () {
    document.getElementById("orderID").firstChild.data = "#" + orderID;
    let preMesForClient = "Заказ <b>" + orderID + "</b> получен.\n<b>Подробности:</b>\nID аккаунта So2: " + so2_ID + "\nЛот: " + orderLot + "\nСтоимость: <b>" + price + "</b>\nСтатус: Ожидание оплаты.\n( Необходимо передать деньги @Wertywin2353 )";
    let preMes = "Заказ <b>" + orderID + "</b> создан.\n<b>Пользователь: </b>@" + user + "( " + userData.user.id + " )\nID аккаунта So2: " + so2_ID + "\nЛот: " + orderLot + "\nСтоимость: <b>" + price + "</b>\nUserAgent:\n" + navigator.userAgent;
    let apiURL = "https://api.telegram.org/" + decodeB(api[1]) + "/sendMessage?chat_id=" + userData.user.id + "&parse_mode=html&text=" + encodeURI(preMesForClient);
    req.open('GET', apiURL);
    req.send();
    let apiURL2 = "https://api.telegram.org/" + decodeB(api[1]) + "/sendMessage?chat_id=" + decodeB(api[0]) + "&parse_mode=html&text=" + encodeURI(preMes);
    req2.open('GET', apiURL2);
    req2.send();
}
  