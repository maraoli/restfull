const axios = require('axios');

const api = axios.create({
    baseURL: 'https://cat-fact.herokuapp.com'
})

//id: '5c489117e4f6130014c987b9'
async function retornarDados(){
    await api.get('/facts')
        .then(function(res){
            console.log(res.data)
        })
}

retornarDados();