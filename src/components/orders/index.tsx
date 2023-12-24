import { Container} from './styles';
import { OrdersBoard } from '../OrdersBoard';
import { Order } from '../../types/Order';

const orders:Order[] = [
  {
    '_id': '65888ec17ae5edaf3ece16d4',
    'table': '12',
    'status': 'pending',
    'products': [
      {
        'product': {
          'name': 'Pizza de margatira',
          'imagePath': '1703447364190-marguerita.png',
          'price': 40,
        },
        'quantity': 1,
        '_id': '65888ec17ae5edaf3ece16d5'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        title="Pendentes"
        icon="🕒"
        orders={orders}
      />
      <OrdersBoard
        title="preparando"
        icon="🧑‍🍳"
        orders={[]}

      />
      <OrdersBoard
        title="prontos"
        icon="✅"
        orders={[]}

      />

    </Container>
  );
}
