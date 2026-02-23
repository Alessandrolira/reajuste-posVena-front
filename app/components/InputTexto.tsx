interface InputTextoProps {
  label: string;
  name: string;
  placeholder: string;
  tipoData: string;
  valor?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputTexto({
  label,
  name,
  placeholder,
  tipoData,
}: InputTextoProps) {
  return (
    <div className="w-full gap-1 flex flex-col">
      <label htmlFor={name} className="flex flex-col">
        {label}
      </label>
      <input
        type={tipoData === "data" ? "date" : "text"}
        name={name}
        className="border border-(--cor-borda) rounded-lg w-full px-2 py-1 placeholder:text-(--cor-borda) placeholder:font-light focus:outline-none"
        placeholder={placeholder}
      ></input>
    </div>
  );
}
