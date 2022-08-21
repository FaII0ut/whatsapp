import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import NamedAvatar from '../components/global/NamedAvatar'
import TextMsg from '../components/global/TextMsg'
import Icon from '../components/icon/Icon'
import styles from '../styles/Home.module.css'

type msg = {
  user_id: string
  name: string
  time: string
  desc: string
  type: string
  avatar_url: string
}

type SidebarItem = {
  name: string,
  slug: string,
  icon: string,
  link: string,
  history: string
}
interface HomeProps {
  user_id: any
}

const Home: NextPage<HomeProps> = ({ user_id }) => {
  const [user, setUser] = useState<SidebarItem>()
  const [msg, setMsg] = useState('')
  const [count, setCount] = useState(2)
  const [chat, setChat] = useState<msg[]>([])
  const messagesEndRef = React.createRef<HTMLDivElement>()
  const router = useRouter()

  const conversation: msg[] = [
    {
      user_id: 'ali',
      name: 'Ali',
      time: '8:00',
      desc: user ? user.history : 'Hei my sis just called, when i was on my way i told my phone was off..... SHHHH....',
      type: 'text',
      avatar_url: user ? user.icon : 'Frnd.png'
    },
    {
      user_id: 'me',
      name: 'Ali',
      time: '8:00',
      desc: 'Hei my sis just called, when i was on my way i told my phone was off..... SHHHH....',
      type: 'audio',
      avatar_url: 'Avatar3.png'
    }
  ]

  const newMsg = (msg: string) => {
    const temp = {
      user_id: 'me',
      name: 'Ali',
      time: '8:00',
      desc: msg,
      type: 'text',
      avatar_url: 'Avatar3.png'
    }
    setMsg('')
    setChat([...chat, temp])
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      const temp = {
        user_id: 'me',
        name: 'Ali',
        time: '8:00',
        desc: e.target.value,
        type: 'text',
        avatar_url: 'Avatar3.png'
      }
      setMsg('')
      setChat([...chat, temp])
    }
  }

  useEffect(() => {
    const conversations: SidebarItem[] = [
      { slug: "shamikh", name: "Shamikh", icon: "Avatar.png", history: 'Annanvynu mirey migeyah! PS knn..', link: "/" },
      { slug: "roberta", name: "Roberta", icon: "Avatar1.png", history: 'Baixa o kwai com o meu, por...', link: "/quotations" },
      { slug: "angela", name: "Ângela", icon: "Avatar2.png", history: 'Bora jogar aquele Genshin?', link: "/proposals/new_proposal" },
      { slug: "buruna", name: "Bruna", icon: "Avatar3.png", history: 'Bora jogar aquele Genshin?', link: "/policies" },
      { slug: "fit midde", name: "Fit Midde", icon: "Avatar4.png", history: 'My name is Midde', link: "/clients" },
      { slug: "mohd", name: "Mohd", icon: "Avatar5.png", history: 'kitties!! whens commings?', link: "/agents" },
      { slug: "abu", name: "Abu", icon: "Avatar.png", history: 'Hei my sis just called, when i was on my way i told my phone was off..... SHHHH....', link: "/reinsurers" },
      { slug: "coinsurers", name: "Coinsurers", icon: "Avatar1.png", history: 'My name is Coinsurers', link: "/coinsurers" },
      { slug: "treaties", name: "Treaties", icon: "Avatar2.png", history: 'My name is Treaties', link: "/treaties" },
    ]
    const temp = conversations.find((i) => i.slug == user_id)
    setUser(temp)
    // setChat([])
  }, [router.query.user])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    if (chat.length < count) { return }
    setCount(chat.length + 4)
    const temp = {
      user_id: 'frnd',
      name: 'Ali',
      time: '8:00',
      desc: 'nice to meet you',
      type: 'text',
      avatar_url: user ? user.icon : 'Frnd.png'
    }
    setChat([...chat, temp])
  }, [chat])

  return (
    <div className='flex flex-col px-8'>
      <div className='fixed z-20 top-0 right-0 w-[calc(100%-520px)] pt-16 px-8 flex justify-between bg-white items-center dark:bg-gray-900'>
        <div className='flex-col'>
          <p className='text-2xl text-gray-900 dark:text-gray-200'>
            {user ? user.name : 'Abu'}
          </p>
          <p className='text-gray-500 dark:text-gray-700'>
            Last active at 08:33
          </p>
        </div>
        <Icon name='Phone' />
      </div>
      {/* body */}
      <div className='min-h-screen pt-40  pb-32 flex flex-col'>
        {conversation.map(({ user_id, type, avatar_url, desc }, index) => <TextMsg desc={desc} sameUser={index != 0 && conversation[index - 1].user_id == user_id} user_id={user_id} type={type} avatar_url={avatar_url} />)}
        <div className='flex justify-center items-center'>
          <div className='bg-primary-400 rounded-full px-10 py-2 mb-12 dark:bg-gray-600'>
            <p className='text-sm'>
              Today
            </p>
          </div>
        </div>
        {chat.map(({ user_id, type, avatar_url, desc }, index) => <TextMsg sameUser={index != chat.length - 1 && chat[index + 1].user_id == user_id} user_id={user_id} type={type} avatar_url={avatar_url} desc={desc} />)}
      </div>
      <div ref={messagesEndRef}></div>
      <div className='fixed bottom-0 right-0 w-[calc(100%-520px)] py-8 px-8 bg-white dark:bg-gray-900'>
        <div className='flex items-center bg-primary-200 rounded-full dark:bg-gray-700'>
          <input className='w-full px-6 focus-visible:border-0 h-10 bg-transparent' placeholder='Search for a conversation' value={msg} type='text' onChange={(e) => setMsg(e.target.value)} onKeyDown={handleKeyDown} />
          <div className='flex items-center gap-2'>
            <Icon name="File" />
            <Icon name="Smile" />
            <div className='flex w-[64px] h-16 rounded-full items-center justify-center bg-primary-800 cursor-pointer dark:bg-gray-800' onClick={() => newMsg(msg)}>
              <Icon name='Search' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const slug = ctx.query.user;
  return { user_id: slug };
};


export default Home

