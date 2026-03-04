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
  mediaDeReducao: number;
  porcentagensFinaisIniciais: [
    {
      operadora: number;
      corretora: number;
      motivoEncerramento: string;
      ano: number;
    },
  ];
  linhaTempo: [
    { ano: number; porcentagemFechada: number; economiaPorcentagem: number },
  ];
  historicoInteracao: InteracaoType[];
};

export interface TypeTabela {
  interacoes: EmpresaType[];
}
