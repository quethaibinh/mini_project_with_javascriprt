import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


let Prod = async () => {
    let htmls = "";
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    data.products.forEach((item) => {
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
    return htmls
} 

export const homePage = () => {
    // Render trang trước, sau đó chèn sản phẩm sau khi tải xong
    const html = `
        ${Header()}
        <div class="container">
            <h1>Sản phẩm bán chạy</h1>
            <div class="product-list">
                <!-- Sản phẩm sẽ được chèn vào đây sau khi tải xong -->
            </div>
        </div>
        ${Footer()}
    `;
    
    // Chèn sản phẩm sau khi trang đã render
    setTimeout(async () => {
        const productList = document.querySelector('.product-list');
        const productsHTML = await Prod();
        productList.innerHTML = productsHTML;
    }, 0); // Đảm bảo DOM đã được render trước khi thay đổi

    return html;
};