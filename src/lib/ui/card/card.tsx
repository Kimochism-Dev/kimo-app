import React, { ReactNode } from "react"

interface ICard {
    title?: string,
    children?: ReactNode,
    footer?: ReactNode
}

const Card = ({title, children, footer}: ICard) => {
    return (
        <div className="card">
            <div className="card-container">
                <div className="card-title">
                {
                    title 
                    ? <h3>{title}</h3>
                    : null
                }
                </div>
                <div className="card-body">
                    {children}
                </div>
            </div>
            <div className="card-footer">
                {footer}
            </div>
        </div>
    )
}

export default Card