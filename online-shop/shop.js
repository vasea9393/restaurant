
function renderProduct(product){
    var card=document.createElement('div');
    card.className="card carousel-item col-xs-12 mb-4";
    var img= document.createElement('img');
    img.src=product.photos[0];
    img.className="card-img-top d-block";
    card.appendChild(img);
    var div2=document.createElement('div');
    div2.className="card-body";
    var h5=document.createElement('h5');
    h5.className="card-title";
    h5.innerHTML=product.name;
    div2.appendChild(h5);
    var p=document.createElement('p');
    p.className='card-text';
    p.innerHTML=" Pretul"+ "<br>"+ product.price.value + product.price.currency ;
    div2.appendChild(p);
    var p2=document.createElement('p');
    p2.className='card-text';
    p2.innerHTML=product.mass.value+product.mass.currency;
    div2.appendChild(p2);
    var a=document.createElement('a');
    a.href=`#${product.id}`;
    a.className="btn btn-primary";
    a.innerHTML="Comanda";
    a.addEventListener('click',addToCart);
  
    div2.appendChild(a);
    card.appendChild(div2);
  
  
     var row=document.getElementById('products').querySelector('.carousel-inner');
     row.appendChild(card);
     var child=document.querySelector('.carousel-inner').children[2];
     child.className="card carousel-item col-xs-12 mb-4 active";
    
  }
  function renderProductList(){  
    for(var i=0;i<products.length;i++){
      renderProduct(products[i]);
    }
    
  }
  renderProductList();
  function addToCart(e){
    let product_id=e.target.href.split('#').pop();
  
    if (localStorage.getItem('cart') !=null){
      var products_cart=localStorage.getItem('cart').split(",");
    }else{
        var products_cart=[];
    }
    products_cart.push(product_id);
  
    localStorage.setItem('cart',products_cart);
  
    window.location.reload();
  }
  
  
  function showCart(){
    var a= document.createElement('a');
    a.className="btn btn-primary btn-lg rounded-pill";
    a.href="";
    var i=document.createElement('i');
    i.className="fas fa-shopping-cart";
    a.appendChild(i);
    if (localStorage.getItem('cart') !=null){
      var products_cart=localStorage.getItem('cart').split(",");
    }else{
        var products_cart=[];
    }
    var p= document.createTextNode(`Items:${products_cart.length}`);
    a.appendChild(p);
    var div=document.querySelector('.product-cart');
    div.appendChild(a);
    
  
  }
  showCart();