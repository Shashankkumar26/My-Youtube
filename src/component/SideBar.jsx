import React from 'react'
import { Stack } from '@mui/material'

import { categories } from '../utils/constants'


function SideBar({selectedCatogry, setSelectedCatogry}) {
  return (
    <Stack
    direction="row"
    sx={{
        overflowY: "auto",
        height: {sx:"auto" , md: '95%'},
        flexDirection: {md: 'column'},

    }}
 >
    {categories.map((category)=>(
          <button
          className='category-btn'
          onClick={()=>setSelectedCatogry(category.name)}
          style={{
            background: category.name === selectedCatogry && '#FC1503', color: 'white'
          }}
          key={category.name}
          >
            <span style={{ color : category.name === selectedCatogry ? 'while' : 'red' , margin : '15px' }}>{category.icon}</span>
            <span style={{opacity : category.name === selectedCatogry ? 1 : 0.8  }}>{category.name}</span>
          </button>
    ))}

    
 </Stack>
  )
}

export default SideBar
