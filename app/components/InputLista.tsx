interface InputListaProps {
  label: string;
  valores: string[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  retornarId?: boolean;
}

export default function InputLista({
  label,
  valores,
  value,
  onChange,
  retornarId,
}: InputListaProps) {
  return (
    <div>
      <label htmlFor="analista">{label}</label>
      <select
        name="analista"
        id="analista"
        value={value}
        onChange={onChange}
        className={`border rounded-lg w-full px-2 py-1 focus:outline-none ${
          !value ? "text-(--cor-borda)" : "border-(--cor-borda)"
        }`}
      >
        <option value="">{`Selecione `}</option>
        {valores.map((valor, index) => (
          <option key={index} value={retornarId ? index + 1 : valor}>
            {valor}
          </option>
        ))}
      </select>
    </div>
  );
}
