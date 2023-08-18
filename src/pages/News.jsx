import React from 'react'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { newsdata } from '../newsdata';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className='newspage'>

            <div className='searchbox'>
                <input type="text" placeholder="Search for music notes" />

                <div className='searchItems'>

                    <button>Learn</button>
                    <Badge color="error" variant="dot">
                        <SearchIcon className='icon' />
                    </Badge>

                    <Badge color="error" variant="dot">
                        <QueueMusicIcon className='icon' />
                    </Badge>

                    <div className='profilePic'>
                        <img src="https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg?w=360&t=st=1692274797~exp=1692275397~hmac=163f09aa6f391cd77e98bb8401ddb0e053cb0f61f955e0188d2a05c62e8f1d6b" alt="" />
                    </div>

                </div>
            </div>

            <h1>News</h1>
            <div className='newsbottom'>

                <div className='newsSection'>
                    <div className='newsHeader'>
                        <h3>Latest</h3>
                        <div className='inputsIcon'>
                            <input type="text" placeholder='Search news' />
                            <KeyboardArrowDownIcon className='icon' />
                        </div>
                    </div>

                    {
                        newsdata.map((n) => (
                            <div className='newsItem'>
                                <img src={n.img} alt="" />
                                <div className='info'>
                                    <div className='nameTime'>
                                        <p className='name'>{n.name}</p>
                                        <span className='time'>
                                            <p>{n.time}</p>
                                            <FiberManualRecordIcon className='liveIcon' />
                                        </span>
                                    </div>
                                    <p className='itemDetail'>{n.title}</p>
                                    <p className='itemDetail'>{n.comment}</p>
                                    <div className='action'>
                                        <p>Like</p>
                                        <p>Reply</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className='filterSection'>
                    <h3>Filter</h3>
                    <ul>
                        <li><span>Comments</span><input type="checkbox" checked /></li>
                        <li><span>Likes</span><input type="checkbox" checked /></li>
                        <li><span>Review</span><input type="checkbox" checked /></li>
                        <li><span>Mentions</span><input type="checkbox" checked /></li>
                        <li><span>Purchases</span><input type="checkbox" checked /></li>
                        <li><span>Message</span><input type="checkbox" checked /></li>
                    </ul>
                    <div className='buttons'>
                        <button>Select all</button>
                        <button>Unselect all</button>
                    </div>
                </div>


            </div>
            <Link to="/" className='prevPage'>
                <ArrowLeftIcon className='icon' />
                <p>Prev</p>
            </Link>
        </div>
    )
}

export default News
