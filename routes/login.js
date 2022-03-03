window.addEventListener('load', function() {
    async function callLoginAPI() {
        const location = "localhost";

        const data = {
            "username": document.getElementById('userName').value,
            "password": document.getElementById('password').value
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
            const fetchResponse = await fetch(`http://${location}:5000/api/signin/`, settings);
            const data = await fetchResponse.json();
            sessionStorage.setItem('loginedUserName', data.user.name);
            document.location.href = "../view/productdetails.html";
            return data;
        }

        catch (e) {
            document.getElementById('invalid-credentials').style.display = 'block';
            return e;
        }
    };


    let forms = document.getElementsByClassName('needs-validation');
    let validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            document.getElementById('invalid-credentials').style.display = 'none';
            event.preventDefault();
            event.stopPropagation();

            if (form.checkValidity()) {
                callLoginAPI();
            }

            form.classList.add('was-validated');
        },false);
    });
    
},false);
