function makeitem(item) {
    return `
    <div class="item"> 
        <i class="far fa-heart"></i>
        <img class="image" src="${item.img}">
        <p class="title">${item.title}</p>
        <p class="seller">${item.seller}</p>
        <p class="price">$${item.price}</p>
    </div>
    
    `
}

let htmlStr = " "
items.results.forEach(item => {
    htmlStr += makeitem({
        img: item.Images[0].url_170x135,
        title: item.title,
        seller: item.Shop.shop_name,
        price: item.price
    })
})

document.querySelector("#stuff").innerHTML = htmlStr;