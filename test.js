async function callme(){


    const data = {
        name: 'Joseph',
        salary: 15000,
        age: 25,
        boss: 'Vijay'
    };

    try {
        const response = await fetch('http://localhost:4000/customer/createCustomer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        });

        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

callme();