import React from 'react'
import HeroSection from './sections/HeroSection'
import { Box } from '@mui/material'
import BusinessSolutions from './sections/BusinessSoluction'
import AdvancedTechnology from './sections/AdvancedTechnology'

const Industries = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <HeroSection />
      <BusinessSolutions />
      <AdvancedTechnology />
    </Box>
  )
}

export default Industries