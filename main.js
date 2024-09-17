import Navigo from 'navigo'
import './style.css'
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";

import { homePage } from './src/pages/HomePage';
import { aboutPage } from './src/pages/AboutPage';
import { notFoundPage } from './src/pages/NotFoundPage';
import { registerPage } from './src/pages/RegisterPage';
import { HandleProductList } from './src/handles/HandleProductList';
import { HandleRegister } from './src/handles/HandleRegister';
import { loginPage } from './src/pages/LoginPage';
import { HandleLogin } from './src/handles/HandleLogin';

export const router = new Navigo('/', {linkSelector: "a"});

// truy cập vào thẻ có id là "app"
const app = document.getElementById("app");


// hàm dùng để đổi trang
const render = (position, content) => {
  position.innerHTML = content();
};

// thường thì không nên fix cứng hàm render, nên sử dụng 1 hàm khác để gọi lại hàm để sau có chỉnh sửa logic thì dể dàng hơn
router.on("/", () => render(app, homePage), {
  after() { // after này sẽ được gọi khi đã render xong, thường thì nó sẽ xử lí chức năng xóa hoặc chèn thêm html vào
    HandleProductList();
  }
});
router.on("/home", () => router.navigate("/")); // nếu nhỡ, người dùng có bấm vào đường dẫn "http://localhost:3000/home" thì nó cũng sẽ dẫn về "http://localhost:3000" => 2 đường dẫn là 1
router.on("/register", () => render(app, registerPage), {
  after() {
    HandleRegister();
  }
});
router.on("/login", () => render(app, loginPage), {
  after() {
    HandleLogin();
  }
})
router.on("/about", () => render(app, aboutPage));
router.notFound(() => render(app, notFoundPage)); // nếu gõ nhầm link trang



// mặc định gọi sau khi định tuyến
router.resolve();