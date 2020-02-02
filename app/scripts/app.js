"use strict";

function app() {
  var removeCharFromNumber = function removeCharFromNumber(number) {
    return Number(number.replace('$', ''));
  };

  var mountProductList = function mountProductList(products) {
    var ProductList = document.getElementById('second-section-product-list');
    var list = '';
    products.forEach(function (it) {
      var picture = it.picture,
          name = it.name,
          description = it.description,
          oldPrice = it.oldPrice,
          price = it.price,
          installmentTimes = it.installmentTimes;
      var newPrice = removeCharFromNumber(price);
      var installment = (newPrice / installmentTimes).toFixed(2);
      list += "<div class=\"second-section-product\">\n                <div>\n                <img class=\"second-section-product-image\"\n                  src=\"".concat(picture, "\"\n                  alt=\" ").concat(name, "\"\n                  loading=\"lazy\"\n                />\n                </div>\n                <div class\"second-section-infos-wrapper\">\n                <p class=\"second-section-product-name second-section-product-infos\">\n                  ").concat(name, "\n                </p>\n                <div class=\"second-sections-product-description-wrapper\">\n                <p class=\"second-section-product-description second-section-product-infos\">\n                  ").concat(description, "\n                </p>\n                </div>\n                \n                <p class=\"second-section-product-oldprice second-section-product-infos\">\n                  De: R").concat(oldPrice, "\n                </p>\n                <p class=\"second-section-product-price\">Por: R").concat(price, "</p>\n                <p class=\"second-section-product-installments second-section-product-infos\">\n                  ou ").concat(installmentTimes, "x de R$").concat(installment, "\n                </p>\n             \n                <button class=\"second-section-product-button second-section-product-infos\">\n                  Comprar\n                </button>\n                </div>\n              </div>");
    });
    ProductList.innerHTML = list;
  };

  var getProductList = function getProductList(response) {
    var products = JSON.parse(response);
    if (products) mountProductList(products);
  };

  loadJSON(getProductList, '../resources/products.json');
}

app();

function loadJSON(callback, filePath) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/json');
  xobj.open('GET', filePath, true);

  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == '200') {
      callback(xobj.responseText);
    }
  };

  xobj.send(null);
}