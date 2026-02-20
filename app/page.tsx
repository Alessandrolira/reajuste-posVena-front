import Cabecalho from "./components/Cabecalho";
import Cartao from "./components/Cartao";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Cabecalho eh_home={true}></Cabecalho>
      <div className="py-8.5 px-19.75">
        <div className="flex w-full justify-between mb-8.5">
          <Cartao icon="companhia" corBg="cinza" valor="5"></Cartao>
          <Cartao
            icon="progressao"
            corBg="verde-claro"
            valor="R$ 12.500,00"
          ></Cartao>
          <Cartao icon="contrato" corBg="cinza" valor="12%"></Cartao>
          <Cartao
            icon="medalha"
            corBg="laranja-claro"
            eh_destaque
            valor="Grupo Alpha S.A."
            valor_reducao="R$ 3.500,00"
          ></Cartao>
        </div>
        <div className="flex gap-3 w-full">
          {/* 70% */}
          <div className="flex-7">
            <input
              type="text"
              className="
                w-full
                border border-(--cor-borda)
                rounded-lg
                py-2
                pl-10
                pr-4
                text-(--cor-borda)
                focus:outline-none
                bg-[url('/lupa.png')]
                bg-no-repeat
                bg-position-[10px_center]
              "
              placeholder="Buscar empresa..."
            />
          </div>

          <div className="relative flex-2">
            <select
              className="
                w-full
                appearance-none
                border border-(--cor-borda)
                rounded-lg
                py-2
                pl-4
                pr-10
                bg-(--background)
                focus:outline-none
                text-(--cor-borda)
              "
            >
              <option value="">Todas as operadoras</option>
              <option value="">Amil</option>
              <option value="">Bradesco</option>
              <option value="">Sulamerica</option>
            </select>

            <Image
              width={16}
              height={16}
              src="/abrir-lista.png"
              alt="Abrir"
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>

          <div className="relative flex-1">
            <select
              className="
              w-full
              appearance-none
              border border-(--cor-borda)
              rounded-lg
              py-2
              pl-4
              pr-10
              bg-(--background)
              focus:outline-none
              text-(--cor-borda)
            "
            >
              <option value="">Todos os anos</option>
              <option value="">2025</option>
              <option value="">2026</option>
              <option value="">2027</option>
            </select>

            <Image
              width={16}
              height={16}
              src="/abrir-lista.png"
              alt="Abrir"
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
