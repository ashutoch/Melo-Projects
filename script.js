document.getElementById("meloForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let formURL = "https://docs.google.com/forms/d/e/1FAIpQLScgPHI7KlUC-rn3EeTan0-h50GdGeGIlbYMou-TGuVyn-oFoA/formResponse";

    let data = new FormData();
    data.append("entry.1085720875", document.getElementById("name").value);
    data.append("entry.1129820393", document.getElementById("email").value);
    data.append("entry.1407540325", document.getElementById("phone").value);
    data.append("entry.236402242", document.getElementById("rating").value);
    data.append("entry.538916946", document.getElementById("feedback").value);

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: data
    });

    alert("Thank you for your feedback ❤️");

    document.getElementById("meloForm").reset();
});