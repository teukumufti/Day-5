function submitData () {

    
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value
    
        console.log(name)
        console.log(email)
        console.log(phone)
        console.log(subject)
        console.log(message)
    
    
    
    if (name == "") {
        return alert("nama tidak boleh kosong")
    } else if (email == "") {
        return alert("email tidak boleh kosong")
    } else if (phone == "") {
        return alert("phone tidak boleh kosong")
    } else if (subject == "") {
       return alert("subject tidak boleh kosong")
    } else if (message == "") {
        return alert("message tidak boleh kosong")
    }


    
    let emailReceiver = "teukumuftii@gmail.com"
    
    let a = document.createElement ("a") //pembuatan tag anchor / a
    
        a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo my name ${name}, ${subject}, ${message}`
        a.click() //menjalankan tag anchor

}





