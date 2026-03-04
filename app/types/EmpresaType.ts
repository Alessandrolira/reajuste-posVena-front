import { InteracaoType } from "./TypeTabela";

export type EmpresaType = {
  nomeEmpresa: string;
  statusRenovacao: string;
  modalidade: string;
  operadora: string;
  ultimoReajusteOferecido: number;
  ultimoReajusteFechado: number;
  economiaPercentual: number;
  economiaReal: number;
  valorUltimaFatura: number;
  valorFechado: number;
  valorComPrimeiraPorcentagem: number;
  porcentagensIniciaisFinais: [
    { operadora: number; corretora: number; motivoEncerramento: string },
  ];
  linhaTempo: [
    { ano: number; porcentagemFechada: number; economiaPorcentagem: number },
  ];
  historicoInteracao: InteracaoType[];
};

export interface TypeTabela {
  interacoes: EmpresaType[];
}
