import {useState, useEffect} from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'

import {Wrapper, StyledButton} from './App.styles'
import Item from './components/item/Item'
import Cart from './components/cart/Cart'

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async ():Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json()


const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  let {isLoading, error, data} = useQuery<CartItemType[]>('products', getProducts)

  const handleAddItemToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // Is the item already added to the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item => 
          item.id === clickedItem.id 
          ? {...item, amount: item.amount + 1}
          : item
        );
      }

      return [...prev, {...clickedItem, amount: 1}];
    });
  };

  const handleRemoveItemFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, {...item, amount: item.amount - 1}];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    ))
  }

  const getTotalItemsInCart = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount, 0)

  if (isLoading) return <LinearProgress />

  if (error) return <div>Something went wrong...</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={isCartOpen} onClose={()=>setIsCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddItemToCart}
        removeFromCart={handleRemoveItemFromCart} />
      </Drawer>
        <StyledButton onClick={()=>setIsCartOpen(true)}>
          <Badge badgeContent={getTotalItemsInCart(cartItems)} color='error'>
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
      <Grid container spacing={3}>
        {data?.map(i => (
          <Grid item key={i.id} xs={12} sm={4}>
            <Item item={i} handleAddItemToCart={handleAddItemToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
