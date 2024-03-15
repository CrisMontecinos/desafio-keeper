import React, { useState } from 'react'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOptions'
import Footer from '../../components/common/footer'
import Delivery from '../../components/delivery'
import SalirCenar from '../../components/salirCenar'
import VidaNocturna from '../../components/vidaNocturna'

function HomePage() {

    const [activeTab, setActiveTab]= useState("")

  return (
    <div>
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer />

    </div>
  )
}

const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Delivery":
            return <Delivery />
        case "Salir a cenar":
            return <SalirCenar />
        case "Vida nocturna":
            return <VidaNocturna />
        default:
                return <Delivery />
    }
}

export default HomePage