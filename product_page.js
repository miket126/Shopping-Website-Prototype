document.getElementById('list-button').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

document.querySelector('.list-btn').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

/*document.getElementById('button').addEventListener('click', function(){
    document.querySelector('.bg-modal-purchase').style.display = 'flex';
});*/

document.querySelector('.purchase-close').addEventListener('click', function() {
    document.querySelector('.bg-modal-purchase').style.display = 'none';
});

document.querySelector('.purchase-btn').addEventListener('click', function() {
    document.querySelector('.bg-modal-purchase').style.display = 'none';
});


var inputClose = document.querySelector('.close');
var listClose = document.querySelector('.list-btn,.purchase-btn');
var description_area = document.querySelector(".description-txtbox");
var product_area = document.querySelector(".product-txtbox");
var price_area = document.querySelector(".price-txtbox");
var imagePreview = document.querySelector(".image-preview");
var itemPrice = "0.00";
var itemDescription = '';
var itemName = '';
var productImage = '';
var customer_area = document.querySelector(".customer-txtbox");
var customer_address_area = document.querySelector(".customer-address-txtbox");
var credit_card = document.querySelector(".credit-card-txtbox");
var credit_expiry = 'MM/YY';
var creditCVV = "000";
var itemTax = "9.8%";
var itemTotal = (itemPrice * 0.098) + itemPrice;

inputClose.addEventListener('click', function() {
    itemName = product_area.value;
    itemDescription = description_area.value;
    itemPrice = price_area.value;
    productImage = imagePreview.value;
    description_area.value = '';
    product_area.value = '';
    price_area.value = '0.00';
    imagePreview.value = '';
    customerName = customer_area.value;
    customerAddress = customer_address_area.value;
    itemTax = "9.8%";
    itemTotal = itemTotal.value;
    creditCard = credit_card.value;
    creditExpiry = 'MM/YY';
    creditCVV = "000";
}, false);

listClose.addEventListener('click', function() {
    itemName = product_area.value;
    itemDescription = description_area.value;
    itemPrice = price_area.value;
    productImage = imagePreview.value;
    description_area.value = '';
    product_area.value = '';
    price_area.value = '0.00';
    imagePreview.value = '';
    customerName = customer_area.value;
    customerAddress = customer_address_area.value;
    itemTax = "9.8%";
    itemTotal = itemTotal.value;
    creditCard = credit_card.value;
    creditExpiry = 'MM/YY';
    creditCVV = "000";
}, false);


function store() {
    var productInput = document.getElementById("product");
    var descriptionInput = document.getElementById("description");
    var priceInput = document.getElementById("price");

    document.getElementById("listed-product").innerHTML = productInput.value;

    //document.getElementById("product-description").innerHTML = "<b>Description: </b>" + descriptionInput.value + "<br>";
    document.getElementById("product-description").innerHTML = descriptionInput.value;

    //document.getElementById("listed-price").innerHTML = "<b>Price: $</b>" + parseFloat(priceInput.value).toFixed(2);
    document.getElementById("listed-price").innerHTML = "<b>$</b>" + parseFloat(priceInput.value).toFixed(2);

}

function editProduct()  {

    document.querySelector('.bg-modal').style.display = 'flex';

    document.getElementById("product").value = itemName;

    document.getElementById("description").value = itemDescription;

    document.getElementById("price").value = itemPrice;

}


var loadFile = function(event) {

	var image = document.getElementById('uploaded-image');

    var postedImage = document.getElementById("posted-image");

    postedImage.src = URL.createObjectURL(event.target.files[0])

	image.src = URL.createObjectURL(event.target.files[0]);
};

function favoritesPurchase()    {

    document.querySelector('.bg-modal-favorites').style.display = 'flex';
    
    document.getElementById("customer").value = customerName;

    document.getElementById("customerAddress").value = customerAddress;

    document.getElementById("price").value = itemPrice;

    document.getElementById("creditCard").value = creditCard;

    document.getElementById("creditExpiry").value = creditExpiry;

    document.getElementById("creditCVV").value = creditCVV;
}

function favoritesClose()    {

    document.querySelector('.bg-modal-favorites').style.display = 'none';
}

function purchaseProduct()  {

    document.querySelector('.bg-modal-purchase').style.display = 'flex';

    document.getElementById("customer").value = customerName;

    document.getElementById("customerAddress").value = customerAddress;

    document.getElementById("price").value = itemPrice;

    document.getElementById("creditCard").value = creditCard;

    document.getElementById("creditExpiry").value = creditExpiry;

    document.getElementById("creditCVV").value = creditCVV;

}

function purchaseClose()    {

    document.querySelector('.bg-modal-purchase').style.display = 'none';
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
