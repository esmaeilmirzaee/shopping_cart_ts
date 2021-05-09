import {useState} from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'

import {Wrapper} from './App.styles'

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
  await axios.get('https://fakestoreapi.com/products')


const App = () => {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts)
  console.log(data)

  const handleAddItemToCart = () => null;

  const handleRemoveItemFromCart = () => null;

  return (
    <Wrapper>
      <h1>Start</h1>
    </Wrapper>
  );
}

export default App;
