import { IoPersonCircle } from "react-icons/io5";

interface CardAnalistaProps {
  nome: string;
  id: number;
}

export default function CardAnalista({ nome, id }: CardAnalistaProps) {
  return (
    <div className="bg-(--branco) w-80 flex items-center gap-5 px-4 py-8 rounded-lg border border-(--cor-borda)">
      <IoPersonCircle size={60} />

      <div className="flex flex-col">
        <p className="font-bold text-md">{nome}</p>
        <p className="font-thin text-sm">Código: {id}</p>
      </div>
    </div>
  );
}
