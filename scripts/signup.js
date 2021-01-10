// The sign up form.
const form = document.querySelector("#signUp");

// When the form is submitted, write to firebase auth and put an account into the users collection.
form.addEventListener("submit", event => {
    event.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    auth.createUserWithEmailAndPassword(email, password).then(token => {
        return db.collection("users").doc(token.user.uid).set({
            username: form.username.value,
            artist1: form.artist1.value,
            recommended1: form.recommended1.value
        });
    }).then(token => {
        form.reset();
        location.href = "homepage.html"
    }).catch(error => {
        console.log(error.code);
        console.log(error.message);
    });
});