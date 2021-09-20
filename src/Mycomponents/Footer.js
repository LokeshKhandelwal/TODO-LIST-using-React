import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        width: "100%",
        top: "100vh",
    }
    return (
        <footer className="bg-dark text-light  bottom py-2" style={footerStyle}>
            <p className="text-center"> Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
