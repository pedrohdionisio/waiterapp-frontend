class Currency {
  format(value?: number, country = 'pt-br', currency = 'BRL') {
    if (!value) {
      return null;
    }

    const price = new Intl.NumberFormat(country, {
      style: 'currency',
      currency,
    }).format(value);

    return price;
  }
}

export default new Currency();
