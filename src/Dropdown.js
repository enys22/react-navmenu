import React from 'react';

const Dropdown = (proprs) => {

    return(

        <ul className="menu">
            {proprs.menu.map(el=>
            
            <li className="dropdown">{el.title}
                    {!el.drop ? null : <ul className="dropdown-content"> {el.drop.map(drop => <li>{drop}</li>)} </ul>}
            </li>
            )}
        </ul>

    )

}

export default Dropdown;