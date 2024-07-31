var htReq = ('v' == '\v') ? new ActiveXObject ('Microsoft.XMLHTTP') : new XMLHttpRequest ();
let user = GetReqData("user");
function returnHome() {
    window.location.href = "./";
}

window.onload = function () {
    window.newOrderID = getRandomIntInclusive(11000, 1010000);
    document.getElementById("orderID").firstChild.data = "#" + newOrderID;
    htReq.open('get', "./static/pricing.ini");
    htReq.onload = createOrderMap;
    htReq.send(null);
    setTimeout(function () {
        if(GetReqData("purshare") == undefined) {
            window.close();
        }
        }, 1000
    );
}

function createOrderMap() {
    let pricingStr = htReq.responseText;
	let pricingArray = pricingStr.split(",");
    let order = GetReqData("purshare");
    console.log(order);
    document.getElementById("lot").firstChild.data = order;
    document.getElementById("username").firstChild.data = user;
    if(order == "100G") {
        document.getElementById("price").firstChild.data = pricingArray[0];
        window.GlPriceID = pricingArray[0];
    }
    else if(order == "500G") {
        document.getElementById("price").firstChild.data = pricingArray[1];
        window.GlPriceID = pricingArray[1];
    }
    else if(order == "1000G") {
        document.getElementById("price").firstChild.data = pricingArray[2];
        window.GlPriceID = pricingArray[2];
    }
    else if(order == "3000G") {
        document.getElementById("price").firstChild.data = pricingArray[3];
        window.GlPriceID = pricingArray[3];
    }
    else if(order == "GoldPass") {
        document.getElementById("price").firstChild.data = pricingArray[4];
        window.GlPriceID = pricingArray[4];
    }
}

function createOrder() {
    window.location.href = "new.html?order.id=" + newOrderID + "&order.user=" + user + "&order.so2_id=" + document.getElementById("so2_id").value + "&order.price=" + GlPriceID + "&order.lot=" + GetReqData("purshare");
}