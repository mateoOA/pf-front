import GralButton from '../../components/button/button';
import NavBar from "../../components/navBar/navBar";

export default function Us() {
    return (
        <div>
            <>
                <NavBar/>
            </>
            <>
                <GralButton linkTo="/home" label="Home"/>
                <GralButton linkTo="/" label="Landing"/>
                <GralButton linkTo="/product" label="Product"/>
                <GralButton linkTo="/profile" label="Profile"/>
                <GralButton linkTo="/store" label="Store"/>
                <GralButton linkTo="/cart" label="Cart"/>
            </>
        </div>
    )
}