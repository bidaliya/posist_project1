
const SignUpForm = document.getElementById("SignUpForm");
const emailPattern = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

// Minimum eight characters, at least one letter and one number:
const passPattern = ".{8,}";

const LoginForm = document.getElementById("LoginForm");


if(SignUpForm){
    SignUpForm.addEventListener("submit", handleSubmit);
    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target)
        const Name_email = data.get("nameEmail")
        const pass = data.get("password")
        const phone = data.get("password")
        const confirmPass = data.get("confirmPassword")

        // console.log(Name_email)
        // console.log(pass)
        if(verifyEmail(Name_email)){
            if(verifyPassword(pass)){
                if(verifyPhone(phone)){
                    if(confirmPass === pass){
                        var users = JSON.parse(localStorage.getItem("users") || "[]");
                        users.push({email:Name_email, pass:pass})
                        localStorage.setItem("users", JSON.stringify(users));
                        console.log("No. of users: " + users.length);
                        alert(`${Name_email} is successfully registered`)
                        window.location.href = "/Project1/Home.html"
                    }
                    else{
                        alert("Confirm password doesn't match")
                    }
                }
                else{
                    alert("Phone Criteria doesn't match")
                }
            }
            else{
                alert("Password Criteria doesn't match")
            }
        }
        else{
            alert("Email Criteria doesn't match")
        }
    }
}



if(LoginForm){
    LoginForm.addEventListener("submit", handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target)
        const Name_email = data.get("nameEmail")
        const pass = data.get("password")
        console.log(Name_email)
        console.log(pass)

        var isFound = false

        var users = JSON.parse(localStorage.getItem("users") || "[]");
       
        // users.forEach(user => {
        //     console.log(user.email);
        //     if(user.email===Name_email && user.pass === pass){
        //         isFound = true
        //     }
        // });

        // check if the user is present or not.
        users.find(function(user){
            if(user.email===Name_email 
                && user.pass === pass){
                isFound = true
                return true
                }
        })

        if(isFound){
            // alert("User found");
            window.location.href = "/Project1/Home.html"
        }
        else{
            alert("No User found")
        }    
        
    }
}

function verifyPhone(phone){
    if(phone.length==10){
        return true
    }
    return false
}

function verifyEmail(email){
    if(emailPattern.test(email)){
        return true;
    }
    return false
}

function verifyPassword(pass) {
    if(pass.match(passPattern)){
        return true;
    }
    return false
}


// function signupValidation(){
//     alert("Ehllo")
// }