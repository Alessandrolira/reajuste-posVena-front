import Botao from "./Botao";

interface CabecalhoProps {
  eh_home: boolean;
}

export default function Cabecalho({ eh_home }: CabecalhoProps) {
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
          <div>
            <p>nome da empresa</p>
          </div>
        )}
      </div>
      <div>
        <Botao></Botao>
      </div>
    </div>
  );
}
