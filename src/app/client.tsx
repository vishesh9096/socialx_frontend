'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'

import Router from "../Router"
import Container from "../Container"
import "../styles/styles.css"


const Provider = dynamic(() => import("../Provider"), {
  ssr: false // Disable SSR
}); 

 
const App = dynamic(() => import('../views/DesignEditor/DesignEditor'), { ssr: false })
 
export function ClientOnly() {
  return (
    <Provider>
    <Container>
        <App  />
    </Container>
    </Provider>
  )
}