const API_URL='https://dummyjson.com'

export async function getAllProducts() {
    const response = await fetch(`${API_URL}/products?limit=42`);
    const responseJson = await response.json();
    return responseJson.products;
}

export async function getProductbyID(id) {
    const response = await fetch(`${API_URL}/products/${id}`);
    const responseJson = await response.json();
    return responseJson;
}

export async function loginUser(username, password) {
    const response = await fetch(`${API_URL}/auth/login`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 30
            })
        })
        const responseJson = await response.json();
        return responseJson.token;
};