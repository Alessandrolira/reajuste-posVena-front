export type EmpresaType = {
  idEmpresa: number;
  nomeEmpresa: string;
  statusRenovacao: string;
  dtAniversario: string;
  operadora: string;
  modalidade: string;
};

export interface TypeTabela {
  interacoes: EmpresaType[];
}
