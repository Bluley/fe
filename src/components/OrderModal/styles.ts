import { styled } from 'styled-components';

export const OverLay = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header{

    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size: 24px;
    }
    button{
      line-height: 0;
      background: transparent;
       border: 0;
    }

  }
  .status-container{
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div{
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderDetaild = styled.div`
  margin-top: 32px;

  > strong{
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-itens{
    margin-top: 16px;

    .item{
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img{
        border-radius: 6px;
      }

      .quantity{
        font-size: 14px;
        color: #666;

        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details{
        strong{
          display: block;

        }

        span{
          font-size: 12px;
          color: #666;
        }
      }
    }
  }

  .total{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span{
      font-weight: 500;
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }

  }
`;

export const Action = styled.footer`

  display: flex;
  flex-direction: column;
  margin-top: 32px;
  .Primary{
    background: #333333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }
  .Secundary{
    padding: 14px 24px;
    color: #D73035;
    font-weight: bold;
    border: 0;
    background: transparent;
    margin-top: 8px;
  }
`;


