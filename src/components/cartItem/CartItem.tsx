import Button from '@material-ui/core/Button'

import {CartItemType} from '../../App'

import {Wrapper} from './CartItem.styles'

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className='information'>
                <div className='amount'>
                    <span>Price: ${item.price}</span>
                    <span>Total: ${(item.amount * item.price).toFixed(2)}</span>
                </div>
                <div className='buttons'>
                    <Button size="small" disableElevation variant='contained' onClick={()=>removeFromCart(item.id)}>-</Button>

                    <p>{item.amount}</p>

                    <Button size="small" disableElevation variant='contained' onClick={()=>addToCart(item)}>+</Button>
                </div>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
)

export default CartItem;