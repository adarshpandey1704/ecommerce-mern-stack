import axios from 'axios';

export const generateBraintreeClientToken = async (userId, token) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  const { data } = await axios.get(
    `http://localhost:8000/api/payment/braintree/getToken/${userId}`,
    config
  );
  console.log('dataInpayment', data);
};
