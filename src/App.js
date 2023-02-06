import React from "react"
import Navbar from "./components/Navbar"
import ImageGrid from "./components/ImageGrid"
import Text from "./components/Text"
import Card from "./components/Card"
import data from "./data"


export default function App() {
    const cards = data.map((ele) => {
        return (
            <Card 
                key = {ele.id}
                {...ele}
                // {img = {ele.coverImg}
                // rating = {ele.stats.rating}
                // viewCount = {ele.stats.reviewCount}
                // title = {ele.title}
                // location = {ele.location}
                // price = {ele.price}
                // openSpots = {ele.openSpots}}
            />
        )
    })
    return (
        <>
            <Navbar></Navbar>
            <ImageGrid></ImageGrid>
            <Text></Text>
            <div className="section">
                {cards}
            </div>
        </>
    )
}