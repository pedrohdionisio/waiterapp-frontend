export type HeaderTextsType = Record<
  string,
  {
    icon: string;
    title: string;
    text: string;
  }
>;

export const headerTexts: HeaderTextsType = {
  home: {
    icon: 'home',
    title: 'Home',
    text: 'Acompanhe os pedidos dos clientes'
  },
  historico: {
    icon: 'file-list-2',
    title: 'Histórico',
    text: 'Visualize pedidos anteriores'
  },
  cardapio: {
    icon: 'book-read',
    title: 'Cardápio',
    text: 'Gerencie os produtos do seu estabelecimento'
  },
  usuarios: {
    icon: 'user',
    title: 'Usuários',
    text: 'Cadastre e gerencie seus usuários'
  }
};
