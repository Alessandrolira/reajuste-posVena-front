import CardBranco from "./CardBranco";
import { CgArrowLongRight } from "react-icons/cg";
import Image from "next/image";
import { useState } from "react";

interface ReajusteAbertoProps {
  interacoes: string[];
}

export default function ReajusteAberto({ interacoes }: ReajusteAbertoProps) {
  const [menuAberto, setMenuAberto] = useState(false);

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
            <p className="bg-(--verde-escuro) text-(--branco) px-3 py-1 rounded-lg cursor-pointer hover:bg-(--verde-claro) transition-colors duration-100">
              Aceitar Proposta Inicial
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
            <div className="bg-[#ADCCDF] p-3 rounded-lg hover:bg-[#d8e9f3] cursor-pointer  transition-colors duration-100">
              <Image
                src="/documentos.png"
                height={25}
                width={25}
                alt="Gráfico de evolução do reajuste"
              ></Image>
            </div>
            <div className="bg-(--laranja) p-3 rounded-lg hover:bg-(--laranja-claro) cursor-pointer  transition-colors duration-100">
              <Image
                src="/notas.png"
                height={25}
                width={25}
                alt="Gráfico de evolução do reajuste"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/3">
        {interacoes.length == 0 ? (
          <div className="flex items-center justify-between">
            <p className="text-(--cor-borda) italic font-thin text-sm">
              Nenhuma neogociação encontrada
            </p>
            <button className="bg-(--azul-escuro) text-(--branco) px-3 py-1 rounded-lg hover:bg-[#9ea9b6] cursor-pointer  transition-colors duration-100">
              Abrir Negociação
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-lg">Última Interação</p>
              </div>
              <div className="flex items-start gap-3">
                <button className="bg-(--laranja) p-3 rounded-lg hover:bg-(--laranja-claro) cursor-pointer  transition-colors duration-100">
                  <Image
                    src="/notas.png"
                    height={25}
                    width={25}
                    alt="Gráfico de evolução do reajuste"
                  ></Image>
                </button>
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
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
