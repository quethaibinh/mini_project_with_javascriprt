import { router } from "../../main";
import api from "../apis";
import { validLogin } from "../validations/auth";

export const HandleLogin = () => {
    document.getElementById("sub").addEventListener('click', login);
}

async function login(event){
    event.preventDefault(); // giữ cho không bị reload lại trang khi nhập sai thông tin.
    try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const user = {
            email: email,
            password: password
        };
        // console.log(user);
        if(validLogin({...user})){
            try {
                const res = await api.post("/login", user);
                console.log(res);
                if(res.data){
                    sessionStorage.setItem("user", JSON.stringify(res.data)); // sessionStorage chỉ lưu được dạng string
                    router.navigate('/');
                }
            } catch (error) {
                console.log(error);
                let ress = document.getElementById("loginMessage");
                ress.innerHTML = `<h2>email hoặc mật khẩu không đúng</h2>`;
            }
        }
        else{
            let ress = document.getElementById("loginMessage");
            ress.innerHTML = `<h2>không để trống ô email hoặc mật khẩu</h2>`;
        }
    } catch (error) {
        console.log(error);
    }
}