import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import fillerImg from './../assets/images/fillerImg.jpg'

export default function Projects () {
    return (
        <main className="projects-containter">
            <Grid container spacing={3}>
                <Grid item xs={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia style = {{ height: 0, paddingTop: '56%'}}
                        image={fillerImg}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            PROJ 1 LMAO
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            PROJ 1 LMAO
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia style = {{ height: 0, paddingTop: '56%'}}
                        image={fillerImg}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            PROJ 2 LMAO
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            PROJ 2 LMAO
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia style = {{ height: 0, paddingTop: '56%'}}
                        image={fillerImg}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            PROJ 3 LMAO
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            PROJ 3 LMAO
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
            </Grid>
        </main>
    )}