import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PreviewIcon from '@mui/icons-material/Preview';
import { useNavigate } from 'react-router-dom';
// import { API } from '../config';

export default function MediaCard({ item }) {
  const navigate = useNavigate();
  const handlePush = (id) => {
    navigate(`/product-details/${id}`);
  };
  return (
    <Card sx={{ maxWidth: 345, marginTop: '10px', borderRadius: '10px' }}>
      <img
        src={`http://localhost:8000/api/product/photo/${item._id}`}
        style={{ width: '100%', height: '120px' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography size="midium">Rs {item.price}</Typography>
        <PreviewIcon onClick={() => handlePush(item._id)} />
      </CardActions>
    </Card>
  );
}
