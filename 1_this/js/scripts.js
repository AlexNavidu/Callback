window.onload = function() {
    
    var item = document.querySelector('.items .item');
    
    item.onclick = function () {
        
    }
    
    activeItem();
    
}

function activeItem() {
    console.log(this);
}