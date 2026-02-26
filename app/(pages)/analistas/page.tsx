"use client";

import Cabecalho from "@/app/components/Cabecalho";
import { useState } from "react";
import InputTexto from "@/app/components/InputTexto";
import BotaoCancelar from "@/app/components/BotaoCancelar";
import BotaoConfirmar from "@/app/components/BotaoConfirmar";
import CardAnalista from "@/app/components/CardAnalista";

export default function Analistas() {
  const [toggleAdicionarAnalista, setToggleAdicionarAnalista] = useState(false);

  function ToggleAdicionarAnalista() {
    setToggleAdicionarAnalista(!toggleAdicionarAnalista);
  }

  function adicionarAnalista() {
    console.log("Adicionando analista");
  }

  return (
    <div>
      {toggleAdicionarAnalista && (
        <div className="fixed inset-0 bg-(--preto)/80 flex items-center justify-center z-50">
          <div className="bg-(--branco) rounded-lg p-8 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Adicionar Novo Analista</h2>
            <form className="flex flex-col gap-5">
              <InputTexto
                label="Nome Analista"
                placeholder="Ex: Ana Costa"
                name="nomeAnalista"
                tipoData="text"
              ></InputTexto>
              <div className="flex justify-end gap-3">
                <BotaoCancelar
                  onClickToggleEmpresa={ToggleAdicionarAnalista}
                ></BotaoCancelar>
                <BotaoConfirmar
                  onClickAdicionarEmpresa={adicionarAnalista}
                ></BotaoConfirmar>
              </div>
            </form>
          </div>
        </div>
      )}
      <Cabecalho
        eh_analista
        onClickAdicionarAnalista={ToggleAdicionarAnalista}
      ></Cabecalho>
      <div className="py-8.5 px-19.75">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <CardAnalista nome="Lydiane Guimaraes" id={4}></CardAnalista>
          <CardAnalista nome="Lydiane Guimaraes" id={4}></CardAnalista>
          <CardAnalista nome="Lydiane Guimaraes" id={4}></CardAnalista>
          <CardAnalista nome="Lydiane Guimaraes" id={4}></CardAnalista>
          <CardAnalista nome="Lydiane Guimaraes" id={4}></CardAnalista>
          <CardAnalista nome="Lydiane Guimaraes" id={4}></CardAnalista>
        </div>
      </div>
    </div>
  );
}
