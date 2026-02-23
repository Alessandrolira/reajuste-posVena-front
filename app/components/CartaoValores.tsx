interface CartaoValoresProps {
  titulo: string;
  valor: string;
  valorBase: string;
  porcentagem: string;
  corPredominante: string;
}

export default function CartaoValores({
  titulo,
  valor,
  valorBase,
  porcentagem,
  corPredominante,
}: CartaoValoresProps) {
  console.log(corPredominante);

  return (
    <div
      className={`bg-(--${corPredominante}-claro) w-full text-center items-center justify-center rounded-lg border border-(--cor-borda) py-5.25`}
    >
      <p className="font-bold text-xl">{titulo}</p>
      <p className={`font-bold text-2xl text-(--${corPredominante})`}>
        {valor}
      </p>
      <p className="font-thin text-sm">
        Base R$ {valorBase} + {porcentagem}
      </p>
    </div>
  );
}
