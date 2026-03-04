import Image from "next/image";
import Link from "next/link";

interface CardEmpresaProps {
  id: number;
  nome: string;
  operadora: string;
  modalidade: string;
  status: string;
  aniversario: string;
  ultimoReajuste?: number;
  economiaTotal?: string;
  statusAnterior?: string;
  porcentagemUltimoReajuste?: number;
}

export default function CardEmpresa({
  id,
  nome,
  operadora,
  modalidade,
  status,
  aniversario,
  ultimoReajuste,
  economiaTotal,
  statusAnterior,
  porcentagemUltimoReajuste,
}: CardEmpresaProps) {
  return (
    <Link href={`/empresa/${id}`}>
      <div className="bg-(--branco) border border-(--cor-borda) rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-(--verde-escuro)">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <p className="text-2xl">{nome}</p>
            {statusAnterior == "Reajustado" ? (
              <Image
                width={20}
                height={20}
                src="/medalha.png"
                alt="Logo Perim Comercio"
              ></Image>
            ) : (
              ""
            )}
          </div>
          <div>
            <Image
              width={10}
              height={20}
              src="/botao-abrir.png"
              alt="Seta"
            ></Image>
          </div>
        </div>
        <div className="flex gap-4 text-[0.8em] mb-5">
          <p>{operadora}</p>
          <p
            className={`${modalidade === "DENTAL" ? "text-(--azul-claro)" : "text-(--laranja)"}`}
          >
            {modalidade}
          </p>
        </div>
        <div className="flex justify-between items-center text-[0.8em] border-b border-(--cor-borda) pb-4 mb-4">
          <p
            className={`${status === "REAJUSTADO" ? "bg-(--verde-escuro)" : status === "PENDENTE" ? "bg-(--laranja)" : status == "EM ATRASO" ? "bg-(--vermelho)" : status == "EM NEGOCIACAO" ? "bg-(--azul-claro)" : "bg-(--cor-borda)"} w-max px-3 rounded-full text-(--branco) text-bold font-light`}
          >
            {status}
          </p>
          <p>Aniversário: {aniversario}</p>
        </div>
        <div className="flex justify-between">
          {ultimoReajuste ? (
            <div className="flex justify-between w-full h-12">
              <div>
                <p>Ultimo Reajuste</p>
                <div className="flex gap-2">
                  <p>({ultimoReajuste})</p>
                  <p>{porcentagemUltimoReajuste}%</p>
                </div>
              </div>
              <div className="items-end text-end">
                <p>Economia Total</p>
                <div className="flex items-center justify-end gap-1">
                  <Image
                    width={10}
                    height={10}
                    src="/descendente.png"
                    alt="Economia Total"
                  ></Image>
                  <p className="text-(--verde-escuro)">R$ {economiaTotal}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-12">
              <p className="text-[0.8em] text-(--cor-borda) font-thin italic">
                Nenhum reajuste realizado
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
