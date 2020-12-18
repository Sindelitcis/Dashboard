import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('base')
class Base {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('date')
  data: Date; 
  @Column('int4')
  hora: number;
  @Column('int4')
  dia: number;
  @Column('int4')
  mes: number;
  @Column('varchar')
  uf: string;
  @Column('varchar')
  estado: string;
  @Column('int4')
  alo: number;
  @Column('int4')
  cpc: number;
  @Column('int4')
  cpca: number;
  @Column('int4')
  pp: number;
  @Column('int4')
  cliente_nao_esta: number;
  @Column('int4')
  cliente_nao_validou: number;
  @Column('int4')
  desconhece: number;
  @Column('int4')
  desconhece_divida: number;
  @Column('int4')
  falecido: number;
  @Column('int4')
  fone_mudo: number;
  @Column('int4')
  lig_perdida: number;
  @Column('int4')
  preventivo: number;
  @Column('int4')
  alega: number;
  @Column('int4')
  retorno_agendado: number;
  @Column('int4')
  dados_invalidos: number;
  @Column('int4')
  sem_interesse: number;
  @Column('int4')
  nao_tabulada: number;
  @Column('int4')
  retorno_indireto: number;
  @Column('int4')
  fraude: number;
  @Column('int4')
  ocupado: number;
  @Column('int4')
  recept: number;
  @Column('int4')
  processo_juridico: number;
  @Column('int4')
  contestacao: number;
  @Column('float8')
  valor: number;
  @Column('varchar')
  tipo: string;
  @Column('varchar')
  produto: string;
}

export default Base;