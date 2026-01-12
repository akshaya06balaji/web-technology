function validateForm() {

    var fname = document.regForm.fname.value;
    var lname = document.regForm.lname.value;
    var password = document.regForm.password.value;
    var email = document.regForm.email.value;
    var mobile = document.regForm.mobile.value;
    var address = document.regForm.address.value;

    // Validate First Name
    var namePattern = /^[A-Za-z]+$/;
    if (!fname.match(namePattern) || fname.length < 6) {
        alert("First Name must contain only alphabets and be at least 6 characters long");
        return false;
    }

    // Validate Password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Validate Email
    var emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        alert("Invalid Email Format");
        return false;
    }

    // Validate Mobile Number
    var mobilePattern = /^[0-9]{10}$/;
    if (!mobile.match(mobilePattern)) {
        alert("Mobile Number must contain exactly 10 digits");
        return false;
    }

    // Validate Last Name
    if (lname === "") {
        alert("Last Name cannot be empty");
        return false;
    }

    // Validate Address
    if (address === "") {
        alert("Address cannot be empty");
        return false;
    }

    alert("Registration Successful");
    return true;
}
