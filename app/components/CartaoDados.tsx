interface CartaoDadosProps {
  titulo: string;
  valor: string;
  corDestaque: string;
}

export default function CartaoDados({
  titulo,
  valor,
  corDestaque,
}: CartaoDadosProps) {
  return (
    <div className="bg-[var(--branco)] w-full rounded-lg border border-[var(--cor-borda)] py-7.25 flex gap-3 items-center flex-col">
      <p>{titulo}</p>
      <p className={`text-2xl font-bold text-(--${corDestaque})`}>{valor}</p>
    </div>
  );
}
