export function formatarDataBrasil(data: string) {
  return new Date(data).toLocaleDateString("pt-BR");
}
