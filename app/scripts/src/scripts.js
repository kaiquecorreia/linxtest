function app() {
  const removeCharFromNumber = number => {
    return Number(number.replace('$', ''));
  };
  const mountProductList = products => {
    const ProductList = document.getElementById('second-section-product-list');
    let list = '';
    products.forEach(it => {
      const { picture, name, description, oldPrice, price, installmentTimes } = it;
      const newPrice = removeCharFromNumber(price);
      const installment = (newPrice / installmentTimes).toFixed(2);
      list += `<div class="second-section-product">
                <div>
                <img class="second-section-product-image"
                  src="${picture}"
                  alt=" ${name}"
                  loading="lazy"
                />
                </div>
                <div class"second-section-infos-wrapper">
                <p class="second-section-product-name second-section-product-infos">
                  ${name}
                </p>
                <div class="second-sections-product-description-wrapper">
                <p class="second-section-product-description second-section-product-infos">
                  ${description}
                </p>
                </div>
                
                <p class="second-section-product-oldprice second-section-product-infos">
                  De: R${oldPrice}
                </p>
                <p class="second-section-product-price">Por: R${price}</p>
                <p class="second-section-product-installments second-section-product-infos">
                  ou ${installmentTimes}x de R$${installment}
                </p>
             
                <button class="second-section-product-button second-section-product-infos">
                  Comprar
                </button>
                </div>
              </div>`;
    });

    ProductList.innerHTML = list;
  };

  const getProductList = response => {
    const products = JSON.parse(response);
    if (products) mountProductList(products);
  };

  loadJSON(getProductList, '../resources/products.json');
}

app();
