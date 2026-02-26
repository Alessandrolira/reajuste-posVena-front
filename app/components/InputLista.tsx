"use client";

import { useState } from "react";

interface InputListaProps {
  label: string;
  valores: string[];
  placeholder?: string;
}

export default function InputLista({ label, valores }: InputListaProps) {
  const [selecionado, setSelecionado] = useState("");

  return (
    <div>
      <label htmlFor="analista">{label}</label>
      <select
        name="analista"
        id="analista"
        value={selecionado}
        onChange={(e) => setSelecionado(e.target.value)}
        className={`border rounded-lg w-full px-2 py-1 focus:outline-none ${
          selecionado === "" || selecionado === `Selecione `
            ? "text-(--cor-borda)"
            : "border-(--cor-borda)"
        }`}
      >
        <option value="">{`Selecione `}</option>
        {valores.map((valor, index) => (
          <option key={index} value={index + 1}>
            {valor}
          </option>
        ))}
      </select>
    </div>
  );
}
