import {EntityRepository, Not, getRepository, Repository} from 'typeorm';
import Base from '../models/Base';

interface dates {
  initialDate: Date,
  finalDate: Date
}

    // .where("base.estado != :valor", {valor: "0"})
@EntityRepository(Base)
class BaseRepository extends Repository<Base>{

  public async getQuery(
    startDateFilter: string,
    endDateFilter: string,
    uf:string,
    produto:string
    ): Promise<Base[]> {

    const query = await getRepository(Base).createQueryBuilder("base");

    if(startDateFilter){
      
      query.where(`base.data >= :startDate`, {startDate: startDateFilter})
    }
    if(endDateFilter){
      query.where(`base.data <= :endDate`, {endDate: endDateFilter})
    }

    if(uf){
      query.andWhere(`base.uf = :uf`, {uf: uf})
    }
    if(produto){
      query.andWhere(`base.produto = :produto`, {produto: produto})
    }
    let objectBase = await query.getMany();
    return objectBase;
  }
}
export default BaseRepository;