import React from 'react'
import { Link } from 'react-router-dom'
import { Typography , Card , CardContent , CardMedia } from '@mui/material'
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; 
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants"



function VideoCard({video : {id : {videoId } , snippet}}) {
  return (
    <div>
      <Card sx={{ width: { xs: '100%', sm: '358px', md: "300px" }, boxShadow: "none", borderRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
        <CardMedia
         image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
         alt = {snippet?.title}
         sx = { { width: { xs: '100%', sm: '358px', md: "300px"} , height : 180}}
        />
        </Link>
        
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>

         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <Typography varient="subtitle1" fontWeight='bold' color='#FFF'> 
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        
         </Link>
      
         <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography varient="subtitle2" fontWeight='bold' color='grey'> 
          {snippet?.channelTitle || demoChannelTitle}
          
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
         </Link>
        </CardContent>
        
        



      </Card>
  
      
    </div>
  )
}

export default VideoCard
