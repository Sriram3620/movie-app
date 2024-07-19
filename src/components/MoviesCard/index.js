import React from 'react';
import Card from 'react-bootstrap/Card';
import "./index.css"

const MovieCard = ({ title, author, imageUrl,releasedYear}) => {
  return (
    <Card className='card-bg  shadow' style={{ width: '18rem',display:'flex' }}>
      <Card.Img className='card-img'  variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className='title pt-2'>Title: <span className='title-sub'>{title}</span></Card.Title>
        <Card.Text className='author pt-2'>
          Author: <span className='author-sub'>{author}</span>
        </Card.Text>
        <Card.Text className='author pt-2'>
          Released Year: <span className='author-sub'>{releasedYear}</span>
        </Card.Text>
        <div className='card-btn' >
        {/* <Button  style={{flexGrow:"1",height:"40px"}} className='mt-5' variant="primary">Go somewhere</Button> */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
