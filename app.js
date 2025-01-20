const express = require("express");
const cors = require("cors"); // Importa o middleware CORS
const app = express();

app.use(cors()); // Permite requisições de qualquer origem

app.use(express.json());

let cont = 0;

// Rota GET para obter o contador
app.get('/contador', function(req, res) {
    res.json({ contador: cont });
});

// Rota POST para incrementar o contador
app.post('/contador/incrementar', function(req, res) {
    const numero = req.body.numero; 
    if (numero) {
        cont += numero;
    } else {
        cont++; // Caso não envie um número, incrementa 1
    }
    res.json({ contador: cont });
});

// Rota POST para decrementar o contador
app.post('/contador/decrementar', function(req, res) {
    const numero = req.body.numero;
    if (numero) {
        cont -= numero;
    } else {
        cont--; // Caso não envie um número, decrementa 1
    }
    res.json({ contador: cont });
});

// Iniciando servidor
app.listen(3004, () => {
    console.log('Servidor rodando com sucesso');
});
