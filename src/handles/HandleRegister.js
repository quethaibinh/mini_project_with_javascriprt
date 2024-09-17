import { router } from "../../main";
import api from "../apis";
import { validRegister } from "../validations/auth";

let register = async (event) => {
    event.preventDefault(); // giữ cho không bị reload lại trang khi nhập sai thông tin.
    try {
        let email = document.getElementById("newEmail");
        let password = document.getElementById("newPassword");
        let passwordConfim = document.getElementById("passwordConfim");
        let name = document.getElementById("name");
        let sex = document.getElementById("sex");
        let age = document.getElementById("age");

        let emailValue = email.value;
        let passwordValue = password.value;
        let passwordConfimValue = passwordConfim.value;
        let nameValue = name.value;
        let sexValue = sex.value;
        let ageValue = age.value;

        let user = {
            email: emailValue, 
            password: passwordValue, 
            passwordConfim: passwordConfimValue, 
            name: nameValue, 
            sex: sexValue, 
            age: ageValue
        };
        // console.log(user);
        if(validRegister({...user})){ // chuyển về object để check
            const res = await api.post("/register", user);
            console.log(res);
            if(res.data){
                // sessionStorage trong JavaScript là một loại bộ nhớ tạm thời được sử dụng để lưu trữ dữ liệu trên trình duyệt cho từng phiên duyệt web. 
                // Dữ liệu trong sessionStorage chỉ tồn tại trong thời gian phiên làm việc của trình duyệt đang mở và sẽ bị xóa khi tab hoặc cửa sổ trình duyệt bị đóng.
                sessionStorage.setItem("user", res.data);
                const confirmValue = confirm(
                    `Đăng kí thành công, bạn có muốn đăng nhập bằng gmail này không? ${res.data.user.email}`
                );
                if(confirmValue){
                    router.navigate("/login");
                }
            }
        }
        else{
            const res = document.getElementById("signUpMessage");
            res.innerHTML = `<div>thông tin chưa hợp lệ</div>`;
            console.log(res);
        }
    } catch (error) {
        console.log(error);
    }
}

export const HandleRegister = async () => {
    document.getElementById("sub").addEventListener('click', register);
}