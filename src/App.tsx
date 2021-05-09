import {useState, useEffect} from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'

import {Wrapper} from './App.styles'
import Item from './components/item/Item'

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
  let {isLoading, error, data} = useQuery<CartItemType[]>('products', getProducts)

  const handleAddItemToCart = (clickedItem:CartItemType) => null;

  const handleRemoveItemFromCart = () => null;

  if (isLoading) return <LinearProgress />

  if (error) return <div>Something went wrong...</div>

  return (
    <Wrapper>
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
