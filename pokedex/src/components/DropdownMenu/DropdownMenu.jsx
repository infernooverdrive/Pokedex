import { useState } from "react"
import './DropdownMenu.css';

export default function DropdownMenu(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return <div className='dropdown'>
        <button onClick={(e) => {
            e.preventDefault();
            console.log(isOpen)
            toggleDropdown();
        }} className='dropdown-btn'>{props.label}</button>
        <div className={isOpen ? "dropdown-menu-visible" : "dropdown-menu-hidden"}>
            {props.contents}
        </div>
    </div>
}