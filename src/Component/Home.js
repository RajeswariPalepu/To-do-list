import React from 'react'
import { Link } from "react-router-dom"

function Home() {
    return (
        <div
            className="p-5 text-center bg-image"
            style={{
                backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
                height: '100vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white content-right" >
                <Link to="/register">
                        <a class="navbar-brand" href="#"><h1>Register</h1></a>
                    </Link>
                    <Link to="/login">
                        <a class="navbar-brand" href="#"><h1>Login</h1></a>
                    </Link>
                </nav>
            </header>
        </div>
    )
}

export default Home
