import React from 'react';

function pageSideMenu({menu}) {
    return (
        <div className="sidebar-item">
        <p>{menu.name}</p>
        </div>
    );
}

export default pageSideMenu;