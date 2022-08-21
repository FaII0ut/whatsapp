import { useRouter }  from 'next/router';
import React, { Ref, RefObject, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { themeState } from '../../../store/atoms/theme';
import usePermission from '../../../hooks/usePermission';
import dynamic from 'next/dynamic'
import IconComponent from '../../icon/Icon'
// const IconComponent = dynamic(() => import('../../icon/Icon'))
const LogoutMenu = dynamic(() => import('./LogoutMenu'))
// import LogoutMenu from './LogoutMenu';
// import LogoutMenu from './LogoutMenu';
import SidebarItem from './SidebarItem';
import ThemeToggle from '../../button/ThemeToggle';
import Icon from '../../icon/Icon';

interface SidebarItem {
    name: string,
    slug: string,
    icon: string,
    link: string,
    history: string
}

interface SidebarGroup {
    title: string,
    sideBarItems: SidebarItem[]
}

interface SidebarProps {
    // ref: RefObject<HTMLDivElement>;
}

const Sidebar: React.FC<SidebarProps> = () => {
    const { checkPermission } = usePermission();
    const [value, setValue] = useState('')

    const [items, setItems] = useState<Array<SidebarItem>>([]);
    const [active, setActive] = useState<string>("dashboard");
    const [dark, setDark] = useState<boolean>(false);
    const router = useRouter()
    const [theme, setTheme] = useRecoilState(themeState);
    console.log(theme);

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

    useEffect(() => {
        const page = router.query.user
        setActive(page ? String(page) : '');
    }, [router])

    useEffect(() => {
        setItems(conversations);
    }, [])

    const searchConvos = (value: string) => {
        const temp = value === ''
            ? conversations
            : conversations.filter((item) =>
                item.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(value.toLowerCase().replace(/\s+/g, ''))
            )
        setItems([...temp])
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            searchConvos(e.target.value)
        }
    }

    return (
        <>
            <div className='relative pl-[520px] bg-primary-100 dark:bg-gray-800'>
            </div>

            <div className='fixed flex flex-col  z-50 w-[520px] overflow-auto max-h-screen px-4 bg-primary-100 dark:bg-gray-800 min-h-screen border-r border-gray-200 dark:border-gray-600'>
                <div className='px-2 sticky top-0 gap-8 flex flex-col pt-16 pb-4 bg-primary-100 dark:bg-gray-800  z-20'>
                    <div className='flex items-center justify-between'>
                        <p className='text-4xl text-gray-900 dark:text-gray-200'>
                            Whatsapp
                        </p>
                        <Icon name='Settings' />
                    </div>
                    <div className='flex items-center bg-primary-200 rounded-full dark:bg-gray-700'>
                        <input className='w-full px-6 focus-visible:border-0 h-10 bg-transparent' placeholder='Search for a conversation' type='text' onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} />
                        <div className='flex w-[76px] h-16 rounded-full items-center justify-center bg-primary-800 cursor-pointer dark:bg-gray-900' onClick={() => searchConvos(value)}>
                            <Icon name='Search' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1 mt-4'>
                    {items.map(({ name, link, icon, slug, history }: SidebarItem, index) => (
                        <SidebarItem
                            active={active == slug}
                            name={name} link={link}
                            icon={icon} key={index}
                            history={history}
                            onClick={(slug) => {
                                router.push({
                                    pathname: '/',
                                    query: {user: slug},
                                });
                                setActive(slug)
                            }}
                            slug={slug} />
                    ))}
                    <ThemeToggle />
                </div>
            </div>
        </>
    );
}

export default Sidebar
