import React from 'react'
import { IoShareSocial } from 'react-icons/io5'
import Togglesave from '../../components/togglesave/Togglesave'
import { Link } from 'react-router-dom'

const Shortlistact = ({ savedUsers, toggleSaveUser }) => {
    if (savedUsers.length === 0) {
        return <h1 style={{margin: "100px auto 100px auto"}}>Not found</h1>;
    }
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    return (
        <div>
            <div className='actors' style={{margin: "100px auto 100px auto", width: "98%"}}>
            <h1>Shortlisted</h1>
                {savedUsers.map((user) => (
                    <div className='actor' key={user.id}>
                        <img src={user.img} alt="" />
                        <div className='rightactor'>
                            <div className='actags'><div className='flex'><p>{user.tag}</p></div><div><IoShareSocial style={{ fontSize: "29px" }} /> <Togglesave
                                user={user}
                                isSaved={savedUsers.some((savedUser) => savedUser.id === user.id)}
                                toggleSaveUser={toggleSaveUser}
                            /></div></div>
                            <div className='nameact'>{user.name}</div>
                            <div>{user.loc}</div>
                            <p className='otdet'>{user.otherdet}</p>
                            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aliquam. Dolorum quas quasi tempora tenetur dignissimos quam qui veniam ullam recusandae ea ducimus excepturi mollitia minima deserunt, obcaecati repudiandae provident.</div>
                            <Link onClick={scrollToTop} to={`/userdetail/${user.id}`}><div className='lastlnact'>View full profile</div></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shortlistact
