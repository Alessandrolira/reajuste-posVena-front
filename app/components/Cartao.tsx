import Image from "next/image";

interface CartaoProps {
  icon: string;
  corBg: string;
  eh_destaque?: boolean;
  valor: string;
  valor_reducao?: string;
}

export default function Cartao({
  icon,
  corBg,
  eh_destaque,
  valor,
  valor_reducao,
}: CartaoProps) {
  return (
    <div className="bg-(--branco) w-80.5 rounded-lg border border-(--cor-borda) pl-9.75 py-7.25 flex gap-3 items-center">
      <div
        className="w-max p-2 rounded-lg"
        style={{ backgroundColor: `var(--${corBg})` }}
      >
        <Image
          width={36}
          height={36}
          src={`/${icon}.png`}
          alt="Ícone do cartão"
        />
      </div>
      <div>
        <p className="font-thin text-[12px]">
          {icon == "companhia"
            ? "TOTAL DE EMPRESAS"
            : icon == "progressao"
              ? "ECONOMIA TOTAL GERADA"
              : icon == "contrato"
                ? "MÉDIA DE REDUÇÃO"
                : eh_destaque
                  ? "MELHOR NEGOCIAÇÃO"
                  : ""}
        </p>
        <p className="font-bold text-[17px]">{valor}</p>
        {eh_destaque && (
          <p className="text-(--verde-escuro) text-[12px] font-bold">
            {valor_reducao}
          </p>
        )}
      </div>
    </div>
  );
}
