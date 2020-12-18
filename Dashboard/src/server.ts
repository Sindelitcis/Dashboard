import express from 'express';
import GetQueryService from './services/GetQueryService';
import './database';
const app = express();
const port = 3333;
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  next();
});

app.post('/', async (request, response)=>{
  try {
    let {startDateFilter, endDateFilter, uf, produto} = request.body;
    
    const getQueryService = new GetQueryService();
    const query = await getQueryService.execute(startDateFilter, endDateFilter, uf, produto);

    return response.json(query);
  }catch(err) {
    console.log(err);
    return response.status(400).json({message: "Algo deu errado"});
  }
})

app.listen(port, () => {
  console.log(`🚀🚀🚀🚀  Servidor rodando na porta ${port} 🚀🚀🚀🚀 `);
})