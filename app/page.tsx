import Cabecalho from "./components/Cabecalho";
import Cartao from "./components/Cartao";

export default function Home() {
  return (
    <div>
      <Cabecalho eh_home={true}></Cabecalho>
      <div className="py-8.5 px-19.75">
        <div className="flex w-full justify-between">
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
      </div>
    </div>
  );
}
