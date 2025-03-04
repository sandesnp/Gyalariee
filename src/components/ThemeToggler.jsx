const ThemeToggler = ({ onThemeToggle, isDarkTheme }) => {
  return (
    <div className='theme-toggler'>
      <label htmlFor='checkbox' className='theme-toggler__checkbox-label'>
        <input
          type='checkbox'
          id='checkbox'
          className='theme-toggler__checkbox'
          onChange={onThemeToggle}
          checked={isDarkTheme}
        />
        <span className='theme-toggler__icon'></span>
      </label>
    </div>
  );
};

export default ThemeToggler;
