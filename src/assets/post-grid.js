import React, {useState, useMemo, useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import Pagination from '@material-ui/lab/Pagination';
// import {TagRow} from './'
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';

export default function PostGrid ({posts}) {
    //only show 9 records at a time
    const [pageSize, setPageSize] = useState(9)
    //setting current post to first post
    const [current, setCurrent] = useState(1)

    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    //on update when page size changes or current page changes
    //used to calculate/run ONLY during certain situations; avoids expensive calculations
    const paginatedPosts = useMemo(() => {
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize

        return posts.slice(firstIndex, lastIndex)
    }, [current, pageSize, posts])
    //^Above are dependencies, only when these change do you rerender

    // useEffect(() => {
    //     window.scroll({
    //         top: 0,
    //         left: 0,
    //         behavior: 'smooth'
    //     })
    // }, [current, pageSize])
    //when these change, scroll up for user
    //without dependencies will only happen when you mount your component
    //use effect when some external effect when a variable changes



    return (
        <section className="grid-pagination-container">
            <section className="post-grid container">
                {paginatedPosts.map((post, index) => (
                    <div className="post-container" onClick={handleOpen}>
                        {/* figure around images for accessability reasons*/}
                        <figure>
 
                        </figure>
                        {/* <TagRow tags={post.categories} /> */}
                        <h2>{post.title}</h2>
                        <p className="author-text">
                            <span>
                                {post.description}
                            </span>
                        </p>
                    </div>
                ))}
            </section>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                // className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <div>
                <h2 id="spring-modal-title">Spring modal</h2>
                <p id="spring-modal-description">react-spring animates me.</p>
            </div>
            </Modal>
            {/* <Pagination
                simple
                showSizeChanger
                onShowSizeChange={setPageSize}
                pageSize={pageSize}
                total={posts.length}
                defaultCurrent={current}
                onChange={setCurrent}
            /> */}
        </section>
    )
}