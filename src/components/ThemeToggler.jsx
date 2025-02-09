const ThemeToggler = ({ setIsDarkTheme, isDarkTheme }) => {
    return (
      <div className="theme-toggler">
        <label htmlFor="checkbox" className="theme-toggler__checkbox-label">
          <input
            type="checkbox"
            id="checkbox"
            className="theme-toggler__checkbox"
            onChange={() => setIsDarkTheme((prev) => !prev)}
            checked={isDarkTheme}
          />
          {isDarkTheme ? "Dark" : "Light"} Theme
          <span className="theme-toggler__icon"></span>
        </label>
      </div>
    );
  };
  
  export default ThemeToggler;
