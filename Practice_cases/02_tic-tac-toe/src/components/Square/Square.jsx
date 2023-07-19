import { useState } from 'react'
import './index.css'


export default function Square({value, onSquareClick}){


    return (
        <>
            <button onClick={onSquareClick} className="square">{value}</button>
        </>
    )
}