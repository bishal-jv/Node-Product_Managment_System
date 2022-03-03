window.addEventListener('load', function() {
    async function callsignUpAPI() {
        const location = "localhost";

        const data = {
            "name": document.getElementById('name').value,
            "contact": document.getElementById('contact').value,
            "email": document.getElementById('email').value,
            "username": document.getElementById('uName').value,
            "password": document.getElementById('pwd').value
        }

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        try {
            const fetchResponse = await fetch(`http://${location}:5000/api/register/`, settings);
            const data = await fetchResponse.json();
            sessionStorage.setItem('loginedUserName', data.user.name);
            document.location.href = "../view/productdetails.html";
            return data;
        } 
        
        catch (e) {
            return e;
        }

    };


    let forms = document.getElementsByClassName('needs-validation');
    let validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();

            if (form.checkValidity()) {
                callsignUpAPI();
            }

            form.classList.add('was-validated');
        },false);
    });

},false);