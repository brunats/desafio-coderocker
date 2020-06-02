import React from 'react'

import App from '../Components/App'

import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import Paper from '@material-ui/core/Paper'

import { makeStyles } from '@material-ui/core/styles'
import { parseISO, format} from 'date-fns'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '100%',
    maxWidth: '100%',
    borderRadius: 'unset',
    margin: '5% 15%',
  },
  paper: {
    margin: 'auto',
    maxWidth: 500,
    borderRadius: '0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  intro: {
    display: 'flex',
    flexFlow: 'column',
    alignSelf: 'center',
    textAlign: 'left',
    fontFamily: 'Rubik',

    '& div': {
      padding: '10px',
    }
  },
  date: {
    fontSize: '8px',
    lineHeight: '10px',
  },
  author: {
    color: '#2D2D2D',
    fontSize: '10px',
    lineHeight: '12px',
  },
  title: {
    color: '#F1A10A',
    fontWeight: '600',
    fontSize: '18px',
  },
  body: {
    color: '#2D2D2D',
    fontSize: '12px',
    padding: '5% 18%',
    textAlign: 'left',
  },
}))

function Post({ location }) {
  const style = useStyles()
  const props = location.state
  const date = parseISO(props.created_at)

  const formattedDate = format(
    date, 
    "MMMM dd', 'yyyy"
  )

  return (
    <App>
      <div className={style.root}>
        <Paper className={style.paper}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ButtonBase>
                <img alt="complex" className={style.image} src={props.image_url} />
              </ButtonBase>
            </Grid>
            <Grid item xs={6} className={style.intro}>
              <div>
                <p className={style.date}>
                  {formattedDate}
                </p>
                <p className={style.author}>
                  {props.author}
                </p>
                <p className={style.title}>
                  {props.title}
                </p>
              </div>
            </Grid>
            <Grid item xs={12}>
              <p className={style.body}>
                {props.body}
              </p>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </App>
  )
}


export default Post