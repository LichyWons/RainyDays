fetch('https://api.noroff.dev/api/v1/rainy-days')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  products = data;
  products = products.filter(x =>{return x.favorite})
  products.forEach(product => {
      if(product.onSale)
      {
        var price1 = '<span style="text-decoration: line-through;color: red;">'+product.price+'</span> <span>'+product.discountedPrice+'</span>'
      }
      else
      {
        var price1 = product.price
      }
      let divProduct = document.createElement('div');
          divProduct.className = 'productCard';
      let link1 = document.createElement('a');
          link1.href = '/productpage.html?id='+product.id;
      let image = document.createElement('img');
          image.src = product.image;
      let p1 = document.createElement('p');
          p1.className = 'productMake';
          p1.innerText = product.gender;
      let p2 = document.createElement('p');
          p2.className = 'productModel';
          p2.innerText = product.title;
      let p3 = document.createElement('p');
          p3.className = 'productPrice';
          p3.innerHTML = "EUR "+price1;
      let link2 = document.createElement('a');
          link2.className = 'moreButton';
          link2.href = '/productpage.html?id='+product.id;
          link2.innerHTML = "More  &gt;";
      link1.appendChild(image);
      //link1.appendChild(p1);
      link1.appendChild(p2);
      link1.appendChild(p3);
      divProduct.appendChild(link1);
      divProduct.appendChild(link2);
      productContainer.appendChild(divProduct);
  });
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
}); 
