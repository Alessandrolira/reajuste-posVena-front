export type AnalistaType = {
  id: number;
  nome: string;
};

export interface TypeTabela {
  interacoes: AnalistaType[];
}
