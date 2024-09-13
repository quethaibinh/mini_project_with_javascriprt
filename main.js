import Navigo from 'navigo'
import './style.css'
import { homePage } from './src/pages/HomePage';
import { aboutPage } from './src/pages/AboutPage';
import { notFoundPage } from './src/pages/NotFoundPage';

import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";

const router = new Navigo('/', {linkSelector: "a"});

// truy cập vào thẻ có id là "app"
const app = document.getElementById("app");


// hàm dùng để đổi trang
const render = (position, content) => {
  position.innerHTML = content();
};

// thường thì không nên fix cứng hàm render, nên sử dụng 1 hàm khác để gọi lại hàm để sau có chỉnh sửa logic thì dể dàng hơn
router.on("/", () => render(app, homePage));
router.on("/about", () => render(app, aboutPage));
router.notFound(() => render(app, notFoundPage)); // nếu gõ nhầm link trang



// mặc định gọi sau khi định tuyến
router.resolve();