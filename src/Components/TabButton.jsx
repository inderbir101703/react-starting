function TabButton({onClick, isSelected,children}){
    return <li>
        <button className={isSelected ? "active" : undefined} onClick={onClick}>{children}</button>
    </li>}
export default TabButton
