import Base from'../models/Base';
interface ppValue {
  ppTotal: number;
  ppAverage: number;
}

class GetPpAverageService {
  public async execute(baseArray: Base[]): Promise<ppValue> {

    let ppTotal = 0;
    let totalDB = baseArray.length;
    for(let i=0; i < baseArray.length; i++){
      ppTotal += baseArray[i].pp;
    }
    let ppV:ppValue = {
      ppAverage: ppTotal/totalDB,
      ppTotal: ppTotal,
    };
    return ppV;
  }
}
export default GetPpAverageService;