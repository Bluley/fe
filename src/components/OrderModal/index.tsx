import { useEffect } from 'react';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import { OverLay, ModalBody, OrderDetaild, Action } from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  closeModal: () => void;
}

export function OrderModal({visible, order, closeModal}: OrderModalProps){
  if (!visible || !order) return null;
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeModal();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);


  const total = order.products.reduce((total, {product, quantity}) => {

    return total + (product.price * quantity);
  }, 0 );
  return (
    <OverLay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={closeModal} >
            <img src={closeIcon} />
          </button>
        </header>

        <div className="status-container">
          <small>Satus do pedido</small>
          <div>
            {order.status === 'pending' && '🕓'}
            {order.status === 'Production' && '🧑‍🍳'}
            {order.status === 'completed' && '✅'}
            <strong>
              {order.status === 'pending' && 'Fila de espera'}
              {order.status === 'Production' && 'Em preparação'}
              {order.status === 'completed' && 'Pronto'}
            </strong>
          </div>
        </div>
        <OrderDetaild>
          <strong>Itens</strong>
          <div className="order-itens">
            {order.products.map(({_id, product, quantity}) => (
              <div className='item' key={_id}>
                <img src={`http://localhost:3001/uploads/${product.imagePath}`}
                  width={56}
                  height={28.51}
                />
                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>

              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetaild>

        <Action>
          <button type="button" className="Primary">
            <span>🧑‍🍳</span>
            <strong>Iniciar produção</strong>
          </button>
          <button type="button" className="Secundary">
            Cancelar pedido
          </button>

        </Action>
      </ModalBody>

    </OverLay>
  );
}


