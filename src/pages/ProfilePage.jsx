import React from 'react'
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { songsdata } from "../songsdata";
import { friendsdata } from "../friendsdata";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    return (
        <div className='profile'>

            <Link to="/news" className='prevInTabMob'>
            <p>Next</p>
                <ArrowRightIcon className='icon' />
            </Link>

            <div className='left'>

                <div className='first'>
                    <img src="https://img.freepik.com/free-photo/front-view-young-male-playing-guitar-red-wall-band-singer-live-performance-musician-concert-color_140725-142821.jpg?w=996&t=st=1692289584~exp=1692290184~hmac=b1e428a47b9aa1eab5deda57ad2549b81cdcf24453552e7f6faccaa56196201b" alt="" />

                    <div className='info'>
                        <h2>John Smith</h2>
                        <p><QueueMusicIcon className='icon' /><span>Learn to play guitar with popular songs</span></p>
                        <div className='infoBorder'>
                            <div className='infoBox'>
                                <div className='infoItem'>
                                    <p>0</p>
                                    <span>My progress</span>
                                </div>
                                <div className='infoItem'>
                                    <p>2</p>
                                    <span>Followers</span>
                                </div>
                                <div className='infoItem'>
                                    <p>32</p>
                                    <span>Following</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='second'>

                    <h3>Statistics</h3>

                    <div className='info'>

                        <div className='infoItem'>
                            <div className='infoIcon'>
                                <DoneIcon className='icon' />
                            </div>
                            <div className='infoDetails'>
                                <span>Completed lessons</span>
                                <p>3</p>
                            </div>
                        </div>

                        <div className='infoItem'>
                            <div className='infoIcon'>
                                <AccessTimeIcon className='icon' />
                            </div>
                            <div className='infoDetails'>
                                <span>Practice hours</span>
                                <p>56</p>
                            </div>
                        </div>

                        <div className='infoItem'>
                            <div className='infoIcon'>
                                <EmojiEventsIcon className='icon' />
                            </div>
                            <div className='infoDetails'>
                                <span>Skills mastered</span>
                                <p>7</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='third'>

                    <h3>Achievements</h3>

                    <div className='info'>

                        <div className='infoItem'>
                            <div className='infoIcon'>
                                <AccessTimeIcon className='icon' />
                            </div>
                            <div className='infoDetails'>
                                <div className='score'>
                                    <h3>Dedicated Learner</h3>
                                    <span>2/3</span>
                                </div>
                                <div className='slider'>
                                    <div className='full'></div>
                                    <div className='empty'></div>
                                </div>
                                <span>Maintain a 3-day practice streak</span>
                            </div>
                        </div>

                        <div className='infoItem'>
                            <div className='infoIcon'>
                                <EmojiEventsIcon className='icon' />
                            </div>
                            <div className='infoDetails'>
                                <div className='score'>
                                    <h3>Point Collector</h3>
                                    <span>1200/3000</span>
                                </div>
                                <div className='slider'>
                                    <div className='full'></div>
                                    <div className='empty'></div>
                                </div>
                                <span>Earn 1800 more points</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='right'>

                <div className='section1'>
                    <h3>Recommended Songs</h3>
                    <div className='songlist'>

                        {
                            songsdata.map((s) => (
                                <div className='songItem'>
                                    <div className='leftSongItem'>
                                        <img src={s.img} alt="" />
                                        <p className='name'>{s.name}</p>
                                    </div>
                                    <div className='rightSongItem'>
                                        <button><AddIcon className='addIcon' /></button>
                                        <CloseIcon className='cross' />
                                    </div>
                                </div>
                            ))
                        }
                        <div className='viewall'>
                            <button>View all</button>
                        </div>
                    </div>
                </div>

                <div className='section2'>
                    <h3>Friends</h3>
                    <div className='songlist'>

                        {
                            friendsdata.map((f) => (
                                <div className='songItem'>
                                    <div className='leftSongItem'>
                                        <img src={f.img} alt="" />
                                        <p className='name'>{f.name}</p>
                                    </div>
                                    <div className='rightSongItem'>
                                        <button className='profileButton'>Profile</button>
                                    </div>
                                </div>
                            ))
                        }

                        <div className='viewall'>
                            <button>View all</button>
                        </div>
                    </div>

                    <div className='friendButtons'>
                        <button className='find'>
                            Find friends
                        </button>
                        <button className='find'>
                            Invite friends
                        </button>
                    </div>
                </div>

                <Link to="/news" className='prevPage'>
                    <p>Next</p>
                    <ArrowRightIcon className='icon' />
                </Link>

            </div>
        </div>
    )
}

export default ProfilePage
