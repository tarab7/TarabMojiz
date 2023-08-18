import React, { useEffect, useState } from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedIcon from '@mui/icons-material/Verified';
import PeopleIcon from '@mui/icons-material/People';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    const [side, setSide]=useState(0);

    const showSideBar=()=> setSide(!side);

    return (
        <div className='Sidebar'>
        
        <div className="navbar" onMouseEnter={showSideBar}>
            <div className='topNav'>
                <img src="https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg?w=360&t=st=1692274797~exp=1692275397~hmac=163f09aa6f391cd77e98bb8401ddb0e053cb0f61f955e0188d2a05c62e8f1d6b" alt="" />
                <GridViewIcon className='icon'/>
                <HomeIcon className='iconActive'/>
                <VerifiedIcon className='icon'/>
                <PeopleIcon className='icon'/>
                <NoteAltIcon className='icon'/>
            </div>

            <div className='bottomNav'>
                <SettingsIcon className='icon'/>
                <LogoutIcon className='icon'/>
            </div>
        </div>

        <div className={side?'navbarFullActive': 'navbarFull'} onMouseLeave={showSideBar}>
            <div className='topNav'>
                <div className='profileFull'><img src="https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg?w=360&t=st=1692274797~exp=1692275397~hmac=163f09aa6f391cd77e98bb8401ddb0e053cb0f61f955e0188d2a05c62e8f1d6b" alt="" /><div className='navHeader'><span>Learn Music</span>Contact Support<span></span></div></div>
                <div className='fullIcons'><GridViewIcon className='icon'/><span>Music Overview</span></div>
                <div className='fullIconsActive'><HomeIcon className='icon'/><span>Music Classes</span></div>
                <div className='fullIcons'><VerifiedIcon className='icon'/><span>Music Grades</span></div>
                <div className='fullIcons'><PeopleIcon className='icon'/><span>Music Teachers</span></div>
                <div className='fullIcons'><NoteAltIcon className='icon'/><span>Music Notes</span></div>
            </div>

            <div className='bottomNav'>
                <div className='fullIcons'><SettingsIcon className='icon'/><span>Settings</span></div>
                <div className='fullIcons'><LogoutIcon className='icon'/><span>Log out</span></div>
            </div>
        </div>

        </div>
    )
}

export default Sidebar
