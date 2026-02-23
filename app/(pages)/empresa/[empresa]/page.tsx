"use client";

import { useParams } from "next/navigation";
import Cabecalho from "../../../components/Cabecalho";
import CartaoDados from "../../../components/CartaoDados";
import CartaoValores from "../../../components/CartaoValores";
import Image from "next/image";
import Grafico from "../../../components/Grafico";

export default function Empresa() {
  const params = useParams();

  const empresa = params.empresa as string;
  const empresaFormatada = empresa.replace(/%20/g, " ").toUpperCase();

  return (
    <div>
      <Cabecalho nomeEmpresa={empresaFormatada}></Cabecalho>
      <div className="py-8.5 px-19.75 ">
        <p className="text-2xl mb-8.5">Ultimo Reajuste (2025)</p>
        <div className="flex gap-8 mb-8.5">
          <CartaoDados
            titulo="Reajuste Oferecido"
            valor="17,5%"
            corDestaque="vermelho"
          ></CartaoDados>
          <CartaoDados
            titulo="Reajuste Negociado"
            valor="10,5%"
            corDestaque="verde-escuro"
          ></CartaoDados>
          <CartaoDados
            titulo="Economia Percentual"
            valor="6,5%"
            corDestaque="verde-escuro"
          ></CartaoDados>
          <CartaoDados
            titulo="Economia Estimada"
            valor="R$ 6.600,00"
            corDestaque="verde-escuro"
          ></CartaoDados>
        </div>
        <div className="flex gap-8">
          <CartaoValores
            titulo="FATURA SEM NEGOCIAÇÃO"
            valor="R$ 140.400,00"
            valorBase="R$ 120.000,00"
            porcentagem="17%"
            corPredominante="vermelho"
          ></CartaoValores>
          <CartaoValores
            titulo="FATURA FINAL NEGOCIADA"
            valor="R$ 132.600,00"
            valorBase="R$ 120.000,00"
            porcentagem="10,5%"
            corPredominante="verde"
          ></CartaoValores>
          <CartaoValores
            titulo="FATURA FINAL NEGOCIADA"
            valor="R$ 132.600,00"
            valorBase="R$ 120.000,00"
            porcentagem="10,5%"
            corPredominante="verde"
          ></CartaoValores>
        </div>
        <div className="flex gap-2 my-8.5 items-center bg-(--laranja-claro) w-max py-0.5 px-4 rounded-md border border-(--laranja)">
          <Image
            src="/medalha.png"
            alt="Gráfico de evolução do reajuste"
            width={20}
            height={20}
          ></Image>
          <p className="text-(--laranja)">
            Negociação de Alta Performance - média de 5,8% de redução
          </p>
        </div>
        <div className="bg-(--branco) p-10 rounded-lg border border-(--cor-borda)">
          <p>OFERECIDO VS NEGOCIADO POR ANO</p>
          <Grafico
            valoresX={["2023", "2024", "2025", "2026"]}
            valoresOperadora={[17.5, 18.0, 17.5, 18.5]}
            valoresCorretora={[10.5, 11.0, 10.5, 11.5]}
          />
        </div>
      </div>
    </div>
  );
}
