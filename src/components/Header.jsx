/* eslint-disable react/prop-types */

const Header = (props) => {
    return (
    <header className="header-container">
        <p className="font-bold text-xl">TailsInTheWind</p>
        <div className="flex justify-self-end">
            <button onClick={props.toggleDarkmode}>Toggla!</button>
        </div>
    </header>
    )
}

export default Header;