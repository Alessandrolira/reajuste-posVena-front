import CardBranco from "./CardBranco";
import { CgArrowLongRight } from "react-icons/cg";
import Image from "next/image";
import { useState } from "react";
import { PiLinkSimple } from "react-icons/pi";

interface ReajusteAbertoProps {
  onClickDescricao: () => void;
  onClickDescricaoInteracao: () => void;
  interacoes: string[];
  // dataAberturaInteracao: string;
  // solicitanteInteracao: string;
  // propostaInteracao: number;
  ultimaInteracaoAceita?: boolean;
}

export default function ReajusteAberto({
  interacoes,
  ultimaInteracaoAceita,
  onClickDescricao,
  onClickDescricaoInteracao,
}: ReajusteAbertoProps) {
  const [menuAberto, setMenuAberto] = useState(false);

  function handleAnotacaoClick() {
    onClickDescricaoInteracao();
    setMenuAberto(false);
  }

  return (
    <div className="mb-8.5 bg-[rgb(253,241,230)] rounded-lg py-4.5 px-3.25 flex gap-2.25">
      <div className="basis-2/3 border-r border-(--cor-borda) pr-2.25 flex flex-col">
        <div className="flex justify-between mb-4.5">
          <div className="flex gap-3 items-center">
            <p className="bg-(--laranja) px-3 py-1 rounded-lg font-bold">
              Negociação em Aberto
            </p>
            <p className="text-xl">(2025)</p>
          </div>
          <div>
            <p
              className={` ${
                interacoes.length == 0 && ultimaInteracaoAceita == null
                  ? "bg-(--verde-escuro) text-(--branco) hover:bg-(--verde-claro) cursor-pointer"
                  : ultimaInteracaoAceita == null
                    ? "bg-(--cor-borda) text-(--branco) cursor-not-allowed"
                    : "bg-(--verde-escuro) text-(--branco) hover:bg-(--verde-claro) cursor-pointer"
              }  px-3 py-1 rounded-lg   transition-colors duration-100`}
            >
              {ultimaInteracaoAceita == null
                ? "Aceitar Proposta Inicial"
                : "Finalizar Reajuste"}
            </p>
          </div>
        </div>
        <p className="font-thin text-sm mb-2">Data de abertura: 01/01/2024</p>
        <p className="font-thin text-sm mb-3">
          Proposta Inicial da operadora: 16,5%
        </p>
        <div className="flex items-center gap-5 ">
          <div className="flex items-center gap-5">
            <CardBranco>Mensalidade Atual: R$ 156.100,00</CardBranco>
            <CgArrowLongRight color="#C0c0c0" size={40} />
          </div>
          <div className="relative">
            <CardBranco>Após o Reajuste R$ 181.856,50</CardBranco>
            <div className="absolute top-[-65]">
              <CardBranco>Aumento de: R$ 25.756,50</CardBranco>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="relative group">
              <button
                disabled
                className="bg-[#a0a0a0] p-3 rounded-lg opacity-40 cursor-not-allowed"
              >
                <PiLinkSimple size={25} />
              </button>

              <div
                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
               bg-gray-800 text-white text-xs px-3 py-1 rounded 
               opacity-0 group-hover:opacity-100 
               transition-opacity duration-200 
               whitespace-nowrap pointer-events-none"
              >
                Funcionalidade em desenvolvimento
              </div>
            </div>
            <button
              className="bg-(--laranja) p-3 rounded-lg hover:bg-(--laranja-claro) cursor-pointer  transition-colors duration-100"
              onClick={onClickDescricao}
            >
              <Image
                src="/notas.png"
                height={25}
                width={25}
                alt="Gráfico de evolução do reajuste"
              ></Image>
            </button>
          </div>
        </div>
      </div>
      <div className="basis-1/3 flex items-start justify-between ">
        {interacoes.length == 0 ? (
          <div className="flex items-center justify-between w-full">
            <p className="text-(--cor-borda) italic font-thin text-sm">
              Nenhuma neogociação encontrada
            </p>
            <button className="bg-(--azul-escuro) text-(--branco) px-3 py-1 rounded-lg hover:bg-[#9ea9b6] cursor-pointer  transition-colors duration-100 text-right">
              Abrir Negociação
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between mb-3">
              <div>
                <p className="font-bold text-lg">Última Interação</p>
              </div>
              <div className="flex items-start gap-3">
                {/* BOTÃO MENU */}
                <div className="relative">
                  <button
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="cursor-pointer"
                  >
                    <Image src="/menu.png" height={20} width={20} alt="menu" />
                  </button>

                  {/* MENU DROPDOWN */}
                  {menuAberto && (
                    <div className="absolute right-0 w-60 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <button className="w-full text-left px-4 py-2 hover:bg-(--azul-escuro) hover:text-(--branco) cursor-pointer  hover:rounded-lg ">
                        Nova Negociação
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-(--verde-escuro) hover:rounded-lg cursor-pointer">
                        Negociação Aprovada
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-(--laranja) hover:rounded-lg cursor-pointer flex gap-2"
                        onClick={handleAnotacaoClick}
                      >
                        <Image
                          src="/notas.png"
                          alt="notas"
                          width={20}
                          height={20}
                        ></Image>
                        Anotação
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="font-thin text-sm">Data de abertura: 19/02/2026</p>
            <p className="font-thin text-sm">Solicitante: CORRETORA</p>
            <p className="font-thin text-sm">Proposta: 9,3%</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-5">
                <div className="bg-(--branco) px-2 py-4 rounded-lg border border-(--cor-borda) w-60 text-center">
                  <p className="text-[0.8em]">
                    Mensalidade Atual: R$ 156.100,00
                  </p>
                </div>
              </div>
              <CgArrowLongRight color="#C0c0c0" size={40} />
              <div className="relative">
                <div className="bg-(--branco) px-2 py-4 rounded-lg border border-(--cor-borda)  w-60 text-center">
                  <p className="text-[0.8em]">Resultante: R$ 170.617,30</p>
                </div>
                <div className="absolute top-[-65]">
                  <div className="bg-(--branco) px-2 py-4 rounded-lg border border-(--cor-borda)  w-60 text-center">
                    <p className="text-[0.8em]">Economia de: R$ 11.239,20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
