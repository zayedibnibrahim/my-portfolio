import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import port1 from '../../image/bridal.jpg'
import port2 from '../../image/foodking.jpg'
import port3 from '../../image/football.jpg'
import port4 from '../../image/shoeshop.jpg'
import Slide from 'react-reveal/Reveal';
const Portfolio = () => {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
        cardBg: {
            backgroundColor: "#424242"
        },
        infoColor: {
            color: '#ffffff'
        }
    });

    const classes = useStyles();
    return (
        <section className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-title text-white">Portfolio</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center pt-5 pb-5">
                    <Slide bottom>
                    <div className="col-md-3">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={port1}
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.cardBg}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.infoColor}>
                                        Bridal Evento - Wedding Photography Service
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.infoColor}>
                                        <b>Functionality:</b><br />
                                       Google Auth, Order Service, Admin Panel, Customer Dashboard, Add Service and Manege Order, Add New Admin, Email
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardBg}>
                                <Button size="small" color="primary" className={classes.infoColor}>
                                    <a target="_blank" rel="noreferrer" href="https://github.com/zayedibnibrahim/bridal-evento-event-management"><FontAwesomeIcon icon={faGithub} /> Git</a>
                                </Button>
                                <Button size="small" color="primary" className={classes.infoColor}>
                                    <a target="_blank" rel="noreferrer" href="https://bridal-evento.web.app/"><FontAwesomeIcon icon={faEye} /> Live Site</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={port2}
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.cardBg}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.infoColor}>
                                        Food King - Fast Food Restaurant
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.infoColor}>
                                        <b>Functionality:</b><br />
                                       Google Auth, Order Service, Admin Panel, Add Food and Manege Order, Add New Admin
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardBg}>
                                <Button size="small" color="primary" className={classes.infoColor}>
                                    <a target="_blank" rel="noreferrer" href="https://github.com/zayedibnibrahim/food-king-restaurant"><FontAwesomeIcon icon={faGithub} /> Git</a>
                                </Button>
                                <Button size="small" color="primary" className={classes.infoColor}>
                                    <a target="_blank" rel="noreferrer" href="https://food-king-769c1.web.app/"><FontAwesomeIcon icon={faEye} /> Live Site</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={port3}
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.cardBg}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.infoColor}>
                                        Football Club Mania 2021 - CLub Info
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.infoColor}>
                                        <b>Functionality:</b><br />
                                       Show Club Info, React Router, Props<br /><br /><br />
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardBg}>
                                <Button size="small" color="primary" className={classes.infoColor}>
                                    <a target="_blank" rel="noreferrer" href="https://github.com/zayedibnibrahim/football-club-info"><FontAwesomeIcon icon={faGithub} /> Git</a>
                                </Button>
                                <Button size="small" color="primary" className={classes.infoColor}>
                                    <a target="_blank" rel="noreferrer" href="https://laughing-bartik-2b39f5.netlify.app/"><FontAwesomeIcon icon={faEye} /> Live Site</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={port4}
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.cardBg}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.infoColor}>
                                        Complete Responsive Website -Show Store
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.infoColor}>
                                        <b>Functionality:</b><br />
                                       HTML, CSS, Bootstrap, Fontawesome<br/><br/><br/>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardBg}>
                                <Button size="small" color="primary" className={classes.infoColor}>
                                    <a target="_blank" rel="noreferrer" href="https://github.com/zayedibnibrahim/penguin-ecommerce"><FontAwesomeIcon icon={faGithub} /> Git</a>
                                </Button>
                                <Button size="small" color="primary" className={classes.infoColor}>
                                    <a target="_blank" rel="noreferrer" href="https://zayedibnibrahim.github.io/penguin-ecommerce/"><FontAwesomeIcon icon={faEye} /> Live Site</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;