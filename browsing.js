(function() {
		
  let field = document.querySelector('.items');
  let li = Array.from(field.children);

  function FilterProduct() {
    for(let i of li){
      const name = i.querySelector('h1');
      const x = name.textContent;
      i.setAttribute("data-category", x);
    }

    let indicator = document.querySelector('.indicator').children;

    this.run = function() {
      for(let i=0; i<indicator.length; i++)
      {
        indicator[i].onclick = function () {
          for(let x=0; x<indicator.length; x++)
          {
            indicator[x].classList.remove('active');
          }
          this.classList.add('active');
          const displayItems = this.getAttribute('data-filter');

          for(let z=0; z<li.length; z++)
          {
            li[z].style.transform = "scale(0)";
            setTimeout(()=>{
              li[z].style.display = "none";
            }, 500);

            if ((li[z].getAttribute('data-category') == displayItems) || displayItems == "all")
             {
               li[z].style.transform = "scale(1)";
               setTimeout(()=>{
                li[z].style.display = "block";
              }, 500);
             }
          }
        };
      }
    }
  }

  function logout(event){
    event.preventDefault();
    alert("You have been successfully logged out")
  }



  function SortProduct() {
    let select = document.getElementById('select');
    let ar = [];
    for(let i of li){
      const last = i.lastElementChild;
      const x = last.textContent.trim();
      const y = Number(x.substring(1));
      i.setAttribute("data-price", y);
      ar.push(i);
    }
    this.run = ()=>{
      addevent();
    }
    function addevent(){
      select.onchange = sortingValue;
    }
    function sortingValue(){
    
      if (this.value === 'Default') {
        while (field.firstChild) {field.removeChild(field.firstChild);}
        field.append(...ar);	
      }
      if (this.value === 'LowToHigh') {
        SortElem(field, li, true)
      }
      if (this.value === 'HighToLow') {
        SortElem(field, li, false)
      }
    }
    
    function SortElem(field,li, asc){
      let sortli;
      sortli = li.sort((a, b)=>{
        const ax = a.getAttribute('data-price');
        const bx = b.getAttribute('data-price');
        if (asc == true) return ax - bx;
        else return bx - ax;
      });
       while (field.firstChild) {field.removeChild(field.firstChild);}
       field.append(...sortli);	
    }
    
  }



  function SearchProduct() {

    let  ul, search,li, button;

    ul = document.querySelector('ul');
    search = document.getElementById('search-form');
    li =  document.getElementsByTagName('li');
    button = document.querySelector('button');

    this.run = ()=>{
      addevent();
    }

    /*
    button.onclick = ()=>{
      const  x = search.value.toLowerCase();
      showItem(x);
    }
    */

    // Without the need to click
    search.onkeyup = ()=>{
      const  x = search.value.toLowerCase();
      showItem(x);
    }
    

    function showItem(x) {
      for(let list of li){
        let product = list.children[0].children[3].innerHTML;
        let name = product.toLowerCase();
        if (name.search(x) > -1)
        {
          list.style.display = "";
        }else{
          list.style.display = "none";
        }
      }
    }
  }



  new FilterProduct().run();
  new SortProduct().run();
  new SearchProduct().run();
})();

	

//===========Buy button===========================


document.getElementById('button').addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});

document.querySelector('.list-btn').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});

document.getElementById('button').addEventListener('click', function(){
  document.querySelector('.bg-modal-purchase').style.display = 'flex';
});

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

  document.getElementById("product-description").innerHTML = "<b>Description: </b>" + descriptionInput.value + "<br>";

  document.getElementById("listed-price").innerHTML = "<b>Price: $</b>" + parseFloat(priceInput.value).toFixed(2);

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




























/*

let products = {
    data: [
        {
            productName: "Dumbell",
            category: "Equipment",
            price: "20",
            image: "https://i5.walmartimages.com/asr/c40f90e0-bacb-4df1-8689-9a3375553bd6_5.a83087ef1e35694babd559d28174f4b1.jpeg",
        },
        {
            productName: "Laptop",
            category: "Equipment",
            price: "150",
            image: "https://i.pcmag.com/imagery/reviews/02lcg0Rt9G3gSqCpWhFG0o1-2..v1656623239.jpg",
        },
        {
            productName: "TI 84 Calculator",
            category: "Equipment",
            price: "10",
            image: "https://i5.walmartimages.com/asr/9d0eb54b-9a47-436b-9092-d17b204964fb.6a5e181469e04cf8c426039ce55c6703.jpeg",
        },
        {
            productName: "C++ Book",
            category: "Book",
            price: "60",
            image: "https://i5.walmartimages.com/asr/7c053eec-7300-4954-ba82-9e67dc07de2e.c45c80082575d9293c86ac08659e2bf8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        },
        {
            productName: "Notebook Bundle",
            category: "Book",
            price: "12",
            image: "https://media.accobrands.com/media/560-560/474398.jpg?width=680px&height=449px",
        },
        {
            productName: "Operating Systems Book",
            category: "Book",
            price: "75",
            image: "https://www.testbanksafe.com/wp-content/uploads/2015/04/01338059131-500x500-400x400.jpg",
        },
        {
            productName: "Farenheit 451 Book",
            category: "Book",
            price: "25",
            image: "https://cdn.shopify.com/s/files/1/0406/2511/1196/products/ACtC-3era2pPlbHbt_4y9qqf0ejuxdXGItq_z0qqMX7PBH8A17oBd9cK2H6dwoTavBQwRfAB9ELwaKuuj3Ls-382DocovoUnyl0wfVWYedPliYfepo7l1tkXUUotkl9Tg023LvLDVo4ssU5iXC-kLSckqHypgg_s1024-no_900x.jpg?v=1620093755",
        },
        {
            productName: "Backpack",
            category: "Equipment",
            price: "30",
            image: "https://m.media-amazon.com/images/I/91YandYecdL.jpg",
        },
        {
            productName: "Divergent book bundle",
            category: "Book",
            price: "50",
            image: "https://kbimages1-a.akamaihd.net/96350cb5-8db0-4bb0-8611-71ba63a6e734/1200/1200/False/the-divergent-series-complete-collection.jpg",
        },
    ],
};

for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category
    card.classList.add("card", i.category);
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }

function sortProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.sort();
    console.log(elements);
}


window.onload = () => {
    filterProduct("all");
};

*/


