import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import { StyledFormDiv } from '../Styled';
import { useDispatch, useSelector } from 'react-redux';
import { saveProduct } from '../../actions/productActions';
import { allCategories } from '../../actions/categoryActions';
import { useSnackbar } from 'notistack';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  },
  '& .MuiDialog-paper': {
    width: '100%'
  }
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

export default function CustomizedDialogs({ open, onClose }) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.userLoginReducer.loginInfo);
  const categoryList = useSelector((state) => state.categoryReducer.categoryList);
  const saveProductDatas = useSelector((state) => state.SaveProductReducer);

  useEffect(() => {
    const { saveProductData, error } = saveProductDatas;
    if (saveProductData) {
      enqueueSnackbar('Product is created successfully', {
        variant: 'success'
      });
    }
    if (error) {
      enqueueSnackbar('Something went wrong', {
        variant: 'error'
      });
    }
  }, [saveProductDatas]);

  const [formData, setFormData] = React.useState({
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    photo: null,
    category: '',
    shipping: false
  });

  const handleChange = (e) => {
    const { name } = e.target;
    const value = name === 'photo' ? e.target.files[0] : e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  console.log('formData', formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, price, quantity, photo, category, shipping } = formData;
    const productFormData = new FormData();
    productFormData.set('name', name);
    productFormData.set('description', description);
    productFormData.set('price', price);
    productFormData.set('quantity', quantity);
    productFormData.set('photo', photo);
    productFormData.set('category', category);
    productFormData.set('shipping', shipping);
    dispatch(saveProduct(productFormData, loginData.token, loginData._id));
    onClose();
  };

  useEffect(() => {
    allCategories();
  }, []);

  return (
    <div>
      <BootstrapDialog
        sx={{ width: '100%' }}
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <BootstrapDialogTitle id="customized-dialog-title">Add a Product</BootstrapDialogTitle>
        <DialogContent dividers>
          <StyledFormDiv>
            <FormControl>
              <TextField
                required
                id="outlined-required"
                label="Enter Product Name"
                name="name"
                type="text"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl sx={{ marginTop: '20px' }}>
              <TextField
                required
                id="outlined-required"
                label="Enter your description"
                name="description"
                type="text"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ marginTop: '20px' }}>
              <TextField
                required
                id="outlined-required"
                label="Enter Price"
                name="price"
                type="number"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ marginTop: '20px' }}>
              <TextField
                required
                id="outlined-required"
                label="Enter Quantity"
                name="quantity"
                type="number"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ width: '100%', mt: '10px' }} error>
              <InputLabel id="demo-simple-select-error-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                label="Category"
                name="category"
                onChange={handleChange}>
                {categoryList &&
                  categoryList.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item?._id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
            <FormControl sx={{ marginTop: '20px' }}>
              <TextField required name="photo" type="file" onChange={handleChange} />
            </FormControl>
            <FormControl sx={{ width: '100%', mt: '10px' }} error>
              <InputLabel id="demo-simple-select-error-label">Shipping</InputLabel>
              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                label="Shipping"
                name="shipping"
                onChange={handleChange}>
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          </StyledFormDiv>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Save changes
          </Button>
          <Button autoFocus>Cancel</Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
