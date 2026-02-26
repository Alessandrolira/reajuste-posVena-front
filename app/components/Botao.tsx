interface BotaoProps {
  onClick: () => void;
  oQueFaz: string;
}

export default function Botao({ onClick, oQueFaz }: BotaoProps) {
  return (
    <div
      onClick={onClick}
      className="bg-(--verde-escuro) text-(--branco) py-2.5 px-4 rounded-lg cursor-pointer hover:bg-(--verde-claro) transition-colors duration-100"
    >
      <button className="cursor-pointer">{oQueFaz}</button>
    </div>
  );
}
