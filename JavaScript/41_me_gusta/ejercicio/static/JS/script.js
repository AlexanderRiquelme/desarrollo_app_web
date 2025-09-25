function liked(element) {
    let like = parseInt(element.innerText);
    if (parseInt(element) == 0){
        element.innerText = 1;
    } else {
        like++
        element.innerText = `${like} Likes`
    }
}

function login(element){
    if (element.innerText == "login") {
        element.innerText = "logout"
    } else {
        element.innerText = "login"
    }
}

function hide(element){
    element.remove();
}