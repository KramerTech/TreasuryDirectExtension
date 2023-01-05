window.addEventListener("load", () => {
    const input = document.getElementsByClassName("pwordinput").item(0);
    const keyboard = document.getElementById("virtual_keyboard");
    if (input && keyboard) {
        input.readOnly = false;
        input.style.backgroundColor = "white";
        keyboard.remove();
        console.log("Password field is no longer read-only");
    } else {
        console.log("Password enabler failed");
    }
}); 