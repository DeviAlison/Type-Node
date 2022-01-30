const express = require('express'); // aqui acontece o import do pacote necessário nessa parte

const app = express(); // Aqui acontece a criação de uma instância (objeto cujos métodos são definidos pela classe) da classe express

app.use(express.json()); // necessário definir que o padrão de utilização será json

// http://localhost:3545/projects?title=Node&owner=StephenKing

app.get('/projects', (request, response) => { // o '/projects' é equivalente a rota que vai ser acessada; Na arrow function que se segue os request e o response são passados como parâmetros da função
    const { title } = request.query; // dessa maneira, pegarei o title=Batata da url apenas, mesmo que tenham mais chaves e valor
    // const query = request.query;  // dessa maneira eu vou pegar os parametros passados na url

    console.log(title);
    return response.json([ // Essa resposta gerada no browser já é considerada um endpoint
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.post('/projects', (request, response) => {
    const body = request.body; //necessário configurar o app.use para json

    console.log(body);

    return response.json([ // Essa resposta gerada no browser já é considerada um endpoint
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ]);
})

app.put('/projects/:id/owner/:owner_id', (request, response) => {
    const params = request.params; //pega todos os parâmetros, ao contrário do query que pega os nomeados

    console.log(params);

    return response.json([ // Essa resposta gerada no browser já é considerada um endpoint
        'Projeto 5',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ]);
})
 
app.delete('/projects/:id', (request, response) => {
    return response.json([ // Essa resposta gerada no browser já é considerada um endpoint
        'Projeto 5',
        'Projeto 2',
        'Projeto 4'
    ]);
})
 

app.listen(3545, () => {
    console.log('Backend started!'); //mensagem que aparece no terminal quando o servidor for iniciado
}); // http://localhost:3333

