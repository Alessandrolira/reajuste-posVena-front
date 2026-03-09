import { InteracaoType } from "./TypeTabela";

export type NegociacaoType = {
  idReajuste: number;
  statusNegociacao: string;
  dtAbertura: string;
  propostaInicia: number;
  valorAtual: number;
  valorAposReajuste: number;
  aumentoDe: number;
  observacaoReajuste: string;
  historicoInteracao: InteracaoType[];
};

export interface TypeTabela {
  interacoes: NegociacaoType;
}
