import React from 'react'
import Grid from '@material-ui/core/Grid';

import PostGrid from '../components/post-grid'
import ProjectsContent from './../assets/content/projects-content';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

export default function Projects () {
    
    const posts = ProjectsContent

    return (
        <main className="projects-containter">
            <section className="projects-grid-container">
                <h1> Projects </h1>
                <Grid container spacing={8}>
                    {posts.map((post, index) => (
                            <Grid item xs={12} sm={6} key={post.id}>
                                <Link to={post.link}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                style={{height: '35vh', paddingTop: '0'}}
                                                //This is grabbed from public img file
                                                image={`./images/${post.image}`}
                                                title="filler img"
                                            >
                                            </CardMedia>
                                        <CardContent style={{height: '15vh'}}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {post.title}{'\n'}
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary" component="p">
                                                {post.shortDescription}
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
                </Grid>
            </section>
        </main>
    )}