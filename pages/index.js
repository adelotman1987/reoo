<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; img-src https://*; child-src 'none';"></meta>
import "../pages/api/keys/csp";
import { Alert, CircularProgress, Grid } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import client from '../utils/client';
import { urlForThumbnail } from '../utils/image';
import { Store } from '../utils/Store';
import { width } from "@mui/system";
export default function Home() {
  const {
    state: { cart },
    dispatch,
  } = useContext(Store);
  const router = useRouter();
  const [state, setState] = useState({
    products: [],
    error: '',
    loading: true,
  });  
  const { loading, error, products } = state;
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
   
    
    
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        setState({ products, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
   
  }, []);
  
  

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      enqueueSnackbar('Sorry. Product is out of stock', { variant: 'error' });
      return;
      
    }
    
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: {
        _key: product._id,
        name: product.name,
        countInStock: product.countInStock,
        slug: product.slug.current,
        price: product.price,
        image: urlForThumbnail(product.image),
        quantity,
      },
    });
    enqueueSnackbar(`${product.name} added to the cart`, {
      variant: 'success',
    });
    router.push('/cart');
  };
  //<video className="video" crossOrigin="Anonymous" src='https://res.cloudinary.com/dogjmmett/video/upload/v1632221403/sample_mngu99.mp4' id='video' width='400' height='360' controls autoPlay muted loop type="video/mp4" />
 /*<div className="Video">
        <video outoPlay loop muted style={{
          position:"absolute",
        }}>
          <source src={} type="video/mp4" /> 
        </video>
    </div>
    <div className="video">
          <video autoPlay loop muted>
            <source
              src="https://vod-progressive.akamaized.net/exp=1654293004~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1875%2F19%2F484378213%2F2169009692.mp4~hmac=9101bc545327bcb56f70bc5501ef85a09a9b2adaa123e5bd14665522827a4b65/vimeo-prod-skyfire-std-us/01/1875/19/484378213/2169009692.mp4?filename=Wood+-+57233.mp4"
              type="video/mp4"
            />
          </video>
          </div>*/
  return (
   
    <Layout>
       
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.slug}>
              <ProductItem
                product={product}
                addToCartHandler={addToCartHandler}
              ></ProductItem>
            </Grid>
          ))}
        </Grid>
      )}
     
    </Layout>
  );
}
