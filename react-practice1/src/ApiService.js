const ApiService = {
    Get: () => {
        return fetch('http://localhost:8000/api/autor')
            .then(res => res.json());
    },
    Create: autor => {
        return fetch('http://localhost:8000/api/autor', { method: 'POST', headers: { 'content-type': 'application/json' }, body: autor })
            .then(res => res.json());
    },
    ListNomes: () => {
        return fetch('http://localhost:8000/api/autor/nome')
            .then(res => res.json());
    },
    ListLivros: () => {
        return fetch('http://localhost:8000/api/autor/livro')
            .then(res => res.json());
    },
    RemoveAutor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`, { method: 'DELETE', headers: { 'content-type': 'application/json' } })
            .then(res => res.json());
    }
}
export default ApiService;