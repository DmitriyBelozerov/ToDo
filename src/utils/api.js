const apiOptions = {
    baseUrl: "http://localhost:3000/itemtodo",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },

}

class Api {
    constructor(config) {
        this._header = config.headers;
        this._baseUrl = config.baseUrl;
    }

    _getJsonOrError(res) {
        if (res.ok) {
            return res.json();
        }
        throw new Error(`Ошибочка при загрузке данных с сервера`)
    }

    getItemsTodo() {
        return fetch(`${this._baseUrl}`, {
            credentials: 'include',
            headers: this._header,
        })
            .then(this._getJsonOrError)
    }

    createItemTodo(newName, newLink) {
        return fetch(`${this._baseUrl}`, {
            method: 'POST',
            credentials: 'include',
            headers: this._header,
            body: JSON.stringify({
                name: `${newName}`,
                link: `${newLink}`
            }),
        })
            .then(this._getJsonOrError)
    }

    deleteItemTodo(id) {
        return fetch(`${this._baseUrl}/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: this._header,
        })
            .then(this._getJsonOrError)
    }
}


const api = new Api(apiOptions);

export default api;