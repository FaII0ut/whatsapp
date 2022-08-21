import React, { useEffect, useState } from 'react'
import Icon from '../icon/Icon';
import NamedAvatar from './NamedAvatar';

interface TextMsgProps {
    type: string,
    user_id: string,
    avatar_url: string,
    sameUser: boolean,
    desc: string
}

const TextMsg: React.FC<TextMsgProps> = ({ type, user_id, avatar_url, sameUser, desc }) => {
    const [value, setValue] = useState<HTMLAudioElement>()
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        setValue(new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"))
    }, [])

    const handleAudio = () => {
        if(playing){
            value?.pause();
            setPlaying(false)
            return
        }
        setPlaying(true)
        value?.play();
    }

    return (
        <>
            <div className={`flex gap-3 ${sameUser ? 'pb-3' : 'pb-12'} ${user_id == 'me' ? 'flex-row-reverse' : ''}`}>
                {type == 'text' ?
                    <>
                        <NamedAvatar size='w-14 h-14' avatar_url={avatar_url} classNames={sameUser ? 'opacity-0' : ''} />
                        <div className={`bg-primary-200 max-w-sm p-4 rounded-4xl dark:bg-gray-600  ${user_id == 'me' ? sameUser ? '' : 'rounded-tr-none' : 'rounded-tl-none'}`}>
                            <p className='text-gray-500 dark:text-gray-900'>
                                {desc ? desc : ' Hei my sis just called, when i was on my way i told my phone was off..... SHHHH....'}
                            </p>
                        </div>
                    </>
                    :
                    <>

                        <NamedAvatar size='w-14 h-14' avatar_url={avatar_url} />
                        <div className={`bg-primary-200 max-w-sm p-4 rounded-4xl flex items-center dark:bg-gray-600  gap-4 ${user_id == 'me' ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
                            <div className='w-14 h-14 bg-primary-800 flex items-center justify-center rounded-full dark:bg-gray-800' onClick={handleAudio}>
                                <Icon name='Pause' />
                            </div>
                            <div className={`${playing ? 'animate-pulse' : ''}`}>
                                <Icon name='Audio' />
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    );
}
export default TextMsg