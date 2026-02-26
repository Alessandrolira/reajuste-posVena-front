import Botao from "./Botao";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import { DiVim } from "react-icons/di";

interface CabecalhoProps {
  eh_home?: boolean;
  onClickToggle?: () => void;
  nomeEmpresa?: string;
  eh_analista?: boolean;
  onClickAdicionarAnalista?: () => void;
}

export default function Cabecalho({
  eh_home,
  onClickToggle,
  nomeEmpresa,
  eh_analista,
  onClickAdicionarAnalista,
}: CabecalhoProps) {
  return (
    <div className="bg-(--branco) py-8.5 px-19.75 flex justify-between items-center">
      <div>
        {eh_home || eh_analista ? (
          <div>
            {eh_home ? (
              <div>
                <h1 className="font-bold text-[25px]">
                  Gestão de Reajuste - Pós Venda
                </h1>
                <p className="font-thin text-[12px]">
                  Transformando negociação em economia real
                </p>
              </div>
            ) : (
              <div>
                <Link href="/">
                  <div className="group flex items-center gap-1 text-(--cor-borda) hover:bg-(--azul-escuro) w-max px-2 rounded-lg hover:text-(--branco) cursor-pointer transition-all duration-100">
                    <IoMdArrowBack className="text-lg" />

                    <p className="overflow-hidden max-w-0 opacity-0 transition-all duration-200 group-hover:max-w-30 group-hover:opacity-100">
                      Empresas
                    </p>
                  </div>
                </Link>
                <p className="font-bold text-[25px]">Analistas Cadastrados</p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-between items-center gap-5">
            <div>
              <Link href="/">
                <div className="group flex items-center gap-1 text-(--cor-borda) hover:bg-(--azul-escuro) w-max px-2 rounded-lg hover:text-(--branco) cursor-pointer transition-all duration-100">
                  <IoMdArrowBack className="text-lg" />

                  <p className="overflow-hidden max-w-0 opacity-0 transition-all duration-200 group-hover:max-w-30 group-hover:opacity-100">
                    Empresas
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-8">
                <p className="font-bold text-[25px]">{nomeEmpresa}</p>
                <p className="bg-(--laranja) text-(--branco) py-1 px-2 rounded-md text-[12px]">
                  Em aberto
                </p>
              </div>
              <div className="flex gap-8 font-thin text-[12px] mt-1">
                <p>Amil</p>
                <p className="text-(--laranja) font-thin">Dental</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {onClickToggle && (eh_home || eh_analista) && (
          <div className="flex gap-2">
            <Link href="/analistas" className="cursor-pointer">
              <div className="bg-(--azul-escuro) text-(--branco) py-2.5 px-4 rounded-lg cursor-pointer hover:bg-[#73808d] transition-colors duration-100">
                Analistas
              </div>
            </Link>
            <Botao
              onClick={() => onClickToggle()}
              oQueFaz="+ Nova Empresa"
            ></Botao>
          </div>
        )}
        <div>
          {onClickToggle && nomeEmpresa && (
            <Botao
              onClick={() => onClickToggle()}
              oQueFaz="+ Novo Reajuste"
            ></Botao>
          )}
          {onClickAdicionarAnalista && eh_analista && (
            <div>
              <Botao
                onClick={() => onClickAdicionarAnalista()}
                oQueFaz="+ Analista"
              ></Botao>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
