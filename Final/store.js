if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else {
    ready()
}
//makes sure that the page is loaded
function ready(){
//Removes the items from the cart
    var removeCartItems = document.getElementsByClassName('btn-danger')
    console.log(removeCartItems)
    for (var i =0; i < removeCartItems.length; i++) {
        var button = removeCartItems[i]
        button.addEventListener('click', removeCartItem)

        
    }
}

var quantityInputs = document.getElementsByClassName(['cart-quantity-input'])

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
// As Items are removed from the cart the total changes as well
function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRow = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i =0; i < cartRow.length; i++){
        var cartRow = cartRow[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)

    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}