import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  cardLittle: {
    display: 'flex',
    flexDirection: 'row',
  },
  root: {
    display: 'flex',
    height: '200px',
    maxWidth: '50%',
    borderRadius: 'unset',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    width: '50%',
  },
  actionCard: {
    display: 'flex',
    flexDirection: 'column-reverse',
    textAlign: 'left',
    width: '10%',
  },
  media: {
    width: '40%',
  },
  author: {
    fontSize: '12px',
    color: '#2D2D2D',
  },
  title: {
    color: '#F1A10A',
    fontWeight: '600',
    fontSize: '18px',
  },
  post: {
    color: '#2D2D2D',
    fontSize: '12px',
  },
  action: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },  
}));

function card(style, props) {
  return (
    <Card className={style.root}>
      <CardMedia
        className={style.media}
        image={props.image_url}
        title={props.title}
      />
      <div className={style.details}>
        <CardContent>
          <Typography className={style.author} color="textSecondary" gutterBottom>
            {props.author}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className={style.title}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={style.post}>
            {props.post}
          </Typography>
        </CardContent>
      </div>
      <div className={style.actionCard}>
        <CardContent>
          <CardActions className={style.action}>
            <IconButton size="small">
              <KeyboardArrowRightIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
}

export default function CardLittle(props) {
  const style = useStyles();
  const listCards = props.posts.map((post) => card(style, post))

  return (
    <div className = {style.cardLittle}>
      {listCards}
    </div>
  );
}
