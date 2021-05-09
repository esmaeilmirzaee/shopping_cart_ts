import Button from '@material-ui/core/Button'

import {CartItemType} from '../../App'

import {Wrapper} from './Item.styles'

type Props = {
    item: CartItemType;
    handleAddItemToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item,handleAddItemToCart}) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4>${item.price}</h4>
        </div>
<Button onClick={()=>handleAddItemToCart(item)}>Add</Button>
    </Wrapper>
)

export default Item;