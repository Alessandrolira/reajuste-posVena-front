"use client";

import { useParams } from "next/navigation";
import Cabecalho from "../../../components/Cabecalho";

export default function Empresa() {
  const params = useParams();

  const empresa = params.empresa as string;
  const empresaFormatada = empresa.replace(/%20/g, " ").toUpperCase();

  return (
    <div>
      <Cabecalho nomeEmpresa={empresaFormatada}></Cabecalho>
    </div>
  );
}
