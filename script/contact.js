
let button = document.getElementById("Button");
let name = document.getElementById("Name");
let email = document.getElementById("Email");
let message = document.getElementById("Message");

var inputlar = [name, email, message];

button.addEventListener("click", function () {
    if (name.value == "") {
        alert("Lütfen isminizi giriniz.");
    }
    else if (email.value == "") {
        alert("Lütfen e-posta adresinizi giriniz.");
    }
    else if (message.value == "") {
        alert("Lütfen mesajınızı giriniz.");
    }
    else {
        alert("Mesajınız başarıyla gönderildi.");
        name.value = "";
        email.value = "";
        message.value = "";
    }
});

setInterval(function () {
    inputlar.forEach(element => {
        if (element.value != "") {
            element.style.border = "1px solid green";
        }
        else {
            element.style.border = "1px solid white";
        }
    });
}, 100);

let gecen_sure = document.getElementById("gecen_sure");
let i = 1;
setInterval(function () {
    gecen_sure.innerHTML = "Geçen Süre: " + i + " saniye";
    i++;
}, 1000);



