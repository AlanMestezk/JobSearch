
//imports
const express    = require('express');
const app        = express();
const db         = require('./db/connections');
const bodyParser = require('body-parser');
const router = require('./routes/jobs');


router.get('/test', (req, res)=>{
    res.send("deu certo");
})

//server port
const PORT = 3000;

//body parser
app.use(bodyParser.urlencoded({extended: false}));


app.listen(
    PORT, ()=>{
        console.log(`O express esta rodando na porta ${PORT}`)
    }
)

//====================================db conections
db
    .authenticate()
    .then(
        ()=>{
            console.log("Conectou ao banco de dado com sucesso! 🤓💾");
        }
    )
    .catch(
        err => {
            console.log(`Ocorreu uma falha na conexão com o banco de dados! 😴❌: ${err}`);
        }
    )



//====================================routes

app.get(
    "/", (req, res)=>{
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(`
            <h1>🤖Servidor rodando na porta ${PORT}</h1>
            <h4>create by: AlanMestezk</h4>
            <h6>----------------------</h6>
        `);
        res.end()
    }
);

//=============================jobs routes
app.use(
    '/jobs',
    require('./routes/jobs')
)