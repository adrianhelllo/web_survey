function sendMail(){
    let parms = {
        email : document.getElementById("email").value,
        name : document.getElementById("name").value,
        rating : document.getElementById("rate").value,
        before : document.getElementById("before").value,
        cool : document.querySelector('input[name="cool"]:checked'),
        number : document.getElementById("number").value,
        flavour : document.querySelectorAll("input[name='flavour']:checked"),
        experience : document.getElementById("experience").value
    }

    emailjs.send("service_dtr1jdf", "template_z4lqrgh", parms).then(alert("Email sent"))
}