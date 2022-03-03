window.addEventListener('load', function() {
    let name = sessionStorage.getItem('loginedUserName');
    document.getElementById('logined-user-name').innerText = name;
    
    async function callsaveproductAPI() {
        const location = "localhost";

        const data = {
            "productName": document.getElementById('productName').value,
            "price": document.getElementById('price').value,
            "quantity": document.getElementById('quantity').value,
            "vendor": document.getElementById('vendor').value,
            "warranty": document.getElementById('warranty').value
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
            const fetchResponse = await fetch(`http://${location}:5000/api/productManagement/saveProduct/`, settings);
            const data = await fetchResponse.json();
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
                callsaveproductAPI();
            }

            form.classList.add('was-validated');
        },false);
    });

});