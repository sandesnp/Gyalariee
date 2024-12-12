
function DropdownItem (props){
    return (
        <label className="dropdown-menu__item">
            <input
            name={props.name}
            type="checkbox"
            className="dropdown-menu__checkbox"
            /> {props.criteria}
        </label>   )    
}   

export default DropdownItem ; 