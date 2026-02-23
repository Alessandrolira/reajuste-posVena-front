interface BotaoConfirmarProps {
  onClickAdicionarEmpresa: () => void;
}

export default function BotaoConfirmar({
  onClickAdicionarEmpresa,
}: BotaoConfirmarProps) {
  return (
    <div className="gap-1 flex flex-col">
      <button
        onClick={onClickAdicionarEmpresa}
        className="border border-(--verde-escuro) cursor-pointer bg-(--verde-claro) text-(--cor-texto) py-2 px-4 rounded-lg hover:bg-(--verde-escuro) transition-colors duration-300 w-max"
      >
        Confirmar
      </button>
    </div>
  );
}
