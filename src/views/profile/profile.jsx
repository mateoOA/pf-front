import GralButton from '../../components/button/button';
import NavBar from "../../components/navBar/navBar";

export default function Profile() {
    return (
        <div>
             <>
                <NavBar/>
            </>
            <>
                <GralButton linkTo="/home" label="Home"/>
                <GralButton linkTo="/" label="Landing"/>
                <GralButton linkTo="/product" label="Product"/>
                <GralButton linkTo="/store" label="Store"/>
                <GralButton linkTo="/us" label="Us"/>
                <GralButton linkTo="/cart" label="Cart"/>
            </>
        </div>
    )
}