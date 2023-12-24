import { Order } from '../../types/Order';
import { Board, OrderContainer } from '../orders/styles';
import { OrderModal } from '../OrderModal';
import { useState } from 'react';

interface OrdersBoardProps {
  icon: string;
  title: string
  orders: Order[];
}

export function OrdersBoard({title, icon, orders}: OrdersBoardProps){
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null >(null);

  function handleOpenModal(order: Order){
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal(){
    setIsModalVisible(false);
    setSelectedOrder(null);

  }

  return (
    <Board>
      <OrderModal visible={isModalVisible}
        order={selectedOrder}
        closeModal={handleCloseModal}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {!!orders.length && (
        <OrderContainer>
          {orders.map((order) => (
            <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}

        </OrderContainer>
      )}

    </Board>

  );
}
