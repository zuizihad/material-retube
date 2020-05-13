import React from 'react'
import  { Grid } from '@material-ui/core'
import {SearchBar, VideoDetails, VideoList } from './components'

import youtube from './api/youtube'

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snipet',
                maxResults: 5,
                key:'AIzaSyBJ0MfIC5Od8I6qtEZ2DGhmaWjnvSfxtYo',
                q: searchTerm
            }
            })
            this.setState({ video: response.data.items, selectedVideo: response.data.items[0]})
            

    }
    render() {
        const selectedVideo = this.state;
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}> 
                            <VideoDetails video={selectedVideo }/>
                        </Grid>
                        <Grid item xs={4}>
                           <VideoList videos={videos}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default App;