import axios from 'axios';

const JsonService = {
  getJson(tema) { //o es2015 permite declararmos funções dessa forma sem a necessidade de function 
    return axios.get(`../Temas/Perguntas`); //o es2015 permite essa nova forma com ${variavel}
  }
};

module.exports = JsonService;