"use client";

import Cabecalho from "@/app/components/Cabecalho";
import { useEffect, useState } from "react";
import InputTexto from "@/app/components/InputTexto";
import BotaoCancelar from "@/app/components/BotaoCancelar";
import BotaoConfirmar from "@/app/components/BotaoConfirmar";
import CardAnalista from "@/app/components/CardAnalista";
import { api } from "@/app/services/api";
import { AnalistaType } from "@/app/types/AnalistaType";

export default function Analistas() {
  const [toggleAdicionarAnalista, setToggleAdicionarAnalista] = useState(false);
  const [analistas, setAnalistas] = useState([]);
  const [nomeAnalista, setNomeAnalista] = useState("");
  const [render, setRender] = useState(false);

  function ToggleAdicionarAnalista() {
    setToggleAdicionarAnalista(!toggleAdicionarAnalista);
  }

  async function adicionarAnalista(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await api.post("/analistas", {
        nome: nomeAnalista,
      });

      setRender(!render);
      ToggleAdicionarAnalista();

      console.log("Analista adicionado", response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function buscarAnalistas() {
      try {
        const response = await api.get("/analistas");
        setAnalistas(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    buscarAnalistas();
  }, [render]);

  return (
    <div>
      {toggleAdicionarAnalista && (
        <div className="fixed inset-0 bg-(--preto)/80 flex items-center justify-center z-50">
          <div className="bg-(--branco) rounded-lg p-8 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Adicionar Novo Analista</h2>
            <form onSubmit={adicionarAnalista} className="flex flex-col gap-5">
              <InputTexto
                label="Nome Analista"
                placeholder="Ex: Ana Costa"
                name="nomeAnalista"
                tipoData="text"
                valor={nomeAnalista}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNomeAnalista(e.target.value)
                }
              ></InputTexto>
              <div className="flex justify-end gap-3">
                <BotaoCancelar
                  onClickToggleEmpresa={ToggleAdicionarAnalista}
                ></BotaoCancelar>
                <BotaoConfirmar></BotaoConfirmar>
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
          {analistas.map((analista: AnalistaType) => (
            <CardAnalista
              key={analista.id}
              nome={analista.nome}
              id={analista.id}
            ></CardAnalista>
          ))}
        </div>
      </div>
    </div>
  );
}
