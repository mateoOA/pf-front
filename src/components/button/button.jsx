import "./buttonStyle.css"

export default function GralButton({linkTo, label} ){
   
    return(
        <a href={linkTo}>
            <button className="gralButton">{label}</button>
        </a>
    )
}