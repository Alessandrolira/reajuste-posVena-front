import { EmpresaType } from "./EmpresaType";
import { ReajusteType } from "./ReajusteType";

export type CardsEmpresaType = {
  empresa: EmpresaType;
  ultimoReajuste: ReajusteType | null;
};

export interface TypeTabela {
  interacoes: CardsEmpresaType[];
}
