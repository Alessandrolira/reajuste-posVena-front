export type InteracaoType = {
  id: number;
  ano: string;
  tipo: string;
  porcentagemProposta: number;
  valorAtual: number;
  vlMensalResultante: number;
  dtInteracao: string;
  observacao: string;
  isAceita: boolean;
};

export interface TypeTabela {
  interacoes: InteracaoType[];
}
