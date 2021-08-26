import React from 'react'
import Typography from '@material-ui/core/Typography'
import BlogPreviewLayout from '../../Components/Layouts/BlogPreviewLayout'

const Query = () => {
    return (
       <>
        <Typography color='secondary' varian='h2' component='h1'>You have X search results based on the Query</Typography>

        <BlogPreviewLayout />
       </>
    )
}

export default Query
