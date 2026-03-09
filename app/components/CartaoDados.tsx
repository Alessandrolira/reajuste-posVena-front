interface CartaoDadosProps {
  titulo: string;
  valor: string;
  corDestaque: unknown;
}

export default function CartaoDados({
  titulo,
  valor,
  corDestaque,
}: CartaoDadosProps) {
  corDestaque = `text-(--${corDestaque})`;
  return (
    <div className="bg-(--branco) w-full rounded-lg border border-(--cor-borda) py-7.25 flex gap-3 items-center flex-col">
      <p>{titulo}</p>
      <p className={`text-2xl font-bold ${corDestaque}`}>{valor}</p>
    </div>
  );
}
