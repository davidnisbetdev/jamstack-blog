import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'

const useStyles = makeStyles({
    bannerStyle: {
        margin: '3rem 0'
    },
    paddingBottom: {
        paddingBottom: '1rem'
    }
})

const BlogLayout = () => {
    const {bannerStyle, paddingBottom} = useStyles()
    return (
      <Grid container justify="center">
        <Grid item xs={8}>
          <div className={bannerStyle}>
            <Image
              src="/pnwbnUg.png"
              layout="responsive"
              height={1080}
              width={1920}
              objectFit="cover"
              alt="Yes"
            />
          </div>

          <Typography
            variant="h3"
            component="h1"
            align="center"
            className={paddingBottom}
          >
            Setup ESLint, blah, blah
          </Typography>

          <Grid container className={paddingBottom} justify='space-evenly'>
            <Grid item>
              <Typography variant="h6">Creation Date</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">X min read</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">X Views</Typography>
            </Grid>
          </Grid>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis, velit eius sint voluptatum maiores hic sequi possimus non esse? 
          Nisi sit ab unde, quasi sunt maiores quas praesentium voluptatibus iure dolorum consequatur debitis consequuntur ad repellendus quaerat voluptates blanditiis possimus velit, 
          vel reiciendis tempora magni explicabo. Repellendus molestiae harum vitae autem quae cupiditate sunt dolores reprehenderit, 
          laudantium id deserunt blanditiis necessitatibus architecto ipsum nesciunt minus quasi quo, dolore aspernatur ab maiores? 
          Porro mollitia earum, exercitationem error quis cumque facere excepturi blanditiis, nisi suscipit pariatur neque! 
          Pariatur laudantium nostrum sapiente excepturi facilis, repudiandae obcaecati non molestias quis accusamus doloribus ipsam fugit maxime earum totam modi autem molestiae voluptate voluptates. 
          Minima atque, ex magnam minus dolorum libero cum eaque provident qui esse iste officia non nulla sed perferendis natus animi rerum laudantium debitis. 
          Sed voluptate quia numquam rem consequuntur harum et ut tenetur officia, quod facere amet, atque assumenda a. 
          Quod dignissimos amet debitis sit reiciendis, cumque dolor iusto, sapiente porro earum autem?
        </Grid>
      </Grid>
    );
}

export default BlogLayout
