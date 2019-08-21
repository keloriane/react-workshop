import React,{useState} from 'react'

const Nav = () => {
    const [open , setOpen ] = useState(false)
    const [movie , setMovie ] = useState(false)
    const sayHello = () =>{
        console.log('hello')
    }
  
    const handleOpenMenu = ()=>{
      setOpen(open => !open)
      console.log(open)
    }
    const handleChangeMovie = ()=>{
        setMovie()
    }
    const handleChange = (e)=>{
        console.log(e.target.value)
    }
    return (
        <div className="nav-bar">
            <input type="text" onChange={handleChange}/>
            <div className="menu" onClick={handleOpenMenu}>

            </div>
            <nav className="nav-menu">
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
