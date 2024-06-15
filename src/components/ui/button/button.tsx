import React from "react"

interface IButton {
    label: string,
    variant?: string,
}

const Button = ({label, variant="primary" }: IButton) => {
    return (
        <button className={`btn ${variant}`}>
            {label}
        </button>
    )
}

export default Button