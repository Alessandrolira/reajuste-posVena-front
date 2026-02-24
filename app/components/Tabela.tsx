"use client";

import dados from "../../app/data.json";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { InteracaoType } from "../../app/types/TypeTabela";
import { useReactTable } from "@tanstack/react-table";
import Image from "next/image";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const columns: ColumnDef<InteracaoType>[] = [
  { accessorKey: "id", header: "N°" },
  { accessorKey: "ano", header: "Ano" },
  { accessorKey: "tipo", header: "Solicitante" },
  {
    accessorKey: "porcentagem_proposta",
    header: "Proposta (%)",
    cell: ({ getValue }) => {
      const valor = getValue<number>();

      return `${valor.toLocaleString("pt-BR", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 2,
      })}%`;
    },
  },
  { accessorKey: "valor_atual", header: "Valor Atual (R$)" },
  { accessorKey: "vl_mensal_resultante", header: "Valor Resultante (R$)" },
  { accessorKey: "dt_interacao", header: "Data da proposta" },
  {
    accessorKey: "observacao",
    header: "Observações",
    cell: ({ row }) => {
      const texto = row.original.observacao;

      return (
        <div className="relative group max-w-xs">
          {/* Texto preview */}
          <p className="truncate cursor-pointer">{texto}</p>

          {/* Tooltip flutuante acima */}
          <div
            className="
            absolute bottom-full left-0 mb-2
            opacity-0 invisible
            group-hover:opacity-100 group-hover:visible
            transition-all duration-200
            bg-white
            border border-[#c0c0c0]
            text-gray-700 text-sm
            rounded-md
            shadow-lg
            p-3
            w-96
            z-50
            whitespace-normal
            wrap-brak-word
          "
          >
            {texto}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "is_aceita",
    header: "Proposta aceita?",
    cell: ({ getValue }) => {
      return getValue() ? (
        <Image height={20} width={20} src="/aceita.png" alt="Aceita" />
      ) : (
        <div className={`border border-(--cor-borda) h-5 w-5`}></div>
      );
    },
  },
];

export default function Tabela() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [ordem, setOrdem] = useState(false);

  const table = useReactTable({
    columns,
    data: dados,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div>
      <input
        type="text"
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="border border-(--cor-borda) rounded-lg py-0.5 px-4 mb-4 focus:outline-none"
        placeholder="Buscar..."
      />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {table.getHeaderGroups()[0].headers.map((header) => (
              <th
                key={header.id}
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center max-w-30 cursor-pointer select-none hover:bg-(--cor-borda) transition-colors duration-200"
                onClick={() => (
                  setOrdem(!ordem),
                  header.column.toggleSorting(ordem)
                )}
              >
                <div className="flex items-center gap-4">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  <IoMdArrowDropdown size={16} className="shrink-0" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-44 text-center"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
