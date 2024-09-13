import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

// khi người dùng gõ nhầm đường link
export const notFoundPage = () => {
    return `
    ${Header()}
    <div class="container">
        <h1>404 NOT FOUND</h1>
        <a href="/">go back home</a>
    </div>
    ${Footer()}
    `
}