
function SatınAl() {
    alert("Giriş sayfasına yönlendiriliyorsunuz");
    window.location.href = "login.html";
}


function girisYap() {
    let kullanici = document.getElementById("kullanici").value;
    let sifre = document.getElementById("sifre").value;

    if (kullanici === "admin" && sifre === "1234") {
        alert("Giriş başarılı!");
        window.location.href = "payment.html";
    } else {
        alert("Kullanıcı adı veya şifre yanlış!");
    }
}


function odemeTamamla() {
    alert("Ödeme başarıyla tamamlandı. Teşekkür ederiz 😊");
}