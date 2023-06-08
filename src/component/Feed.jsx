import React from "react";
import Video from "./Video";
import { useState , useEffect } from "react";

import { Box , Stack , Typography } from "@mui/material";
import SideBar from "./SideBar";
import { fetchFromAPI } from "../utils/FetchApi";

const Feed = () => {

  const [selectedCatogry,setSelectedCatogry] = useState('New');

  const [video , setVideo] = useState([]);

  useEffect(()=>
  {
    fetchFromAPI(`search?part=snippet&q=${selectedCatogry}`)
    .then((data) =>  setVideo(data.items))

  }, [selectedCatogry]);


  return (
  <Stack sx={ { flexDirection: { sx:"column",  md:"row"}}} >
    <Box sx={ {height : { sx:"auto" , md:"92vh" }, borderRight:"1px solid #3d3d3d" , px:{sx:0,md:2} }  } >

     < SideBar 
     selectedCatogry={selectedCatogry}
     setSelectedCatogry={setSelectedCatogry}
     
     />
      <Typography className="copyright"
      variant="body2" sx={{ mt:1.5, color: "#fff" }}
       > Copyright 2023 </Typography>
    </Box>

    <Box   p={2}  sx={{overflowY: 'auto', height : '90vh' , flex : 2}}  >

      <Typography varient = 'h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
         {selectedCatogry} <span style={{ color:'#F31503'}}>videos</span> </Typography>

   <Video videos={video}/>
    </Box>


    


  </Stack>


  )
}

export default Feed;
