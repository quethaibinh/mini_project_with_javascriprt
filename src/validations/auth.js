// valid đối tượng đăng kí, không để trống khoảng nào.
export function validRegister(user){
    if(!user.email || !user.password || !user.passwordConfim || !user.name || !user.sex || !user.age) return false;
    if(user.password != user.passwordConfim) return false;
    return true;
}

// valid login
export function validLogin(user){
    if(!user.password || !user.email) return false;
    return true;
}