import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import './login.css'

export const loginPage = () => {
    const htmls = `
    ${Header()}
    <div class="BodyLogin">
        <div id="Login" class="tab-content active">
            <h2>Login</h2>
            <form id="loginForm">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <button id="sub" type="submit">Login</button>
            </form>
            <div id="loginMessage"></div>
        </div>
    </div>
    ${Footer()}
    `;
    return htmls;
};