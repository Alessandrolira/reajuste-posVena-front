"use client";

import { useParams } from "next/navigation";
import Cabecalho from "../../../components/Cabecalho";
import CartaoDados from "../../../components/CartaoDados";
import CartaoValores from "../../../components/CartaoValores";
import Image from "next/image";
import Grafico from "../../../components/Grafico";
import BalaoValor from "../../../components/BalaoValor";
import Botao from "@/app/components/Botao";
import Tabela from "@/app/components/Tabela";
import { InteracaoType } from "@/app/types/TypeTabela";
import { useState } from "react";
import InputTexto from "../../../components/InputTexto";
import BotaoCancelar from "../../../components/BotaoCancelar";
import BotaoConfirmar from "../../../components/BotaoConfirmar";
import ReajusteAberto from "../../../components/ReajusteAberto";
import InputLista from "../../../components/InputLista";

export default function Empresa() {
  const [toggleAdicionarReajuste, setToggleAdicionarReajuste] = useState(false);
  const [toggleDescricao, setToggleDescricao] = useState(false);
  const [toggleDescricaoInteracao, setToggleDescricaoInteracao] =
    useState(false);
  const [editandoObservacaoReajuste, setEditandoObservacaoReajuste] =
    useState(false);
  const [observacaoReajuste, setObservacaoReajuste] = useState("");
  const [editandoObservacaoInteracao, setEditandoObservacaoInteracao] =
    useState(false);
  const [observacaoInteracao, setObservacaoInteracao] = useState("");
  const [toggleNovaNegociacao, setToggleNovaNegociacao] = useState(false);
  const [toggleNegociacaoAprovada, setToggleNegociacaoAprovada] =
    useState(false);

  function ToggleReajuste() {
    setToggleAdicionarReajuste(!toggleAdicionarReajuste);
  }

  function ToggleDescricaoReajuste() {
    setToggleDescricao(!toggleDescricao);
  }

  function ToggleDescricaoInteracao() {
    setToggleDescricaoInteracao(!toggleDescricaoInteracao);
  }

  function ToggleNovaNegociacao() {
    setToggleNovaNegociacao(!toggleNovaNegociacao);
  }

  function ToggleNegociacaoAprovada() {
    setToggleNegociacaoAprovada(!toggleNegociacaoAprovada);
  }

  function adicionarInteração() {
    console.log("sim");
  }

  function adicionarReajuste() {
    console.log("Adicionando reajuste");
  }

  function adicionarNovaNegociacao() {
    console.log("teste");
  }

  function adicionarNegociacaoAprovada() {
    console.log("Negociacao aprovada");
  }

  const dados: InteracaoType[] = [
    {
      id: 1,
      ano: "2024",
      tipo: "OPERADORA",
      porcentagem_proposta: 8.5,
      valor_atual: 1200,
      vl_mensal_resultante: 1296,
      dt_interacao: "10/02/2026",
      observacao: "Cliente solicitou revisão após reajuste anual.",
      is_aceita: true,
    },
    {
      id: 2,
      ano: "2024",
      tipo: "CORRETORA",
      porcentagem_proposta: 8.5,
      valor_atual: 1200,
      vl_mensal_resultante: 1296,
      dt_interacao: "10/02/2026",
      observacao: "Cliente solicitou revisão após reajuste anual.",
      is_aceita: true,
    },
  ];

  const params = useParams();

  const empresa = params.empresa as string;
  const empresaFormatada = empresa.replace(/%20/g, " ").toUpperCase();

  return (
    <div>
      {toggleAdicionarReajuste && (
        <div className="fixed inset-0 bg-(--preto)/80 flex items-center justify-center z-50">
          <div className="bg-(--branco) rounded-lg p-8 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Adicionar Novo Reajuste</h2>
            <form className="flex flex-col gap-5">
              <InputTexto
                label="Ano Rejuste"
                name="anoReajuste"
                placeholder="2024 (ano atual)"
                tipoData="text"
              ></InputTexto>
              <InputTexto
                label="% Oferecida pela operadora"
                name="porcentagemOferecida"
                placeholder="Ex: 16,5"
                tipoData="text"
              ></InputTexto>
              <InputTexto
                label="Data do envio da proposta"
                placeholder="Ex: 01/01/2024"
                name="dataEnvio"
                tipoData="data"
              ></InputTexto>
              <InputTexto
                label="Valor atual da fatura do cliente (R$)"
                name="valorFatura"
                placeholder="Ex: R$ 27.840,00"
                tipoData="text"
              ></InputTexto>
              <div className="flex justify-end gap-3">
                <BotaoCancelar
                  onClickToggleEmpresa={ToggleReajuste}
                ></BotaoCancelar>
                <BotaoConfirmar
                  onClickAdicionarEmpresa={adicionarReajuste}
                ></BotaoConfirmar>
              </div>
            </form>
          </div>
        </div>
      )}
      {toggleDescricao && (
        <div className="fixed inset-0 bg-(--preto)/80 flex items-center justify-center z-50">
          <div className="bg-(--branco) rounded-lg p-8 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl font-bold">Observações do reajuste</p>
              <button
                onClick={ToggleDescricaoReajuste}
                className="cursor-pointer"
              >
                <Image
                  src="/fechar.png"
                  alt="Fechar"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </div>
            {editandoObservacaoReajuste ? (
              <div>
                <textarea
                  className="border border-(--cor-borda) rounded-lg h-80 px-4 py-4 w-full"
                  value={observacaoReajuste}
                  onChange={(e) => setObservacaoReajuste(e.target.value)}
                />

                <div className="flex justify-end gap-4 mt-4">
                  <button
                    className="border px-4 py-2 rounded-lg"
                    onClick={() => setEditandoObservacaoReajuste(false)}
                  >
                    Cancelar
                  </button>

                  <button
                    className="bg-(--verde-escuro) text-white px-4 py-2 rounded-lg"
                    onClick={() => setEditandoObservacaoReajuste(false)}
                  >
                    Salvar
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="border border-(--cor-borda) rounded-lg h-80 px-4 py-4 whitespace-pre-wrap">
                  {observacaoReajuste || "Nenhuma observação cadastrada."}
                </p>

                <div className="flex justify-end mt-8">
                  <button
                    className="border px-4 py-2 rounded-lg"
                    onClick={() => setEditandoObservacaoReajuste(true)}
                  >
                    Editar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {toggleDescricaoInteracao && (
        <div className="fixed inset-0 bg-(--preto)/80 flex items-center justify-center z-50">
          <div className="bg-(--branco) rounded-lg p-8 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl font-bold">Observações da Negociação</p>
              <button
                onClick={ToggleDescricaoInteracao}
                className="cursor-pointer"
              >
                <Image
                  src="/fechar.png"
                  alt="Fechar"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </div>
            {editandoObservacaoInteracao ? (
              <div>
                <textarea
                  className="border border-(--cor-borda) rounded-lg h-80 px-4 py-4 w-full"
                  value={observacaoInteracao}
                  onChange={(e) => setObservacaoInteracao(e.target.value)}
                />

                <div className="flex justify-end gap-4 mt-4">
                  <button
                    className="border px-4 py-2 rounded-lg"
                    onClick={() => setEditandoObservacaoInteracao(false)}
                  >
                    Cancelar
                  </button>

                  <button
                    className="bg-(--verde-escuro) text-white px-4 py-2 rounded-lg"
                    onClick={() => setEditandoObservacaoInteracao(false)}
                  >
                    Salvar
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="border border-(--cor-borda) rounded-lg h-80 px-4 py-4 whitespace-pre-wrap">
                  {observacaoInteracao || "Nenhuma observação cadastrada."}
                </p>

                <div className="flex justify-end mt-8">
                  <button
                    className="border px-4 py-2 rounded-lg"
                    onClick={() => setEditandoObservacaoInteracao(true)}
                  >
                    Editar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {toggleNovaNegociacao && (
        <div className="fixed inset-0 bg-(--preto)/80 flex items-center justify-center z-50">
          <div className="bg-(--branco) rounded-lg p-8 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Negociação</h2>
            <div className="flex flex-col gap-4">
              <InputLista
                label="Solicitante"
                valores={["OPERADORA", "CORRETORA"]}
              ></InputLista>
              <InputTexto
                label="Proposta (%)"
                placeholder="Ex: 12,5%"
                name="porcentagem_proposta"
                tipoData="text"
              ></InputTexto>
              <InputTexto
                label="Data da proposta"
                placeholder="Ex: 01/02/2023"
                name="data_proposta"
                tipoData="data"
              ></InputTexto>
              <div>
                <p>Observações</p>
                <textarea
                  name="observacaoInteracao"
                  id="observacaoInteracao"
                  className="border border-(--cor-borda) rounded-lg h-60 px-4 py-4 w-full"
                ></textarea>
              </div>
              <div className="flex gap-2 justify-end">
                <BotaoCancelar
                  onClickToggleEmpresa={ToggleNovaNegociacao}
                ></BotaoCancelar>
                <BotaoConfirmar
                  onClickAdicionarEmpresa={adicionarNovaNegociacao}
                ></BotaoConfirmar>
              </div>
            </div>
          </div>
        </div>
      )}
      {toggleNegociacaoAprovada && (
        <div className="fixed inset-0 bg-(--preto)/80 flex items-center justify-center z-50">
          <div className="bg-(--branco) rounded-lg p-8 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Negociação Fechada</h2>
            <div className="flex flex-col gap-4">
              <InputTexto
                label="Data do aceite"
                placeholder="Ex: 01/02/2024"
                tipoData="data"
                name="dataAceite"
              ></InputTexto>
              <div>
                <p>Motivo do Encerramento</p>
                <textarea
                  name="motivoAceite"
                  id="motivoAceite"
                  className="border border-(--cor-borda) rounded-lg h-60 px-4 py-4 w-full"
                ></textarea>
              </div>
              <div className="flex gap-2 justify-end">
                <BotaoCancelar
                  onClickToggleEmpresa={ToggleNegociacaoAprovada}
                ></BotaoCancelar>
                <BotaoConfirmar
                  onClickAdicionarEmpresa={adicionarNegociacaoAprovada}
                ></BotaoConfirmar>
              </div>
            </div>
          </div>
        </div>
      )}
      <Cabecalho
        nomeEmpresa={empresaFormatada}
        onClickToggle={ToggleReajuste}
      ></Cabecalho>
      <div className="py-8.5 px-19.75 ">
        <ReajusteAberto
          interacoes={["asdasd"]}
          onClickDescricao={ToggleDescricaoReajuste}
          onClickDescricaoInteracao={ToggleDescricaoInteracao}
          onClickNovaNegociacao={ToggleNovaNegociacao}
          onClickNegociacaoAprovada={ToggleNegociacaoAprovada}
          ultimaInteracaoAceita={true}
        ></ReajusteAberto>
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
        <div className="bg-(--branco) p-10 rounded-lg border border-(--cor-borda) mb-8.5">
          <p className="text-2xl font-thin">OFERECIDO VS NEGOCIADO POR ANO</p>
          <Grafico
            valoresX={["2023", "2024", "2025", "2026"]}
            valoresOperadora={[17.5, 18.0, 17.5, 18.5]}
            valoresCorretora={[10.5, 11.0, 10.5, 11.5]}
          />
        </div>
        <div className="bg-(--branco) pt-10 px-10 rounded-lg border border-(--cor-borda) mb-8.5">
          <p className="text-2xl font-thin">LINHA DO TEMPO</p>
          <div className="py-10 p-20 flex items-center gap-10">
            <BalaoValor
              ano="2023"
              valorOferecido="17,5%"
              valorNegociado="10,5%"
            ></BalaoValor>
            <div className="h-1 w-20 top-[-30] relative bg-(--cor-borda)"></div>
            <BalaoValor
              ano="2024"
              valorOferecido="18,0%"
              valorNegociado="11,0%"
            ></BalaoValor>
            <div className="h-1 w-20 top-[-30] relative bg-(--cor-borda)"></div>
            <BalaoValor
              ano="2025"
              valorOferecido="17,5%"
              valorNegociado="10,5%"
            ></BalaoValor>
            <div className="h-1 w-20 top-[-30] relative bg-(--cor-borda)"></div>
          </div>
        </div>
        <div className="bg-(--branco) pt-10 px-10 rounded-lg border border-(--cor-borda) mb-8.5">
          <div className="flex items-center mb-4 justify-between">
            <p className="text-2xl font-thin">HISTÓRICO DE REAJUSTE</p>
            <Botao
              oQueFaz="+ Nova Interação"
              onClick={() => adicionarInteração()}
            ></Botao>
          </div>
          <Tabela dadosRecebidos={dados}></Tabela>
        </div>
      </div>
    </div>
  );
}
