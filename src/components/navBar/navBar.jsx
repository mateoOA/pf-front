import GralButton from '../../components/button/button';

export default function NavBar() {
    return (
        <div>
            <GralButton linkTo="/home" label="Home"/>
            <GralButton linkTo="/" label="Landing"/>
            <GralButton linkTo="/profile" label="Profile"/>
        </div>
    )
}