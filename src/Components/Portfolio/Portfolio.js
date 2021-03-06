import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import port1 from '../../image/bridal.jpg'
import port7 from '../../image/djevent.png'
import port3 from '../../image/football.jpg'
import port4 from '../../image/shoeshop.jpg'
import port5 from '../../image/techvaly.jpg'
import port6 from '../../image/foodstore.JPG'
import Slide from 'react-reveal/Reveal'
const Portfolio = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    cardBg: {
      backgroundColor: '#424242',
    },
    infoColor: {
      color: '#ffffff',
    },
  })

  const classes = useStyles()
  return (
    <section className='portfolio pb-5'>
      <div className='container pb-5'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='page-title text-white'>Portfolio</h1>
          </div>
        </div>
        <div className='row d-flex justify-content-center align-items-center pt-5 pb-5'>
          <Slide bottom>
            <div className='col-md-3 pb-md-5 pb-4'>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={port5}
                    title='Contemplative Reptile'
                  />
                  <CardContent className={classes.cardBg}>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='h2'
                      className={classes.infoColor}
                    >
                      MERN E-commerce Website - Tech valy
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                      className={classes.infoColor}
                    >
                      <b>Functionality:</b>
                      <br />
                      Full featured shopping cart, Product reviews and ratings,
                      Product pagination, Product search feature, User profile
                      with orders, Admin product management, Admin user
                      management, Mark orders as delivered option, PayPal
                      Payment
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardBg}>
                  <Button
                    size='small'
                    color='primary'
                    className={classes.infoColor}
                  >
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/zayedibnibrahim/techvaly-mern-ecommerce'
                    >
                      <FontAwesomeIcon icon={faGithub} /> Git
                    </a>
                  </Button>
                  <Button
                    size='small'
                    color='primary'
                    className={classes.infoColor}
                  >
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='http://techvaly.herokuapp.com/'
                    >
                      <FontAwesomeIcon icon={faEye} /> Live Site
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
            <div className='col-md-3 pb-md-5 pb-4'>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={port6}
                    title='Contemplative Reptile'
                  />
                  <CardContent className={classes.cardBg}>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='h2'
                      className={classes.infoColor}
                    >
                      MERN Restaurant Food Order Service - Food Store
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                      className={classes.infoColor}
                    >
                      <b>Functionality:</b>
                      <br />
                      Full featured shopping cart, Quick product search feature,
                      Quick product search feature, Stripe payment and cash on
                      delivery, Google authentication with JWT token, Update
                      delivery and payment info from Admin panel and more
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardBg}>
                  <Button
                    size='small'
                    color='primary'
                    className={classes.infoColor}
                  >
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/zayedibnibrahim/foodstore-mern'
                    >
                      <FontAwesomeIcon icon={faGithub} /> Git
                    </a>
                  </Button>
                  <Button
                    size='small'
                    color='primary'
                    className={classes.infoColor}
                  >
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://food-store-add09.web.app/'
                    >
                      <FontAwesomeIcon icon={faEye} /> Live Site
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
            <div className='col-md-3 pb-md-5 pb-4'>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={port7}
                    title='Contemplative Reptile'
                  />
                  <CardContent className={classes.cardBg}>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='h2'
                      className={classes.infoColor}
                    >
                      DJ Event - Dj event posting Next js App
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                      className={classes.infoColor}
                    >
                      <b>Functionality:</b>
                      <br />
                      Strapi Admin Dashboard, User sign in and Sign up option,
                      User Create new Events, User crud operation, Fully
                      functional Admin panel
                      <br />
                      <br />
                      <br />
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardBg}>
                  <Button
                    size='small'
                    color='primary'
                    className={classes.infoColor}
                  >
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/zayedibnibrahim/djevent-next-frontend'
                    >
                      <FontAwesomeIcon icon={faGithub} /> Git
                    </a>
                  </Button>
                  <Button
                    size='small'
                    color='primary'
                    className={classes.infoColor}
                  >
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://djnextevents.vercel.app/'
                    >
                      <FontAwesomeIcon icon={faEye} /> Live Site
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>

            <div className='col-md-3 pb-md-5 pb-4'>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={port3}
                    title='Contemplative Reptile'
                  />
                  <CardContent className={classes.cardBg}>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='h2'
                      className={classes.infoColor}
                    >
                      Football Club Mania 2021 - CLub Info
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                      className={classes.infoColor}
                    >
                      <b>Functionality:</b>
                      <br />
                      Show Club Info, React Router, Props
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardBg}>
                  <Button
                    size='small'
                    color='primary'
                    className={classes.infoColor}
                  >
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/zayedibnibrahim/football-club-info'
                    >
                      <FontAwesomeIcon icon={faGithub} /> Git
                    </a>
                  </Button>
                  <Button
                    size='small'
                    color='primary'
                    className={classes.infoColor}
                  >
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://laughing-bartik-2b39f5.netlify.app/'
                    >
                      <FontAwesomeIcon icon={faEye} /> Live Site
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Slide>
        </div>
        <div className='row d-flex justify-content-start align-items-center pb-5'>
          <Slide bottom>
            <div className='col-md-3 pb-md-5 pb-4'>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={port1}
                    title='Contemplative Reptile'
                  />
                  <CardContent className={classes.cardBg}>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='h2'
                      className={classes.infoColor}
                    >
                      Bridal Evento - Wedding Photography Service
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                      className={classes.infoColor}
                    >
                      <b>Functionality:</b>
                      <br />
                      Google Auth, Order Service, Admin Panel, Customer
                      Dashboard, Add Service and Manege Order, Add New Admin,
                      Email
                      <br />
                      <br />
                      <br />
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardBg}>
                  <Button
                    size='small'
                    color='primary'
                    className={classes.infoColor}
                  >
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/zayedibnibrahim/bridal-evento-event-management'
                    >
                      <FontAwesomeIcon icon={faGithub} /> Git
                    </a>
                  </Button>
                  <Button
                    size='small'
                    color='primary'
                    className={classes.infoColor}
                  >
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://bridal-evento.web.app/'
                    >
                      <FontAwesomeIcon icon={faEye} /> Live Site
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
            <div className='col-md-3 pb-md-5 pb-4'>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={port4}
                    title='Contemplative Reptile'
                  />
                  <CardContent className={classes.cardBg}>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='h2'
                      className={classes.infoColor}
                    >
                      Complete Responsive Website -Show Store
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                      className={classes.infoColor}
                    >
                      <b>Functionality:</b>
                      <br />
                      HTML, CSS, Bootstrap, Fontawesome
                      <br />
                      <br />
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardBg}>
                  <Button
                    size='small'
                    color='primary'
                    className={classes.infoColor}
                  >
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/zayedibnibrahim/penguin-ecommerce'
                    >
                      <FontAwesomeIcon icon={faGithub} /> Git
                    </a>
                  </Button>
                  <Button
                    size='small'
                    color='primary'
                    className={classes.infoColor}
                  >
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://zayedibnibrahim.github.io/penguin-ecommerce/'
                    >
                      <FontAwesomeIcon icon={faEye} /> Live Site
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
