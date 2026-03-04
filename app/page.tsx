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
import { MelhorNegociacaoType } from "./types/MelhorNegociacaoType";
import { CardsEmpresasType } from "./types/CardsEmpresas";

export default function Home() {
  const [toggleAdicionarEmpresa, setToggleAdicionarEmpresa] = useState(false);
  const [analistas, setAnalistas] = useState([]);
  const [render, setRender] = useState(false);
  const [totalEmpresas, setTotalEmpresas] = useState(0);
  const [economiaTotal, setEconomiaTotal] = useState(0);
  const [mediaReducao, setMediaReducao] = useState(0);
  const [melhorNegociacao, setMelhorNegociacao] =
    useState<MelhorNegociacaoType>();
  const [cardsEmpresa, setCardsEmpresa] = useState<CardsEmpresasType[]>([]);

  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [idAnalista, setIdAnalista] = useState(0);
  const [operadora, setOperadora] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [statusContrato, setStatusContrato] = useState("");
  const [porte, setPorte] = useState("");

  const [busca, setBusca] = useState("");
  const [statusFiltro, setStatusFiltro] = useState("");

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

    async function buscarEconomiaTotal() {
      try {
        const response = await api.get("/empresas/economiaTotal");
        setEconomiaTotal(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    buscarEconomiaTotal();

    async function buscarMediaReducao() {
      try {
        const response = await api.get("/empresas/mediaReducao");
        setMediaReducao(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    buscarMediaReducao();

    async function buscarMelhorReajuste() {
      try {
        const response = await api.get("/empresas/melhorNegociacao");
        setMelhorNegociacao(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    buscarMelhorReajuste();

    async function buscarCardsEmpresa() {
      try {
        const response = await api.get("/empresas/buscarCardsEmpresa");
        setCardsEmpresa(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    buscarCardsEmpresa();
  }, [render]);

  async function AdicionarEmpresa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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

      setNomeEmpresa("");
      setIdAnalista(0);
      setOperadora("");
      setAniversario("");
      setModalidade("");
      setStatusContrato("");
      setPorte("");

      setRender(!render);
      console.log("Empresa Cadastrada ", response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const empresasFiltradas = cardsEmpresa
    .filter((empresa) => {
      const termoBusca = busca.toLowerCase();

      const correspondeNome = empresa.nomeEmpresa
        .toLowerCase()
        .includes(termoBusca);

      const correspondeStatus =
        !statusFiltro || empresa.statusRenovacao === statusFiltro;

      return correspondeNome && correspondeStatus;
    })
    .sort((a, b) => {
      // Coloca EM_ATRASO no topo
      if (
        a.statusRenovacao === "EM_ATRASO" &&
        b.statusRenovacao !== "EM_ATRASO"
      ) {
        return -1;
      }

      if (
        a.statusRenovacao !== "EM_ATRASO" &&
        b.statusRenovacao === "EM_ATRASO"
      ) {
        return 1;
      }

      return 0; // mantém ordem normal para os outros
    });
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
            valor={`R$ ${economiaTotal.toFixed(2).replace(".", ",")}`}
          ></Cartao>
          <Cartao
            icon="contrato"
            corBg="cinza"
            valor={`${mediaReducao.toFixed(2).replace(".", ",")}%`}
          ></Cartao>
          {melhorNegociacao == null ? (
            <Cartao
              icon="medalha"
              corBg="laranja-claro"
              eh_destaque
              valor="Nenhuma negociacão encontrada"
              valor_reducao={``}
            ></Cartao>
          ) : (
            <Cartao
              icon="medalha"
              corBg="laranja-claro"
              eh_destaque
              valor={melhorNegociacao.nomeEmpresa}
              valor_reducao={`R$ ${melhorNegociacao?.valorEconomizado.toFixed(2).replace(".", ",")}`}
            ></Cartao>
          )}
        </div>
        <div className="flex gap-3 w-full mb-8.5">
          {/* 70% */}
          <div className="flex-7">
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
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
              value={statusFiltro}
              onChange={(e) => setStatusFiltro(e.target.value)}
              className="w-full appearance-none border border-(--cor-borda) rounded-lg py-2 pl-4 pr-10 bg-(--background) focus:outline-none text-(--cor-borda)"
            >
              <option value="">Status</option>
              <option value="EM_NEGOCIACAO">EM NEGOCIACAO</option>
              <option value="REAJUSTADO">REAJUSTADO</option>
              <option value="PENDENTE">PENDENTE</option>
              <option value="EM_ATRASO">EM ATRASO</option>
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
          {empresasFiltradas.map((cardEmpresa) => {
            console.log(cardEmpresa.modalidade);

            return (
              <CardEmpresa
                key={cardEmpresa.idEmpresa}
                id={cardEmpresa.idEmpresa}
                nome={cardEmpresa.nomeEmpresa}
                operadora={cardEmpresa.operadora}
                modalidade={cardEmpresa.modalidade}
                status={cardEmpresa.statusRenovacao.replace("_", " ")}
                aniversario={formatarData(cardEmpresa.aniversario).replaceAll(
                  "-",
                  "/",
                )}
                ultimoReajuste={cardEmpresa.ultimoReajuste}
                economiaTotal={`R$ ${cardEmpresa.economiaTotal}`}
                porcentagemUltimoReajuste={16}
              ></CardEmpresa>
            );
          })}
        </div>
      </div>
    </div>
  );
}
