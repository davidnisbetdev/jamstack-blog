import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import SearchBox from '../../Components/SearchBox/SearchBox'

const Search = () => {
    return (
      <Grid container justify='center'>
        <Grid item xs={12}>
            <Typography variant='h2' color='secondary' align='center'>
                Search Blog
            </Typography>
        </Grid>
        <Grid item xs={10}>
            <SearchBox></SearchBox>
        </Grid>
      </Grid>
    );
}

export default Search
