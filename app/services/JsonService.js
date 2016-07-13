/**
 * Esser serviço serve para carregar os jsons que serão utilizados
 * por esta aplicação
**/
import axios from 'axios';
import BrancoJsonData from 'json!../JsonData/BrancoData.json';
import TemasJsonData from 'json!../JsonData/Temas.json';
import PerguntasJsonData from 'json!../JsonData/PerguntasData.json';
import RestauranteJsonData from 'json!../JsonData/RestauranteData.json';
import ExpressoesJsonData from 'json!../JsonData/ExpressoesData.json';

const JsonService = {
  getJson(tema) { //o es2015 permite declararmos funções dessa forma sem a necessidade de function 
    return axios.get(`../Temas/Perguntas.json`); //o es2015 permite essa nova forma com ${variavel}
  },
  getJsonData(jsonDescription){
    if( jsonDescription == 'Branco' ){
      return BrancoJsonData;
    } else if( jsonDescription == 'Perguntas' ){
      return PerguntasJsonData;
    } else if( jsonDescription == 'Restaurante' ){
      return RestauranteJsonData;
    } else if( jsonDescription == 'Expressoes' ){
      return ExpressoesJsonData;
    } else if( jsonDescription == 'Temas' ){
      return TemasJsonData;
    } else {
      return null;
    }
  }
};



module.exports = JsonService;