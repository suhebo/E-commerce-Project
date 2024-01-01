import { useState } from "react"
function Header (){
    const [isOpen ,setIsOpen] = useState(false)
    const handleIsOpen = () => {
        setIsOpen(true)
    }
    const handleIsClose = () => {
        setIsOpen(false)
    }

    return <div className="bg-primaryColor flex justify-between text-secondaryColor p-5">
        <h1 style={{fontSize: isOpen === true ? "15px" : "" }} className="font-bold sm:text-3xl text-2xl ">E-commerce</h1>

        <i onClick={handleIsOpen} style={{display:isOpen === true ? "none" : ""}} class="fa-solid fa-bars absolute right-0 text-2xl  sm:hidden mr-5"></i>
        
        <i onClick={handleIsClose} style={{display:isOpen === true ? "block" : "none" }} class="fa-solid fa-xmark hidden absolute right-2 text-4xl"></i>
        
        <ul style={{display:isOpen === true ? "block" : "" }} className="sm:flex flex-col sm:gap-20 text-2xl space-y-4 sm:space-y-0 mt-10 sm:flex-row sm:mt-0 hidden ml-20">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
        </ul>
        <ul className="text-2xl">
            <li><i class="fa-solid fa-cart-shopping mr-20"></i></li>
        </ul>
    </div>
}
export default Header