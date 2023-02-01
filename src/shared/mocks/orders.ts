import { OrderType } from '../types/Order';

const ordersMock: OrderType[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    created_at: new Date(),
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1672425892319-egg.png',
          price: 40,
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4',
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1672425892319-egg.png',
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5',
      },
    ],
  },
];

export default ordersMock;
