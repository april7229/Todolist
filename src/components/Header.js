//inline export
import React from 'react';

export const Header = () => {
    const x = 1;
    return(
        <header className = "header" data-testid="header">

            <nav>
            <div className="logo">
                <img src = "/images/logo.png" alt="Todolist" />

            </div>
            <div className="settings"></div>
            <ul>
                
            </ul>
            </nav>
        
        </header>
    )
}