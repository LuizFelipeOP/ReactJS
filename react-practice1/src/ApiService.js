const ApiService = {
    Get: () => {
        return fetch('http://localhost:8000/api/autor')
            .then(res => ApiService.ErrorLog(res))
            .then(res => res.json());
    },
    Create: autor => {
        return fetch('http://localhost:8000/api/autor', { method: 'POST', headers: { 'content-type': 'application/json' }, body: autor })
            .then(res => ApiService.ErrorLog(res))
            .then(res => res.json());
    },
    ListNomes: () => {
        return fetch('http://localhost:8000/api/autor/nome')
            .then(res => ApiService.ErrorLog(res))
            .then(res => res.json());
    },
    ListLivros: () => {
        return fetch('http://localhost:8000/api/autor/livro')
            .then(res => ApiService.ErrorLog(res))
            .then(res => res.json());
    },
    RemoveAutor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`, { method: 'DELETE', headers: { 'content-type': 'application/json' } })
            .then(res => ApiService.ErrorLog(res))
            .then(res => res.json());
    },
    ErrorLog: res => {
        if (!res.ok) {
            throw Error(res.responseText);
        }
        return res;
    }
}
export default ApiService;