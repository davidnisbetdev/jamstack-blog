import React from 'react'
import Image from 'next/image'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import MuiLink from '../Components/Links/MuiLink'

const BlogPreview = () => {
    return (
        <Card>
            <CardHeader title={
                <MuiLink MuiComponent={Typography} href='/FILLLATER' variant='h6'>
                    Why I made this Blog
                </MuiLink>
            } 
            
            subheader={<>qfffwegwegwg</>}/>
        </Card>
    )
}

export default BlogPreview
