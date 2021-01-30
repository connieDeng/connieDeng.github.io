import React, {useState, useMemo, useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import Pagination from '@material-ui/lab/Pagination';
// import {TagRow} from './'
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function PostGrid ({posts}) {
    // //only show 9 records at a time
    // const [pageSize, setPageSize] = useState(9)
    // //setting current post to first post
    // const [current, setCurrent] = useState(1)

    // //on update when page size changes or current page changes
    // //used to calculate/run ONLY during certain situations; avoids expensive calculations
    // const paginatedPosts = useMemo(() => {
    //     const lastIndex = current * pageSize
    //     const firstIndex = lastIndex - pageSize

    //     return posts.slice(firstIndex, lastIndex)
    // }, [current, pageSize, posts])
    // //^Above are dependencies, only when these change do you rerender

    return (
        <section className="grid-pagination-container">
            <section className="post-grid container">
                {posts.map((post, index) => (
                    <Grid xs={12} sm={6}>
                        <Card key={post.id}>
                            <CardActionArea>
                                <CardMedia
                                    style={{height: '10vh', paddingTop: '0'}}
                                    //This is grabbed from public img file
                                    image={`./images/${post.image}`}
                                    title="filler img"
                                >
                                </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {post.title}{'\n'}{`./images/${post.image}`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {post.shortDescription}
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </section>
        </section>
    )
}