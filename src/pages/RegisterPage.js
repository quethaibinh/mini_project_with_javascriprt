import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import './register.css'

export const registerPage = () => {
    const htmls = `
    ${Header()}
    <div class="BodyRegister">
        <div id="SignUp" class="tab-content">
            <h2>Sign Up</h2>
            <form id="signUpForm">
                <label for="newEmail">Email:</label>
                <input type="email" id="newEmail" name="newEmail" required>
                
                <label for="newPassword">Password:</label>
                <input type="password" id="newPassword" name="newPassword" required>

                <label for="passwordConfim">PasswordConfim:</label>
                <input type="password" id="passwordConfim" name="passwordConfim" required>
                
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="sex">Sex:</label>
                <input type="text" id="sex" name="sex" required>
                
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" required>
                
                <button type="submit" id="sub">Sign Up</button>
            </form>
            <div id="signUpMessage"></div>
        </div>
    </div>
    ${Footer()}
    `
    return htmls;
};