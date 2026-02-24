export type InteracaoType = {
  id: number;
  ano: string;
  tipo: string;
  porcentagem_proposta: number;
  valor_atual: number;
  vl_mensal_resultante: number;
  dt_interacao: string;
  observacao: string;
  is_aceita: boolean;
};

export interface TypeTabela {
  interacoes: InteracaoType[];
}
