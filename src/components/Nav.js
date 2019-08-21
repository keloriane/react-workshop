import React,{useState} from 'react'

const Nav = () => {
    const [open, isOpen ] = useState()
    const sayHello = () =>{
    }
    const handleMenu = () => {
        
    }
    return (
        <div className="nav-bar">
            <div className="menu">

            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Price</li>
                </ul>
            </nav>
            <button onClick={sayHello} >Say Hello</button>
        </div>
    )
}

export default Nav
