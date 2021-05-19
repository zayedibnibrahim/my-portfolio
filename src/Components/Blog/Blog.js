import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import firstPost from '../../image/javascript-fundamental.jpg'
import secondPost from '../../image/second post.jpg'
import react from '../../image/react.png'
import top10 from '../../image/top-10-javascript.jpg'
import './Blog.css'
import Slide from 'react-reveal/Reveal';
const Blog = () => {
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
        <section className="blog pb-5">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-title text-white">Blog</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center pt-5 pb-5">
                <Slide bottom>
                    <div className="col-md-3 pb-md-5 pb-4">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={firstPost}
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.cardBg}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.infoColor}>
                                    Get Started With JavaScript Fundamental.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.infoColor}>
                                        <b>Topic:</b><br />
                                        Why to learn JavaScript?,  Introduction of JavaScript Array,What is JavaScript Array?, JavaScript Variable and more
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardBg}>
                                <Button size="small" color="primary" className={classes.infoColor}>
                                    <a target="_blank" rel="noreferrer" href="https://zayed-ibn-ibrahim.medium.com/introduction-of-javascript-array-7ec235ee431d"><FontAwesomeIcon icon={faEye} /> Read</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-3 pb-md-5 pb-4">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={secondPost}
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.cardBg}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.infoColor}>
                                    Lets visit the core fundamental of JavaScript
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.infoColor}>
                                        <b>Topic:</b><br />
                                        Introduction of JavaScript Array,  What is JavaScript Array?, Conditional (ternary) operator, JavaScript Number and more
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardBg}>
                                <Button size="small" color="primary" className={classes.infoColor}>
                                    <a target="_blank" rel="noreferrer" href="https://zayed-ibn-ibrahim.medium.com/lets-visit-the-core-fundamental-of-javascript-9a4e8588d347"><FontAwesomeIcon icon={faEye} /> Read</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-3 pb-md-5 pb-4">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={react}
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.cardBg}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.infoColor}>
                                    On the way to React Js
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.infoColor}>
                                        <b>Topic:</b><br />
                                        Is React a library or a framework,  React components, Why is React named “React” anyway?, Functions vs classes and more
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardBg}>
                                <Button size="small" color="primary" className={classes.infoColor}>
                                    <a target="_blank" rel="noreferrer" href="https://zayed-ibn-ibrahim.medium.com/on-the-way-to-react-js-47dfd30735bc"><FontAwesomeIcon icon={faEye} /> Read</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-3 pb-md-5 pb-4">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={top10}
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.cardBg}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.infoColor}>
                                    10 JavaScript Tricky Concept
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.infoColor}>
                                        <b>Topic:</b><br />
                                        Different between == vs ===,  Different Between bind(), call(), apply(), This in JavaScript, Asynchronous Javascript and more
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardBg}>
                                <Button size="small" color="primary" className={classes.infoColor}>
                                    <a target="_blank" rel="noreferrer" href="https://zayed-ibn-ibrahim.medium.com/10-javascript-tricky-things-c3c72e447183"><FontAwesomeIcon icon={faEye} /> Read</a>
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

export default Blog;