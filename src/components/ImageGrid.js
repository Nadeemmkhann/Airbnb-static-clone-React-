import React from "react"
import grid from "../staticImages/photo-grid.png"

export default function ImageGrid() {
    return (
        <div className="image-grid" >
            <img src = {grid} width="300px" className="photo-grid"/>
        </div>
    )
}