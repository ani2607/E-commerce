const Button = (props) => {
    return (
        <button type="submit" className="bg-green-400 rounded" id="submit-button">{props.title || "Submit"}</button>
    )
}
export default Button;