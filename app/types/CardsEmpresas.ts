export type CardsEmpresasType = {
  idEmpresa: number;
  nomeEmpresa: string;
  operadora: string;
  modalidade: string;
  statusRenovacao: string;
  aniversario: string;
  ultimoReajuste: number;
  economiaTotal: number;
  porcentagemUltimoReajuste: number;
};

export interface TypeTabela {
  interacoes: CardsEmpresasType[];
}
