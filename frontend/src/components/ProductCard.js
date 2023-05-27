import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { API } from '../config';

export default function MediaCard({ item }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <img src={item.photo.data} />
      {/* <img
        src="data:image/<%=image.img.contentType%>;base64,
                    <%=image.img.data.toString('base64')%>"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{item.price}</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
