import Botao from "./Botao";

interface CabecalhoProps {
  eh_home?: boolean;
  onClickToggle?: () => void;
  nomeEmpresa?: string;
}

export default function Cabecalho({
  eh_home,
  onClickToggle,
  nomeEmpresa,
}: CabecalhoProps) {
  return (
    <div className="bg-(--branco) py-8.5 px-19.75 flex justify-between items-center">
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
          <div className="flex justify-between items-center gap-5">
            <div>
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
        {onClickToggle && eh_home && (
          <Botao
            onClick={() => onClickToggle()}
            oQueFaz="+ Nova Empresa"
          ></Botao>
        )}
        <div>
          {onClickToggle && nomeEmpresa && (
            <Botao
              onClick={() => onClickToggle()}
              oQueFaz="+ Novo Reajuste"
            ></Botao>
          )}
        </div>
      </div>
    </div>
  );
}
