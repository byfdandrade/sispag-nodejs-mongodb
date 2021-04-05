/**
 * Sistema SISPAG - Node.js + MongoDB
 * @author : Fernando Andrade - www.fdandrade.com.br
 * @email : dev@fdandrade.com.br
 * @version : 1.0
 * @since : 08/03/2021
 * * */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Modelo Tabela
const catPagamento = new Schema({
    name: {
        type: String,
        require: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('catPagamento', catPagamento);
