export const formatPriceValue = (valueInCents: number) => {
  const currencyValue = valueInCents / 100
  return currencyValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}