class Currency {
  format(number: number, country = 'pt-br', currency = 'BRL') {
    const price = new Intl.NumberFormat(country, {
      style: 'currency',
      currency,
    }).format(number);

    return price;
  }
}

export default new Currency();
