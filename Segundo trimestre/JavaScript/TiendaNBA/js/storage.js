//localStorage.clear();
const products = [
    {
        id: 1,
        name: "Austin Reaves",
        image: "./images/Reaves.png",
        position: "Base / Escolta",
        description: "Titular de Los Ángeles Lakers",
        team: "Lakers",
        price: 70
    },
    {
        id: 2,
        name: "Jarred Vanderbilt",
        image: "./images/Vanderbilt.png",
        position: "Ala-Pívot",
        description: "Titular de Los Ángeles Lakers",
        team: "Lakers",
        price: 70
    },    
    {
        id: 3,
        name: "Anthony Davis",
        image: "./images/Davis.png",
        position: "Ala-Pívot / Pívot",
        description: "Titular de Los Ángeles Lakers",
        team: "Lakers",
        price: 70
    },
    {
        id: 4,
        name: "D'Angelo Russell",
        image: "./images/Russell.png",
        position: "Base / Escolta",
        description: "Titular de Los Ángeles Lakers",
        team: "Lakers",
        price: 70
    },    
    {
        id: 5,
        name: "Lebron James",
        image: "./images/James.png",
        position: "Alero / Ala-Pívot",
        description: "Titular de Los Ángeles Lakers",
        team: "Lakers",
        price: 85
    },
    {
        id: 6,
        name: "Stephen Curry",
        image: "./images/Curry.png",
        position: "Base",
        description: "Titular de Golden State Warriors",
        team: "Warriors",
        price: 85
    },
    {
        id: 7,
        name: "Jordan Poole",
        image: "./images/Poole.png",
        position: "Base / Escolta",
        description: "Sexto hombre de Golden State Warriors",
        team: "Warriors",
        price: 80
    },    
    {
        id: 8,
        name: "Klay Thompson",
        image: "./images/Thompson.png",
        position: "Escolta / Alero",
        description: "Titular de Golden State Warriors",
        team: "Warriors",
        price: 80
    },
    {
        id: 9,
        name: "Draymond Green",
        image: "./images/Green.png",
        position: "Ala-Pívot / Pívot",
        description: "Titular de Golden State Warriors",
        team: "Warriors",
        price: 80
    },    
    {
        id: 10,
        name: "Kevon Looney",
        image: "./images/Looney.png",
        position: "Pívot / Ala-Pívot",
        description: "Titular de Golden State Warriors",
        team: "Warriors",
        price: 80
    }
];
loadProducts();
contadorCesta();

function loadProducts() {
    
    let text = "";
    let price = getTotalPrice();

    let IDproducts = document.getElementById("products");
    let IDproductsCart = document.getElementById("products-cart");
    let IDTotalPrice = document.getElementById("total-price");
    
    
    if(IDproducts != null){
        let productfiltred = getFiltro();

        for(let i=0;i<productfiltred.length;i++){
            let cantidad = 0;
            let db = localStorage.getItem(productfiltred[i].id);
            if(db != null){
                cantidad = db;
            }
            text += "<div class='product' id='"+productfiltred[i].id+"'><img src='"+productfiltred[i].image+"' alt='"+productfiltred[i].name+"'>";
            text += "<p>"+productfiltred[i].name+"</p>";
            text += "<button onclick='removeProduct(`"+productfiltred[i].id+"`)'>-</button><span id='count"+productfiltred[i].id+"'>"+cantidad+"</span><button onclick='addProduct(`"+productfiltred[i].id+"`)'>+</button>";
            text += "<p><span style='color: yellow;'>"+productfiltred[i].position+"</span><br>"+productfiltred[i].description+"</p></div>";
        }
        IDproducts.innerHTML = text;
    }
    else if(IDproductsCart != null){
        for(let i=0;i<products.length;i++){
            let cantidad = 0;
            let db = localStorage.getItem(products[i].id);
            if(db != null && db > 0){
                cantidad = db;
                text += "<div class='product' id='"+products[i].id+"'><h3 class='name'>"+products[i].name+"</h3>";
                text += "<img src='"+products[i].image+"' alt='"+products[i].name+"'>";
                text += "<p><span style='color: yellow;'>"+products[i].position+"</span><br>"+products[i].description+"</p>";
                text += "<p class='buttons'><button onclick='removeProduct(`"+products[i].id+"`)'>-</button><span id='count"+products[i].id+"'>"+cantidad+"</span><button onclick='addProduct(`"+products[i].id+"`)'>+</button></p>";
                text += "<p>"+products[i].price+"$</p></div>";
            }
        }
        if(text == "" || text == null){
            text = "<p style='font-size: 1.5em'>No hay ningun producto</p>";
        }

        IDproductsCart.innerHTML = text;
        /* SIN FUNCION DE PAGAR */
        //IDTotalPrice.innerHTML = "Total: "+price+"$ <p>Productos: "+getTotalCount()+"</p><button id='Pagar'>Pagar</button>";

        /* CON FUNCION DE PAGAR */
        IDTotalPrice.innerHTML = "Total: "+price+"$ <p>Productos: "+getTotalCount()+"</p><button id='Pagar' onclick='pay()'>Pagar</button>";
    }else{
        
    }
    
}
function addProduct(id) {
    let count = document.getElementById('count'+id);
    let m = localStorage.getItem(id);
    let n = 0;
    if(m != null){
        n=m;
    }
    n++;
    localStorage.setItem(id, n);
    count.innerHTML = localStorage.getItem(id);
    contadorCesta();
    loadProducts();
}
function removeProduct(id) {
    let count = document.getElementById('count'+id);
    let m = localStorage.getItem(id);
    let n = 0;
    if(m != null){
        n=m;
    }
    if(n >= 1){
        n--;
    }
    localStorage.setItem(id, n);
    count.innerHTML = localStorage.getItem(id);
    contadorCesta();
    loadProducts();
}

function getTotalCount(){
    let n = 0;
    for(let i=0;i<products.length;i++){
        let db = localStorage.getItem(products[i].id);
        if(db != null){
            n += parseInt(db);
        }
    }
    return n;
}

function getTotalPrice(){
    let n = 0;
    for(let i=0;i<products.length;i++){
        let db = localStorage.getItem(products[i].id);
        if(db != null){
            n += parseInt(db) * parseInt(products[i].price);
        }
    }
    return n.toFixed(2);
}

function getIdProducts(){
    let text = [];
    for(let i=0;i<products.length;i++){
        let db = localStorage.getItem(products[i].id);
        if(db != null && db > 0){
            text.push(products[i].id);
        }
    }
    return text;
}

function contadorCesta(){
    var textoSuper = getTotalCount();
    let cart = document.getElementById('Cesta').innerHTML;
    cart = '<ion-icon name="cart"></ion-icon>Cesta<sup>'+textoSuper+'</sup>'

    document.getElementById('Cesta').innerHTML = cart;
}

function getFiltro(){
    let productos = [];
    let name = document.getElementById('filter-name');
    let team = document.getElementById('filter-team');

    if(name.value != ""){
        for(let i=0;i<products.length;i++){
            if(products[i].name.toLowerCase().includes(name.value.toLowerCase())){
                if(team.value != "ninguno"){
                    if(products[i].team.toLowerCase().includes(team.value.toLowerCase())){
                        productos.push(products[i]);                        
                    }
                }else{
                    productos.push(products[i]);
                }
            }
        }
    }else if(team.value != "ninguno"){           
        for(let i=0;i<products.length;i++){
            if(products[i].team.toLowerCase().includes(team.value.toLowerCase())){
                productos.push(products[i]);
            }
        }
    }else{
        productos = products;
    }
    return productos;
}

function pay(){
    let datos = localStorage.getItem("pago");
    datos = JSON.parse(datos);

    if(datos != null){
        //alert("El pedido será enviado: \n"+JSON.stringify(datos)+" \nTotal: "+getTotalPrice());

        alert("Usuario: "+datos.name+"\nEmail: "+datos.email+"\nNumero: "+datos.number+"\nPaypal: "+datos.card+"\nDireccion: "+datos.email+"\nDirección: "+datos.location+"\nTotal: "+getTotalPrice());
    }else{
        window.location.href = "Registro.html";
    }
}