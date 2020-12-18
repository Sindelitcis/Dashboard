import { getCustomRepository } from 'typeorm';
import BaseRepository from '../Repositories/BaseRepository';
import Base from '../models/Base'
import GetPpAverageService from './GetPpAverageService';

interface Ppvalue {
  ppAverage: number,
  ppTotal:number
}

interface QueryObj {
  ppValue: Ppvalue,
  base: Base[],

}

class GetQueryService {
  public async execute(
    startDateFilter?:string,
    endDateFilter?:string,
    uf?: string,
    produto?:string
    ): Promise<QueryObj>{
    const repoQuery = getCustomRepository(BaseRepository);

    // VALORES DE DATA ESPECÍFICA => FILTRO DE DATAS, UF E PRODUTO
    let baseArray;
    baseArray = await repoQuery.getQuery(startDateFilter, endDateFilter, uf, produto);

    // RETORNAR OS VALORES DAS PROMESSAS => MÉDIA E TOTAL
    const ppValueService = new GetPpAverageService();
    const ppValue = await ppValueService.execute(baseArray);

    const queryObj: QueryObj = {
      base: baseArray ,
      ppValue: ppValue
    }
    
    return queryObj;
  }
}
export default GetQueryService;