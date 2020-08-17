
const msgTo = "jttilley007@yahoo.com";


$(".submit").click(e => {
    e.preventDefault();

    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();
    console.log(name);
    console.log(email);
    console.log(message);

    // make sure there is enough info to send a message
    if (name !== "") {
        if (email === "") {
            return alert("Your email is missing!");
        } 
    } else {
        if (message === "") {
            return alert("Please enter your name and a message before submitting the form.");
        }
    }

    const msgSubject = `Portfolio msg from ${name}`
    console.log('msgSubject: ', msgSubject);

    $.ajax({
        type: "POST",
        url: "/services/Mail.asmx/SendMail",
        cache: false,
        contentType: "application/json; charset=utf-8",
        data: "{ 'body':'"  + message + "'," +
            "'to': '" + msgTo + "'," +
            "'from': '" + email + "'," +
            "'subject': " + msgSubject + "'" +
            "}",
        dataType: "json",
        complete: function (transport) { if (transport.status == 200) $("#formcontainer").html("Success"); else alert("Please try again later"); }
    });
})