import GralButton from '../../components/button/button';
import NavBar from "../../components/navBar/navBar";

export default function Landing() {
    return (
        <div>
             <>
                <NavBar/>
            </>
            <>
                <GralButton linkTo="/home" label="Home"/>
                <GralButton linkTo="/product" label="Product"/>
                <GralButton linkTo="/profile" label="Profile"/>
                <GralButton linkTo="/store" label="Store"/>
                <GralButton linkTo="/us" label="Us"/>
            </>
        </div>
    )
}