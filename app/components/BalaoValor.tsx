import Image from "next/image";

interface BalaoValorProps {
  ano: string;
  valorOferecido: string;
  valorNegociado: string;
}

export default function BalaoValor({
  ano,
  valorOferecido,
  valorNegociado,
}: BalaoValorProps) {
  return (
    <div className="flex flex-col items-center justify-start w-max gap-2">
      <div className="w-20 h-20 rounded-full bg-(--verde-escuro) flex items-center justify-center">
        <p className="text-2xl text-(--branco)">{ano}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl">{valorOferecido}</p>
        <div className="flex items-center gap-2">
          <Image
            src="/descendente.png"
            alt="Seta para frente"
            width={15}
            height={15}
          ></Image>
          <p>{valorNegociado}</p>
        </div>
      </div>
    </div>
  );
}
