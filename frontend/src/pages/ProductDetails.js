import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singleProductDetails } from '../actions/productActions';

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleProductDetails(params.product_id));
  }, []);

  return <h1>Hello this is product detail page</h1>;
};

export default ProductDetails;
