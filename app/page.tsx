"use client";

import Cabecalho from "./components/Cabecalho";
import Cartao from "./components/Cartao";
import Image from "next/image";
import CardEmpresa from "./components/CardEmpresa";
import { useState } from "react";
import InputTexto from "./components/InputTexto";
import InputLista from "./components/InputLista";
import BotaoCancelar from "./components/BotaoCancelar";
import BotaoConfirmar from "./components/BotaoConfirmar";
import Link from "next/link";

export default function Home() {
  const [toggleAdicionarEmpresa, setToggleAdicionarEmpresa] = useState(false);

  const [nomeEmpresa, setNomeEmpresa] = useState("");

  function ToggleEmpresa() {
    setToggleAdicionarEmpresa(!toggleAdicionarEmpresa);
  }

  function AdicionarEmpresa() {
    console.log("Nome da empresa:", nomeEmpresa);
  }

  return (
    <div>
      {toggleAdicionarEmpresa && (
        <div className="fixed inset-0 bg-(--preto)/80 flex items-center justify-center z-50">
          <div className="bg-(--branco) rounded-lg p-8 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Adicionar Nova Empresa</h2>
            <form className="flex flex-col gap-5">
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
                valores={["Ana Silva", "Carlos Oliveira", "Mariana Costa"]}
              ></InputLista>
              <InputLista
                label="Operadora"
                valores={["Amil", "Bradesco", "Sulamerica"]}
              ></InputLista>
              <InputTexto
                label="Aniversário do contrato"
                name="aniversario"
                placeholder="Ex: 01/03/2023"
                tipoData="data"
              ></InputTexto>
              <InputLista
                label="Modalidade"
                valores={["Dental", "Saúde"]}
              ></InputLista>
              <InputLista
                label="Status"
                valores={["Ativo", "Inativo", "Pendente"]}
              ></InputLista>
              <InputLista label="Porte" valores={["PME", "PJ"]}></InputLista>
              <div className="flex justify-end gap-3">
                <BotaoCancelar
                  onClickToggleEmpresa={ToggleEmpresa}
                ></BotaoCancelar>
                <BotaoConfirmar
                  onClickAdicionarEmpresa={AdicionarEmpresa}
                ></BotaoConfirmar>
              </div>
            </form>
          </div>
        </div>
      )}
      <Cabecalho eh_home={true} onClickToggle={ToggleEmpresa}></Cabecalho>
      <div className="py-8.5 px-19.75">
        <div className="flex w-full justify-between mb-8.5">
          <Cartao icon="companhia" corBg="cinza" valor="5"></Cartao>
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
          <Link href="/empresa/Perim Comercio LTDA">
            <CardEmpresa
              id={1}
              nome="Perim Comercio LTDA"
              operadora="Amil"
              modalidade="Dental"
              status="Em Aberto"
              aniversario="12/05/2025"
              statusAnterior="Reajustado"
            ></CardEmpresa>
          </Link>

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
