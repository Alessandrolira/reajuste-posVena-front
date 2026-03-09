import { EmpresaType } from "./EmpresaType";
import { ReajusteType } from "./ReajusteType";
import { InteracaoType } from "./TypeTabela";

export type CardsEmpresaType = {
  empresa: EmpresaType;
  ultimoReajuste: ReajusteType | null;
  historicoInteracoes: InteracaoType[] | null;
};

export interface TypeTabela {
  interacoes: CardsEmpresaType[];
}
