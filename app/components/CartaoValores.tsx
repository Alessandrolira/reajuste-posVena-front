interface CartaoValoresProps {
  titulo: string;
  valor: string;
  valorBase?: string;
  porcentagem: string;
  corPredominante: string;
  diferenca?: boolean;
}

export default function CartaoValores({
  titulo,
  valor,
  valorBase,
  porcentagem,
  corPredominante,
  diferenca,
}: CartaoValoresProps) {
  console.log(corPredominante);

  return (
    <div
      className={`bg-[var(--${corPredominante}-claro)] w-full text-center items-center justify-center rounded-lg border border-(--cor-borda) py-5.25`}
    >
      <p className={`font-bold text-xl `}>{titulo}</p>
      <p
        className={`font-bold text-2xl ${corPredominante == "vermelho" ? "text-[var(--vermelho)]" : "text-[var(--${corPredominante}-escuro)]"}`}
      >
        {valor}
      </p>
      {diferenca ? (
        <p className="font-thin text-sm">
          Cálculo R$ {valorBase} - {porcentagem}
        </p>
      ) : (
        <p className="font-thin text-sm">
          Base R$ {valorBase} + {porcentagem}
        </p>
      )}
    </div>
  );
}
