function renderMe(user) {
    $("#log").text("Hello, " + user.displayName + ".");

    let url = user.photoURL;
    if (!url) {
        console.log("Falling back to defualt url")
        url = "https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png";
    }

    $("#pfp").attr("src", url);
}

function renderLearn(user) {
    $("navbar-title").text(user.displayName);
}


const config = {
    apiKey: "AIzaSyC0yaoAE6qt1oEzHT4ueZZUrNFMN-3U8nE",
    authDomain: "bigbrain-c56d1.firebaseapp.com",
    databaseURL: "https://bigbrain-c56d1.firebaseio.com",
    projectId: "bigbrain-c56d1",
    storageBucket: "bigbrain-c56d1.appspot.com",
    messagingSenderId: "126863628981",
    appId: "1:126863628981:web:f777031fa40de4be37fcfc",
    measurementId: "G-7VYVV8F7ZH"
};

// Firebase Core
firebase.initializeApp(config);

// Analytics
firebase.analytics();
const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
    // If user is logged in
    if (user) {
        if (document.getElementById("me")) {
            renderMe(user);
        } else if (document.getElementById("navbar-title")) {
            renderLearn(user);
        } else if (document.getElementById("login-form")) {
            window.location.href = "../me";
        } else {
            // Navbutton is become "me"
            $("#nav-btn").parent().parent().attr("href", "/me");
            $("#nav-btn").text("Account");
        }
    } else {
        // If no user is logged in
        if (document.getElementById("me") || document.getElementById("app-config")) {
            window.location.href = "/login";
        }
    }
});

const loginForm = document.querySelector("#login-form");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = loginForm["email"].value;
        const password = loginForm["pswd"].value;

        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error);
                let errorMsg = error.message;
                const code = error.code;

                if (code == "auth/user-not-found") {
                    errorMsg = "Hmmm...looks like this user doesn't exist.";
                } else if (code == "auth/wrong-password") {
                    errorMsg = "Incorrect password."
                }

                $("#log").text(errorMsg);
            });
    })
}

const signupForm = document.querySelector("#signup-form");
if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = signupForm["email"].value;
        const password = signupForm["pswd"].value;
        const name = signupForm["name"].value;

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                auth.currentUser.updateProfile({
                    displayName: name
                }).then(() => {
                    window.location.href = "/me";
                }).catch((error) => {
                    $("#log").text(error.message);
                    alert(error);
                })
            })
            .catch((error) => {
                console.log(error)
                $("#log").text(error.message);
            })

    })
}

const logoutBtn = document.querySelector("#logout");
if (logoutBtn) {
    logout.addEventListener("click", () => {
        auth.signOut().then(() => {
            console.log("Signed Out!");
            window.location.href = "/";
        });
    })
}

const nameChange = document.querySelector("#name-change");
if (nameChange) {
    nameChange.addEventListener("submit", (e) => {
        e.preventDefault();

        const newName = nameChange["newname-field"].value;

        if (newName != "") {
            auth.currentUser.updateProfile({
                displayName: newName
            }).then(() => {
                console.log("Name changed success!");
                renderMe(auth.currentUser);
                nameChange.reset();
                window.location.href = "#home";
            }).catch((error) => {
                $("#namechange-log").text(error.message);
            })
        }
    });
}

const pfpChange = document.querySelector("#pfp-change");
if (pfpChange) {
    pfpChange.addEventListener("submit", (e) => {
        e.preventDefault();

        let newUrl = pfpChange["photourl-field"].value;
        if (newUrl == "") {
            newUrl = "https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png";
        }

        auth.currentUser.updateProfile({
            photoURL: newUrl
        }).then(() => {
            console.log("Photo changed success!");
            renderMe(auth.currentUser);
            pfpChange.reset();
            window.location.href = "#home";
        }).catch((error) => {
            $("#photochange-log").text(error.message);
        })
    });
}

const deleteAccount = document.querySelector("#delete-account");
if (deleteAccount) {
    deleteAccount.addEventListener("submit", (e) => {
        e.preventDefault();

        const password = deleteAccount["delete-field"].value;
        auth.signInWithEmailAndPassword(auth.currentUser.email, password)
            .then(() => {
                auth.currentUser.delete()
                    .catch((error) => {
                        $("#delete-log").text(error.code);
                    });
            })
            .catch((error) => {
                if (error.code == "auth/wrong-password") {
                    $("delete-label").text("Incorrect password.");
                } else {
                    alert(error);
                }
            });
    });
}