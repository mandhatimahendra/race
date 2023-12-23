let menButton=document.getElementById("menButton")
let womenButton=document.getElementById("womenButton")
let kidsButton=document.getElementById("kidsButton")
let menProducts=document.getElementById("menProducts")
let womenProducts=document.getElementById("womenProducts")
let kidProducts=document.getElementById("kidProducts")
let men=document.getElementById("men")
let women=document.getElementById("women")
let kid=document.getElementById("kid")
 function onClickingMenButton(){
    let option={
        method:"GET"
    }
    let url="https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
    fetch(url,option)
    .then(function(response){
        return response.json()
    })
    .then(function(jsonData){
        let jsonProducts=jsonData.categories[0]
        let {category_name,category_products}=jsonProducts
        menButton.style.backgroundColor="black"
        menButton.style.color="#ffffff"
        men.style.color="#ffffff"
        men.style.backgroundColor="black"
        men.style.borderColor="black"
        womenButton.style.backgroundColor="#f7f0dc"
        womenButton.style.color="black"
        women.style.color="#ffffff"
        women.style.backgroundColor="#f7f0dc"
        kidsButton.style.backgroundColor="#f7f0dc"
        kidsButton.style.color="black"
        kid.style.color="#ffffff"
        kid.style.backgroundColor="#f7f0dc"
        menProducts.style.display="block"
        womenProducts.style.display="none"
        kidProducts.style.display="none"

            for (let item of category_products) {
                // div 
                let divElement = document.createElement('li');
                divElement.classList.add('card-container');
                menProducts.appendChild(divElement);
             
                
                // image 
                let imageElement = document.createElement('img');
                imageElement.src = item.image;
                imageElement.classList.add('image-style');
                divElement.appendChild(imageElement);
                
                // div2
                let innerDiv = document.createElement('div');
                innerDiv.classList.add('inner-div');
                divElement.appendChild(innerDiv);
            
                // title 
                let headingElement = document.createElement('h1');
                headingElement.textContent = item.title;
                headingElement.classList.add('heading-element');
                innerDiv.appendChild(headingElement);
                
                //vendor 
                let paragraphElement = document.createElement('p');
                paragraphElement.textContent = ". "+item.vendor;
                paragraphElement.classList.add('para');
                innerDiv.appendChild(paragraphElement);
                
                // div 3 
                let priceDiv = document.createElement('div');
                priceDiv.classList.add('price-div');
                divElement.appendChild(priceDiv);
                
                // price 
                let paragraphElement2 = document.createElement('p');
                paragraphElement2.textContent = "Rs " + item.price + ".00";
                paragraphElement2.classList.add('deal-price');
                priceDiv.appendChild(paragraphElement2);
                
                // compare_At_price
                let paragraphElement3 = document.createElement('p');
                paragraphElement3.textContent = item.compare_at_price + '.00';
                paragraphElement3.classList.add('compare-price');
                priceDiv.appendChild(paragraphElement3);
                
                //span Element 
                let spanElement = document.createElement('span');
                spanElement.textContent = "50%Off";
                spanElement.classList.add('span-style');
                priceDiv.appendChild(spanElement);
                
                // button 
                let cartButton = document.createElement('button');
                cartButton.textContent = 'Add to Cart';
                cartButton.classList.add('button');
                divElement.appendChild(cartButton);
                }
            

        
        
    })
 }
menButton.addEventListener("click",onClickingMenButton)

function onClickingWomenButton(){
    let option={
        method:"GET"
    }
    let url="https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
    fetch(url,option)
    .then(function(response){
        return response.json()
    })
    .then(function(jsonData){
        let jsonProducts=jsonData.categories[1]
        let {category_name,category_products}=jsonProducts
        menButton.style.backgroundColor="#f7f0dc"
        menButton.style.color="black"
        men.style.color="black"
        men.style.backgroundColor="#f7f0dc"
        womenButton.style.backgroundColor="black"
        womenButton.style.color="#ffffff"
        women.style.color="#ffffff"
        women.style.backgroundColor="black"
        kidsButton.style.backgroundColor="#f7f0dc"
        kidsButton.style.color="black"
        kid.style.color="#ffffff"
        kid.style.backgroundColor="#f7f0dc"
        menProducts.style.display="none"
        womenProducts.style.display="block"
        kidProducts.style.display="none"
        

            for (let item of category_products) {
                // div 
                let divElement = document.createElement('li');
                divElement.classList.add('card-container');
                womenProducts.appendChild(divElement);
                
                // image 
                let imageElement = document.createElement('img');
                imageElement.src = item.image;
                imageElement.classList.add('image-style');
                divElement.appendChild(imageElement);
                
                // div2
                let innerDiv = document.createElement('div');
                innerDiv.classList.add('inner-div');
                divElement.appendChild(innerDiv);
            
                // title 
                let headingElement = document.createElement('h1');
                headingElement.textContent = item.title;
                headingElement.classList.add('heading-element');
                innerDiv.appendChild(headingElement);
                
                //vendor 
                let paragraphElement = document.createElement('p');
                paragraphElement.textContent = ". "+item.vendor;
                paragraphElement.classList.add('para');
                innerDiv.appendChild(paragraphElement);
                
                // div 3 
                let priceDiv = document.createElement('div');
                priceDiv.classList.add('price-div');
                divElement.appendChild(priceDiv);
                
                // price 
                let paragraphElement2 = document.createElement('p');
                paragraphElement2.textContent = "Rs " + item.price + ".00";
                paragraphElement2.classList.add('deal-price');
                priceDiv.appendChild(paragraphElement2);
                
                // compare_At_price
                let paragraphElement3 = document.createElement('p');
                paragraphElement3.textContent = item.compare_at_price + '.00';
                paragraphElement3.classList.add('compare-price');
                priceDiv.appendChild(paragraphElement3);
                
                //span Element 
                let spanElement = document.createElement('span');
                spanElement.textContent = "50%Off";
                spanElement.classList.add('span-style');
                priceDiv.appendChild(spanElement);
                
                // button 
                let cartButton = document.createElement('button');
                cartButton.textContent = 'Add to Cart';
                cartButton.classList.add('button');
                divElement.appendChild(cartButton);
                }
            

        
        
    })

}
womenButton.addEventListener("click",onClickingWomenButton)
function onClickingKidsButton(){
    let option={
        method:"GET"
    }
    let url="https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
    fetch(url,option)
    .then(function(response){
        return response.json()
    })
    .then(function(jsonData){
        let jsonProducts=jsonData.categories[2]
        let {category_name,category_products}=jsonProducts
        menButton.style.backgroundColor="#f7f0dc"
        menButton.style.color="black"
        men.style.color="black"
        men.style.backgroundColor="#f7f0dc"
        womenButton.style.backgroundColor="#f7f0dc"
        womenButton.style.color="black"
        women.style.color="black"
        women.style.backgroundColor="#f7f0dc"
        kidsButton.style.backgroundColor="black"
        kidsButton.style.color="#ffffff"
        kid.style.color="#ffffff"
        kid.style.backgroundColor="black"
        menProducts.style.display="none"
        womenProducts.style.display="none"
        kidProducts.style.display="block"

        for (let item of category_products) {
            // div 
            let divElement = document.createElement('li');
            divElement.classList.add('card-container');
            kidProducts.appendChild(divElement);
            
            // image 
            let imageElement = document.createElement('img');
            imageElement.src = item.image;
            imageElement.classList.add('image-style');
            divElement.appendChild(imageElement);
            
            // div2
            let innerDiv = document.createElement('div');
            innerDiv.classList.add('inner-div');
            divElement.appendChild(innerDiv);
        
            // title 
            let headingElement = document.createElement('h1');
            headingElement.textContent = item.title;
            headingElement.classList.add('heading-element');
            innerDiv.appendChild(headingElement);
            
            //vendor 
            let paragraphElement = document.createElement('p');
            paragraphElement.textContent = ". "+item.vendor;
            paragraphElement.classList.add('para');
            innerDiv.appendChild(paragraphElement);
            
            // div 3 
            let priceDiv = document.createElement('div');
            priceDiv.classList.add('price-div');
            divElement.appendChild(priceDiv);
            
            // price 
            let paragraphElement2 = document.createElement('p');
            paragraphElement2.textContent = "Rs " + item.price + ".00";
            paragraphElement2.classList.add('deal-price');
            priceDiv.appendChild(paragraphElement2);
            
            // compare_At_price
            let paragraphElement3 = document.createElement('p');
            paragraphElement3.textContent = item.compare_at_price + '.00';
            paragraphElement3.classList.add('compare-price');
            priceDiv.appendChild(paragraphElement3);
            
            //span Element 
            let spanElement = document.createElement('span');
            spanElement.textContent = "50%Off";
            spanElement.classList.add('span-style');
            priceDiv.appendChild(spanElement);
            
            // button 
            let cartButton = document.createElement('button');
            cartButton.textContent = 'Add to Cart';
            cartButton.classList.add('button');
            divElement.appendChild(cartButton);
            }
        
    })

}
kidsButton.addEventListener("click",onClickingKidsButton)
