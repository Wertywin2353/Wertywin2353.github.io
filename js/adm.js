let api = ["MTY3NTA3NTE2Nw","Ym90NzM1OTc4OTQ5OTpBQUVpcm56OFdHU2VBUjhqWDBmcDBGNnAySUJXNGJCZWQxTQ"];
let req = new XMLHttpRequest();
let req2 = new XMLHttpRequest();

function apply() {
    let orderID = document.getElementById("input").value;
    let chat_id = document.getElementById("input2").value;
    let preMesForClient = "Заказ <b>" + orderID + "</b> оплачен.\nСпасибо!";
    let preMes = "Заказ <b>" + orderID + "</b> оплачен.";
    let apiURL = "https://api.telegram.org/" + decodeB(api[1]) + "/sendMessage?chat_id=" + chat_id + "&parse_mode=html&text=" + encodeURI(preMesForClient);
    let apiURL2 = "https://api.telegram.org/" + decodeB(api[1]) + "/sendMessage?chat_id=" + decodeB(api[0]) + "&parse_mode=html&text=" + encodeURI(preMes);
    req.open('GET', apiURL);
    req.send();
    req2.open('GET', apiURL2);
    req2.send();
}
function refund() {
    let orderID = document.getElementById("input").value;
    let chat_id = document.getElementById("input2").value;
    let preMesForClient = "Заказ <b>" + orderID + "</b> возвращен и закрыт.\nВаши деньги будут возвращенны администратором @Wertywin2353.";
    let preMes = "Заказ <b>" + orderID + "</b> отменен.";
    let apiURL = "https://api.telegram.org/" + decodeB(api[1]) + "/sendMessage?chat_id=" + chat_id + "&parse_mode=html&text=" + encodeURI(preMesForClient);
    let apiURL2 = "https://api.telegram.org/" + decodeB(api[1]) + "/sendMessage?chat_id=" + decodeB(api[0]) + "&parse_mode=html&text=" + encodeURI(preMes);
    req.open('GET', apiURL);
    req.send();
    req2.open('GET', apiURL2);
    req2.send();
}
function closeOffer() {
    let orderID = document.getElementById("input").value;
    let chat_id = document.getElementById("input2").value;
    let preMesForClient = "Заказ <b>" + orderID + "</b> закрыт.\nСпасибо за Покупку!";
    let preMes = "Заказ <b>" + orderID + "</b> завершен.";
    let apiURL = "https://api.telegram.org/" + decodeB(api[1]) + "/sendMessage?chat_id=" + chat_id + "&parse_mode=html&text=" + encodeURI(preMesForClient);
    let apiURL2 = "https://api.telegram.org/" + decodeB(api[1]) + "/sendMessage?chat_id=" + decodeB(api[0]) + "&parse_mode=html&text=" + encodeURI(preMes);
    req.open('GET', apiURL);
    req.send();
    req2.open('GET', apiURL2);
    req2.send();
}