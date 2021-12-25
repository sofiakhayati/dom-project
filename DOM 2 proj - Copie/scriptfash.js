/*var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i<removeCartItemButtons.length; i++)
{
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event)
    {
        var buttonclicked = event.target
        buttonclicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}
function updateCartTotal()
{
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i<cartRows.length; i++)
    {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total += price * quantity
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}*/
if (document.readyState == 'loading')
{
document.addEventListener('DOMContentloaded', ready)
}
else 
{
    ready()
}
/********************** ready function *********/
function ready()
{
    var removeCartItemButtons = document.getElementsByClassName('btn11-danger')
    for(var i = 0; i < removeCartItemButtons.length; i++)
    {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    var quantityInputs = document.getElementsByClassName('cart11-quantity-input')
    for(var i = 0; i < quantityInputs.length; i++)
    {
        var input = quantityInputs[i]
        input.addEventListener('change', quantitychanged)
    }
    var addtocartbuttons = document.getElementsByClassName('shop11-item-button')
    for(var i = 0; i < addtocartbuttons.length; i++)
    {
        var button = addtocartbuttons[i]
        button.addEventListener('click', addtocartclicked)
    }
    
    document.getElementsByClassName('btn11-purchase')[0].addEventListener('click',purchaseclicked)

}
/********************** purchaseclicked function *********/

function purchaseclicked(event)
{
alert('thank you for your purchase')
var cartItems = document.getElementsByClassName('cart11-items')[0]
while (cartItems.hasChildNodes())
{
    cartItems.removeChild(cartItems.firstChild)
}
updatecarttotal()
}
/********************** removeCartItem function *********/
function removeCartItem(event)
{
    var buttonclicked = event.target
    buttonclicked.parentElement.parentElement.remove()
    updatecarttotal()
}
/**********************  quantitychanged function *********/

function quantitychanged(event)
{
    var input = event.target
    if (isNaN(input.value) || input.value <= 0)
    {
        input.value = 1
    }
    else 
    {
        updatecarttotal()
    }
}
/**********************  addtocartclicked function *********/

function addtocartclicked(event)
{
    var button = event.target
    var shopitem = button.parentElement.parentElement
    var title = shopitem.getElementsByClassName('shop11-item-title')[0].innerText
    var price = shopitem.getElementsByClassName('shop11-item-price')[0].innerText
    var imagesrc = shopitem.getElementsByClassName('shop11-item-image')[0].src
    console.log(title, price, imagesrc)
    addItemToCart(title, price, imagesrc)
    updatecarttotal()
}

function addItemToCart(title, price, imagesrc)
{
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart11-row')
    var cartItems = document.getElementsByClassName('cart11-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart11-item-title')
    for (i = 0; i < cartItemNames.length; i++)
    {
        if (cartItemNames[i].innerText == title)
        {
            alert('this item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
    <div class="cart11-item cart11-column">
                        <img class="cart11-item-image" src="${imagesrc}" width="100" height="100">
                        <span class="cart11-item-title">${title}</span>
                    </div>
                    <span class="cart11-price cart11-column">${price}</span>
                    <div class="cart11-quantity cart11-column">
                        <input class="cart11-quantity-input" type="number" value="1">
                        <button class="btn11 btn11-danger" type="button">REMOVE</button>
                    </div>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn11-danger')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart11-quantity-input')[0].addEventListener('change',quantitychanged)
}

/********************** updatecarttotal function *********/

function updatecarttotal()
{
    var cartItemContainer = document.getElementsByClassName('cart11-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart11-row')
    var total = 0
    for(var i = 0; i < cartRows.length; i++)
    {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart11-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart11-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value 
        total += price * quantity
    }
    total = Math.round(total * 100)/100
    document.getElementsByClassName('cart11-total-price')[0].innerText = '$' + total
}

function mOver(obj) {
    obj.innerHTML = "You can't find articles more awesomes than these!! Top Of Top!"
  }
  
  function mOut(obj) {
    obj.innerHTML = "FASHION CLOTHES"
  }
  function mOut1(obj) {
    obj.innerHTML = "FASHION SHOES"
  }
  function mOut2(obj) {
    obj.innerHTML = "FASHION BAGS"
  }
  function mOut3(obj) {
    obj.innerHTML = "FASHION JULLERY"
  }
/************************************** hidden part view all 1 ********************/
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

/************************************** hidden part view all 2********************/


  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
