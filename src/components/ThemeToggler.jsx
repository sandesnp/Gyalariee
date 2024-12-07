const ThemeToggler = ({setIsDarkTheme}) => {
    return (
        <div className="theme-toggler">
            <input type="checkbox" id="theme-switch" onChange={()=>setIsDarkTheme(prev=>!prev)}/>
            <label htmlFor="theme-switch"> theme</label>
        </div>
    );
}

export default ThemeToggler;