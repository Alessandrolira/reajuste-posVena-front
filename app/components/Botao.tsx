interface BotaoProps {
  onClick: () => void;
}

export default function Botao({ onClick }: BotaoProps) {
  return (
    <div className="bg-(--verde-escuro) text-(--branco) py-2.5 px-4 rounded-lg cursor-pointer hover:bg-(--verde-claro) transition-colors duration-300">
      <button className="cursor-pointer" onClick={onClick}>
        + Nova Empresa
      </button>
    </div>
  );
}
