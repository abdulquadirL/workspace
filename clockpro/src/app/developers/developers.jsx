"use client"
import { Box } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/navigation'

export const developers = () => {
    const route = useRouter()
  return (
    <Box>
       Hello Devs! 
    </Box>
  )
}

