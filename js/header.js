//when sign in pressed this function calls and display block
function openSignIn() {
    document.getElementById('signInModal').style.display='block';
}
//when sign up pressed this function calls and display block
function openSignUpButton() {
    document.getElementById('signUpModal').style.display='block';
}
// on close modal disappear
function onCloseModalClicked() {
    document.getElementById('signInModal').style.display='none';
    document.getElementById('signUpModal').style.display='none';
}

