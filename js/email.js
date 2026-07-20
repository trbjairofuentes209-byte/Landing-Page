emailjs.init({
    publicKey: "UYVHlpZKaK-yj2hXx"
});

const formulario = document.getElementById("contact-form");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_yq6uxmp",
        "template_p3cyloa",
        this
    )
    .then(() =>{

        alert("¡Mensaje enviado correctamente!");

        formulario.reset();

    })
    .catch((error)=>{

        alert("Ocurrió un error.");

        console.log(error);

    });

});