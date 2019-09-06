import React from 'react';
import { FaChevronDown,
    FaRegCalendar,
    FaRegCalendarAlt,
    FaInbox,
} from 'react-icons/fa';

 


export const Sidebar = () => (
<div className = "sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
        <li>
        <span>
            <FaInbox />
            </span>
            <span>Inbox</span>
        </li>
            <span>
                <FaRegCalendar />
            </span>
        <span>Today</span>

        <li>Next 7 days </li>
    </ul>
    </div>
    

    
);
    
