function productOnClick(productId){
    
    
    var product_image = document.getElementById("product" + productId + "_image").src;
    
    document.getElementById("img_modal").src = product_image;
    
    
    var product_title = document.getElementById("product" + productId + "_title").innerHTML;
    
    document.getElementById("ModalProductTitle").innerHTML = product_title;
    
    
    var product_label = document.getElementById("product" + productId + "_description").innerHTML;
    
    document.getElementById("modal_product_lbl").innerHTML = product_label;
    
    
    
}