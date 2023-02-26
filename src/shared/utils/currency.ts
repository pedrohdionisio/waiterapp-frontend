class Currency {
  format(value?: number, country = 'pt-br', currency = 'BRL'): string {
    if (!value) {
      return '';
    }

    const price = new Intl.NumberFormat(country, {
      style: 'currency',
      currency
    }).format(value);

    return price;
  }
}

export default new Currency();
