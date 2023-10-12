import GralButton from '../../components/button/button';
import NavBar from "../../components/navBar/navBar";
export default function Store() {
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
                <GralButton linkTo="/us" label="Us"/>
                <GralButton linkTo="/cart" label="Cart"/>
            </>
        </div>
    )
}
