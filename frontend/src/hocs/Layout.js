import React, {useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'




const Layout =()=> {
    
    

    const [isOpen, setIsOpen] = useState(false)

    const toggle= () =>{
        setIsOpen(!isOpen)
    }
    return (
    <div>
    <Sidebar isOpen= {isOpen} toggle= {toggle}/>    
    <Navbar toggle= {toggle}/>
    {/* {props.children} */}
    </div>

);
    }
export default Layout;