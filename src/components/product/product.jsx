import NavBar from "../../components/navBar/navBar";

export default function Product(id, title, price, category, diet, flavor, weight, image) {
    return (
        <div>            
            <>
                <NavBar/>
            </>
            <>
                <span>
                    <img src={image} alt="Product"/>
                </span>
                <span>
                    <h5>{category}</h5>
                    <h4>{title}</h4>
                    <h5>{flavor}</h5>
                    <h4>${price}</h4>
                    <h6>{diet}</h6>
                    <h6>{weight.value} {weight.type}</h6>
                </span>
            </>
        </div>
    )
}
