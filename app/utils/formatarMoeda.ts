export function formatarMoeda(valor?: number | null): string {
  if (typeof valor !== "number") return "R$ 0,00";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}
