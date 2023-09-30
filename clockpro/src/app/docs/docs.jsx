"use client"

import { Box } from "@chakra-ui/react"
import { useRouter } from "next/navigation"


export const docs = () => {
    const route = useRouter()
  return (
    <Box>
        Hello Docs
    </Box>
  )
}
