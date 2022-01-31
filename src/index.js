const express = require('express'); // aqui acontece o import do pacote necessário nessa parte
const {uuid} = require('uuidv4');

const app = express(); // Aqui acontece a criação de uma instância (objeto cujos métodos são definidos pela classe) da classe express

app.use(express.json()); // necessário definir que o padrão de utilização será json

// http://localhost:3545/projects?title=Node&owner=StephenKing

const projects = []; 

app.get('/projects', (request, response) => { // o '/projects' é equivalente a rota que vai ser acessada; Na arrow function que se segue os request e o response são passados como parâmetros da função
    return response.json(projects);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const id = uuid();

    const project = {
        id,
        title,
        owner
    };

    projects.push(project);

    return response.json(project);
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

