import { InteracaoType } from "./TypeTabela";

export type ReajusteType = {
  idReajuste: number;
  statusNegociacao: string;
  anoUltimoReajuste: string;
  porcentagemOferecida: number;
  porcentagemFechada: number;
  economiaPercentual: number;
  economiaReal: number;
  valorPrimeiraFatura: number;
  mediaReducao: number;
  valorComPrimeiraPorcentagem: number;
  valorComPorcentagemFechada: number;
  porcentagensFinaisIniciais: [
    {
      ano: number;
      operadora: number;
      corretora: number;
    },
  ];
  historicoInteracao: InteracaoType[];
};

export interface TypeTabela {
  interacoes: ReajusteType[];
}
