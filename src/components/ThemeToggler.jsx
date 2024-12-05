import "../css/themeToggler.css";

const ThemeToggler = ({handleChange, isChecked}) => {
    return (
        <div className="theme-toggler">
            <input type="checkbox" id="theme-switch" onChange={handleChange} checked={isChecked}/>
            <label htmlFor="theme-switch"> theme</label>
        </div>
    );
}

export default ThemeToggler;