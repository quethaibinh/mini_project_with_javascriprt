import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import './home.css'

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

    return html;
};