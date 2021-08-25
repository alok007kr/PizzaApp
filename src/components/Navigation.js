import { findByLabelText } from '@testing-library/dom';
import {Link} from 'react-router-dom';
const Navigation = () => {

    const cartstyle = {
        background:'#F59E00',
        display:'flex',
        padding:'6px 12px',
        borderRadius:'50px',
    }

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-5">
                    <Link to="/">
                        <img style={{height:60}} src="./images/logo.png" alt=""/>
                    </Link>
                    <ul className="flex items-center">
                        <li><Link to="/">Home</Link></li>
                        <li className="ml-12"><Link to="/products">Products</Link></li>
                        <li className="ml-12">
                            <Link to="/cart">
                                <div style={cartstyle}>
                                    <span>10</span>
                                    <img className="ml-2" src="./images/cart.png" alt="cart-icon"/>
                                </div>
                            </Link>
                        </li>
                    </ul>
            </nav>  
        </>
    )
}

export default Navigation

