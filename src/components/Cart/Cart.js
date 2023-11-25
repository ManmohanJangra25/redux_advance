import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      {cartItems.map((data) => (
        <CartItem
          key={data.id}
          item={{ id: data.id, title: data.title, quantity: data.quantity, total: data.totalPrice, price: data.price }}
        />
      ))}
      </ul>
    </Card>
  );
};

export default Cart;
