import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import AboutFriendsNFamily from '../assets/content/about-friends-n-family.js';
import AboutWork from '../assets/content/about-work.js';
import AboutEnjoyment from '../assets/content/about-enjoyment.js';
import AboutGeneral from '../assets/content/about-general.js'
//filler image for now
import ImageIcon from '@material-ui/icons/Image';

const style = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        width: '20px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  }));

export const About = (props) => {
    const classes = useTheme();

    return (
        <main className="about-container">
            <div className={classes.root}>
                {/* GRID FOR GENERAL PERSONAL STORY */}
                <Grid container spacing={3}>
                    {/* GENERAL HEADING */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4">
                                {'Heading for Some description of you'}
                            </Typography>
                        </Paper>
                    </Grid>
                    {/* GENERAL CONTENT */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="subtitle1" gutterBottom>
                                {AboutGeneral}
                            </Typography>
                        </Paper>
                    </Grid>
                    {/* ABOUT FRIENDS & FAMILY */}
                    <Grid item xs={6}>
                        <Typography variant="h5" gutterBottom>
                            {'Family & Friends'}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {AboutFriendsNFamily}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <ImageIcon/>
                    </Grid>
                    {/* ABOUT WORK */}
                    <Grid item xs={6}>
                        <Typography variant="h5" gutterBottom>
                            {'Work'}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {AboutWork}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <ImageIcon/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" gutterBottom>
                            {'Enjoyment Activities'}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {AboutEnjoyment}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <ImageIcon/>
                    </Grid>
                </Grid>
                {/* GRID FOR EXPERIENCE/RESUME TYPE THING */}
                <Grid container spacing={3}>
                    {/* LITERALLY JUST FOR TITLE EXPERIENCE */}
                    <Grid item xs={12}>
                        <Typography variant="h4">
                            {'Experience'}
                        </Typography>
                    </Grid>
                    {/* WORK/RESUME */}
                    <Grid item xs={6}>
                        <Paper className={classes.paper}> {'position front-end, etc.'}</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}> {'company name'} </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}> {'date'} </Paper>
                    </Grid>
                    {/* INFO ABOUT YOUR EDUCATION/YOUR CERTIFICATES */}
                    <Grid item xs={12}>
                        <Typography variant="h4">
                            {'Education/Certificates'}
                        </Typography>
                    </Grid>
                    {/* WORK/RESUME */}
                    <Grid item xs={6}>
                        <Paper className={classes.paper}> {'more specific, computer science'}</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}> {'school name/certificate name'} </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}> {'date'} </Paper>
                    </Grid>

                    
                </Grid>
            </div>
        </main>
    )}
export default About
