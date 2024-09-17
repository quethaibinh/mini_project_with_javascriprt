import api from "../apis";

let Prod = async () => {
    let htmls = "";
    // let res = await fetch("https://dummyjson.com/products");
    // let data = await res.json();
    try {
        let res = await api.get("/products"); // do ở đây đã gọi phưongư thức get("http://localhost:3000/products") rồi nên json server sẽ gọi thăng trực tiếp tới thuộc tính products trong database
        console.log(res);
        res.data.forEach((item) => {
            htmls += `
                <div class="product-card">
                    <div class="product-info">
                        <img src="${item.thumbnail}" />
                        <h3>${item.title}</h3>
                        <p>Gia: ${item.price}</p>
                        <div>${item.description}</div>
                    </div>
                </div>
            `;
        })
    } catch (error) {
        console.log(error);
    }
    return htmls
}

export let HandleProductList = async () => {
    const productList = document.querySelector('.product-list');
    const productsHTML = await Prod();
    productList.innerHTML = productsHTML;
}