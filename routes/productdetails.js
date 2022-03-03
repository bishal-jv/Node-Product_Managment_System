window.addEventListener('load', function() {
    let name = sessionStorage.getItem('loginedUserName');
    document.getElementById('logined-user-name').innerText = name;
    calllistproductAPI();
});

function listProductData(product) {
    let newRowProduct = '';
    if(product.length) {
        for( let i=0;i< product.length; i++ ) {
            newRowProduct += '<tr><td>'+product[i].productId+
            '</td><td>'+product[i].productName+'</td><td>'+
            product[i].price+'</td><td>'+
            product[i].vendor+'</td><td>'+
            product[i].quantity+'</td><td>'+
            product[i].warranty+'</td>'+
            '<td><a href="#" id="delete'+i+'" onclick="deleteAPI('+product[i].productId+')">Delete</a></td></tr>';
            document.getElementById('productData').innerHTML = newRowProduct;
        }
    }
    
    else {
        newRowProduct = '<td colspan="7">No Data to Display</td>'
        document.getElementById('productData').innerHTML = newRowProduct;
    }
}


async function calllistproductAPI() {
    const location = "localhost";
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };

    try {
        const fetchResponse = await fetch(`http://${location}:5000/api/productManagement/listProduct/`, settings);
        const data = await fetchResponse.json();
        listProductData(data.product);
        return data;
    } 
    
    catch (e) {
        return e;
    }
};

//delete function 
async function deleteAPI(productID) {
    if(confirm("Do you want to delete the product?")){
        const location = "localhost";
        const data = {
            "productId": productID
        }
        const settings = {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(data)
        };

        try {
            const fetchResponse = await fetch(`http://${location}:5000/api/productManagement/delete/`, settings);
            const data = await fetchResponse.json();
            calllistproductAPI();
            return data;
        } 
        
        catch (e) {
            return e;
        }
    }
};