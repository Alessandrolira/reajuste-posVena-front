"use client";

import Cabecalho from "./components/Cabecalho";
import Cartao from "./components/Cartao";
import Image from "next/image";
import CardEmpresa from "./components/CardEmpresa";
import { useState, useEffect } from "react";
import InputTexto from "./components/InputTexto";
import InputLista from "./components/InputLista";
import BotaoCancelar from "./components/BotaoCancelar";
import BotaoConfirmar from "./components/BotaoConfirmar";
import { api } from "./services/api";
import { AnalistaType } from "./types/AnalistaType";
import { formatarData } from "./utils/date";

export default function Home() {
  const [toggleAdicionarEmpresa, setToggleAdicionarEmpresa] = useState(false);
  const [analistas, setAnalistas] = useState([]);
  const [render, setRender] = useState(false);
  const [totalEmpresas, setTotalEmpresas] = useState(0);

  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [idAnalista, setIdAnalista] = useState(0);
  const [operadora, setOperadora] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [statusContrato, setStatusContrato] = useState("");
  const [porte, setPorte] = useState("");

  function ToggleEmpresa() {
    setToggleAdicionarEmpresa(!toggleAdicionarEmpresa);
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

    async function buscarTotalEmpresas() {
      try {
        const response = await api.get("/empresas/totalEmpresas");
        setTotalEmpresas(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    buscarTotalEmpresas();
  }, [render]);

  async function AdicionarEmpresa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(aniversario);

    try {
      const response = await api.post("/empresas", {
        nomeEmpresa: nomeEmpresa,
        idAnalista: idAnalista,
        operadora: operadora,
        aniversario: formatarData(aniversario),
        modalidade: modalidade,
        statusContrato: statusContrato,
        porte: porte,
      });

      ToggleEmpresa();
      console.log("Empresa Cadastrada ", response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {toggleAdicionarEmpresa && (
        <div className="fixed inset-0 bg-(--preto)/80 flex items-center justify-center z-50">
          <div className="bg-(--branco) rounded-lg p-8 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Adicionar Nova Empresa</h2>
            <form onSubmit={AdicionarEmpresa} className="flex flex-col gap-5">
              <InputTexto
                label="Nova Empresa"
                name="nomeEmpresa"
                placeholder="Ex: Tech Solutions LTDA"
                tipoData="texto"
                valor={nomeEmpresa}
                onChange={(e) => setNomeEmpresa(e.target.value)}
              ></InputTexto>
              <InputLista
                label="Analista"
                valores={analistas.map((a: AnalistaType) => a.nome)}
                value={idAnalista}
                retornarId={true}
                onChange={(e) => setIdAnalista(Number(e.target.value))}
              ></InputLista>
              <InputLista
                label="Operadora"
                valores={[
                  "SULMED",
                  "SULAMERICA",
                  "HAPVIDA",
                  "CNU",
                  "INTERODONTO",
                  "GNDI",
                  "BRADESCO",
                  "PORTO_SEGURO",
                  "AMIL",
                  "UNIHOSP",
                  "SANTA_HELENA",
                  "UNIMED",
                  "TRASMONTANO",
                  "PLENA",
                ]}
                value={operadora}
                onChange={(e) => setOperadora(e.target.value)}
              ></InputLista>
              <InputTexto
                label="Aniversário do contrato"
                name="aniversario"
                placeholder="Ex: 01/03/2023"
                tipoData="data"
                valor={aniversario}
                onChange={(e) => setAniversario(e.target.value)}
              ></InputTexto>
              <InputLista
                label="Modalidade"
                valores={["SAUDE", "DENTAL"]}
                value={modalidade}
                onChange={(e) => setModalidade(e.target.value)}
              ></InputLista>
              <InputLista
                label="Status"
                valores={["CANCELADO", "ATIVO"]}
                value={statusContrato}
                onChange={(e) => setStatusContrato(e.target.value)}
              ></InputLista>
              <InputLista
                label="Porte"
                valores={["PME", "PJ"]}
                value={porte}
                onChange={(e) => setPorte(e.target.value)}
              ></InputLista>
              <div className="flex justify-end gap-3">
                <BotaoCancelar
                  onClickToggleEmpresa={ToggleEmpresa}
                ></BotaoCancelar>
                <BotaoConfirmar></BotaoConfirmar>
              </div>
            </form>
          </div>
        </div>
      )}
      <Cabecalho eh_home={true} onClickToggle={ToggleEmpresa}></Cabecalho>
      <div className="py-8.5 px-19.75">
        <div className="flex w-full justify-between mb-8.5">
          <Cartao
            icon="companhia"
            corBg="cinza"
            valor={String(totalEmpresas)}
          ></Cartao>
          <Cartao
            icon="progressao"
            corBg="verde-claro"
            valor="R$ 12.500,00"
          ></Cartao>
          <Cartao icon="contrato" corBg="cinza" valor="12%"></Cartao>
          <Cartao
            icon="medalha"
            corBg="laranja-claro"
            eh_destaque
            valor="Grupo Alpha S.A."
            valor_reducao="R$ 3.500,00"
          ></Cartao>
        </div>
        <div className="flex gap-3 w-full mb-8.5">
          {/* 70% */}
          <div className="flex-7">
            <input
              type="text"
              className="
                w-full
                border border-(--cor-borda)
                rounded-lg
                py-2
                pl-10
                pr-4
                text-(--cor-borda)
                focus:outline-none
                bg-[url('/lupa.png')]
                bg-no-repeat
                bg-position-[10px_center]
              "
              placeholder="Buscar empresa..."
            />
          </div>

          <div className="relative flex-2">
            <select
              className="
                w-full
                appearance-none
                border border-(--cor-borda)
                rounded-lg
                py-2
                pl-4
                pr-10
                bg-(--background)
                focus:outline-none
                text-(--cor-borda)
              "
            >
              <option value="">Todas as operadoras</option>
              <option value="">Amil</option>
              <option value="">Bradesco</option>
              <option value="">Sulamerica</option>
            </select>

            <Image
              width={16}
              height={16}
              src="/abrir-lista.png"
              alt="Abrir"
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>

          <div className="relative flex-1">
            <select
              className="
              w-full
              appearance-none
              border border-(--cor-borda)
              rounded-lg
              py-2
              pl-4
              pr-10
              bg-(--background)
              focus:outline-none
              text-(--cor-borda)
            "
            >
              <option value="">Todos os anos</option>
              <option value="">2025</option>
              <option value="">2026</option>
              <option value="">2027</option>
            </select>

            <Image
              width={16}
              height={16}
              src="/abrir-lista.png"
              alt="Abrir"
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardEmpresa
            id={1}
            nome="Perim Comercio LTDA"
            operadora="Amil"
            modalidade="Dental"
            status="Em Aberto"
            aniversario="12/05/2025"
            statusAnterior="Reajustado"
          ></CardEmpresa>
          <CardEmpresa
            id={2}
            nome="Santa Monica Studios"
            operadora="Bradesco"
            modalidade="Saúde"
            status="Reajustado"
            aniversario="12/05/2025"
          ></CardEmpresa>
          <CardEmpresa
            id={3}
            nome="Perim Comercio LTDA"
            operadora="Sulamerica"
            modalidade="Dental"
            status="Em Atraso"
            aniversario="12/05/2025"
          ></CardEmpresa>
          <CardEmpresa
            id={5}
            nome="Perim Comercio LTDA"
            operadora="Bradesco"
            modalidade="Saúde"
            status="Em Aberto"
            aniversario="12/05/2025"
          ></CardEmpresa>
        </div>
      </div>
    </div>
  );
}
