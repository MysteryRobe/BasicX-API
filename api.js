const express = require('express');
const app = express();
const settings = require('./settings.json');


app.get("/passwordGenerator/:lengthPass/:canUpper/:canNumber/:canSymbols", (req, res) => {
    try {
        const length = parseInt(req.params.lengthPass);
        
        // 1. Corrigido as validações de texto para Booleano
        const canUpper = req.params.canUpper === 'true';
        const canNumber = req.params.canNumber === 'true';
        const canSymbols = req.params.canSymbols === 'true';

        // Caracteres base (sempre ativos)
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+{}|:<>?-=[]\\;',./"; // Adicionada barra invertida extra para escapar a outra '\\'

        // 2. Monta o "banco" de caracteres permitidos para essa senha
        let allowedChars = lowercase;
        if (canUpper) allowedChars += uppercase;
        if (canNumber) allowedChars += numbers;
        if (canSymbols) allowedChars += symbols;

        // Validação caso o tamanho seja inválido
        if (isNaN(length) || length <= 0) {
            return res.status(400).json({ error: "O tamanho da senha deve ser um número maior que 0." });
        }

        // 3. Gera a senha sorteando diretamente do banco permitido
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }  

        // Retorna a senha gerada
        res.json({ password: password });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }   
});
app.get('/convertToFahrenheit/:celsius', (req, res) => {
    try { 

    let fahrenheit = (req.params.celsius * 9 / 5) + 32;
    res.json({ fahrenheit });

    }catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/convertToCelsius/:fahrenheit', (req, res) => {
    try {       

    let celsius = (req.params.fahrenheit - 32) * 5 / 9;
    res.json({ celsius });  
     }catch (error) {
        res.status(400).json({ error: error.message });
    }});

app.listen(settings.port, () => {
    console.log(`Api Server is running on port ${settings.port}`);
});
