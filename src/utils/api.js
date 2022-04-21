import { config } from './config';

const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка : ${res.status}`);
};

class Api {
    constructor({ url, token }) {
        this._url = url;
        this._token = token;
    }

    getProducts(itemID) {
        const requestURL = itemID ? `${this._url}/products/${itemID}` : `${this._url}/products`
        return fetch( requestURL , {
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(onResponce);
    }
    
    addProduct(product) {
        return fetch(`${this._url}/products`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${this._token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        }).then(onResponce);
    }

    deleteProduct(itemID) {
        return fetch(`${this._url}/products/${itemID}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(onResponce)
    }

    search(searchQuery) {
        return fetch(`${this._url}/products/search?query=${searchQuery}`, {
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(onResponce);
    }

    addLike(itemID) {
        return fetch(`${this._url}/products/likes/${itemID}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(onResponce);
    }
    
    removeLike(itemID) {
        return fetch(`${this._url}/products/likes/${itemID}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(onResponce);
    }
    getCurrentUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(onResponce);
    }

}

export default new Api(config);
