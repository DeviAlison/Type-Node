const express = require('express'); // aqui acontece o import do pacote necessário nessa parte
const {uuid} = require('uuidv4'); // desestruturação do método uuid de dentro da dependência, apenas o método em questão

const app = express(); // Aqui acontece a criação de uma instância (objeto cujos métodos são definidos pela classe) da classe express

app.use(express.json()); // necessário definir que o padrão de utilização será json

// http://localhost:3545/projects?title=Node&owner=StephenKing

const projects = []; 

app.get('/projects', (request, response) => { // o '/projects' é equivalente a rota que vai ser acessada; Na arrow function que se segue os request e o response são passados como parâmetros da função
    const { title } = request.query;

    const results = title 
    ? projects.filter(project => project.title.includes(title)) 
    : projects;
    return response.json(results);
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

app.put('/projects/:id', (request, response) => {
    const { id } = request.params; //pega todos os parâmetros, ao contrário do query que pega os nomeados

    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);
   
    if (projectIndex < 0) {
        return response.status(400).json({error: 'Project not found.'});
    }

    const project = {
        id,
        title,
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);
})
 
app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);
   
    if (projectIndex < 0) {
        return response.status(400).json({error: 'Project not found.'});
    }

    projects.splice(projectIndex, 1);

    return response.status(204).json();
})
 

app.listen(3545, () => {
    console.log('Backend started!'); //mensagem que aparece no terminal quando o servidor for iniciado
}); // http://localhost:3333

