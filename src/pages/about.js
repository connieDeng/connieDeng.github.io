import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// import AboutFriendsNFamily from '../assets/content/about-content/about-friends-n-family.js';
import AboutWork from '../assets/content/about-content/about-work.js';
import AboutEnjoyment from '../assets/content/about-content/about-enjoyment.js';
import AboutGeneral from '../assets/content/about-content/about-general.js'
//filler image for now
import ImageIcon from '@material-ui/icons/Image';

const style = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));

export const About = (props) => {
    const classes = useTheme();

    return (
        <main className="about-container">
            <div className={classes.root}>
                {/* GRID FOR GENERAL PERSONAL STORY */}
                <Grid container spacing={3}>
                    <section className='about-general-containter'>
                        <Grid item xs={12}>
                            <div className='newLine'>
                                {'Hi, I\'m Connie!' + '\n' + 'I am in search of my life-goal.' + '\n\n'}
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className='newLine'>{AboutGeneral}</div>
                        </Grid>
                    </section>
                </Grid>
            </div>
        </main>
    )}
export default About
