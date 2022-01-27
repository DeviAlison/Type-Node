const express = require('express'); // aqui acontece o import do pacote necessário nessa parte

const app = express(); // Aqui acontece a criação de uma instância (objeto cujos métodos são definidos pela classe) da classe express

app.get('/projects', (request, response) => { // o '/projects' é equivalente a rota que vai ser acessada; Na arrow function que se segue os request e o response são passados como parâmetros da função
    return response.json([ // Essa resposta gerada no browser já é considerada um endpoint
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([ // Essa resposta gerada no browser já é considerada um endpoint
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ]);
})

app.put('/projects', (request, response) => {
    return response.json([ // Essa resposta gerada no browser já é considerada um endpoint
        'Projeto 5',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ]);
})
 
app.delete('/projects', (request, response) => {
    return response.json([ // Essa resposta gerada no browser já é considerada um endpoint
        'Projeto 5',
        'Projeto 2',
        'Projeto 4'
    ]);
})
 

app.listen(3545, () => {
    console.log('Backend started!'); //mensagem que aparece no terminal quando o servidor for iniciado
}); // http://localhost:3333

