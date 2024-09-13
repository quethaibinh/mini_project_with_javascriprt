import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const aboutPage = () => {
    return `
    ${Header()}
    <div class="container">
        <h1>About</h1>
    </div>
    ${Footer()}
    `;
};