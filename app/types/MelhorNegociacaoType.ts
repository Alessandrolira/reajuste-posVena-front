export type MelhorNegociacaoType = {
  nomeEmpresa: string;
  valorEconomizado: number;
};

export interface TypeTabela {
  interacoes: MelhorNegociacaoType[];
}
