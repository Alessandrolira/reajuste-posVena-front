interface BotaoCancelarProps {
  onClickToggleEmpresa: () => void;
}

export default function BotaoCancelar({
  onClickToggleEmpresa,
}: BotaoCancelarProps) {
  return (
    <div className="gap-1 flex flex-col">
      <button
        className="border border-(--cor-borda) cursor-pointer text-(--cor-texto) py-2 px-4 rounded-lg hover:bg-(--cor-borda) transition-colors duration-300 w-max"
        onClick={() => onClickToggleEmpresa()}
      >
        Cancelar
      </button>
    </div>
  );
}
