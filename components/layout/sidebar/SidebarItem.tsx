import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import CustomLink from '../../global/CustomLink';
import dynamic from 'next/dynamic'
import IconComponent from '../../icon/Icon';
import NamedAvatar from '../../global/NamedAvatar';
// const IconComponent = dynamic(() => import('../../icon/Icon'),{ssr:true})

interface SidebarItemProps {
    name: string,
    link: string,
    icon: string,
    active: boolean,
    slug: string,
    history: string
    onClick: (slug: string) => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({ name, link, icon, active, onClick, slug, history }) => {
    return (
        <>
            {/* <CustomLink href={link}> */}
            <div className='relative group'>
                <span className={`absolute  z-[-1] w-full transition-all duration-500 rounded-[36px] ${active ? "bg-white dark:bg-gray-700 -top-2.5 h-[106px] " : "top-2 h-[70px] group-hover:-top-2.5 group-hover:h-[106px] group-hover:bg-primary-200 group-hover:opacity-20 dark:group-hover:bg-gray-900"}`}>

                </span>
                <div className={`flex gap-3 px-3 items-center  cursor-pointer transition-all duration-500 ${active ? 'py-5' : ' py-4 group-hover:py-5'}`} onClick={() => onClick(slug)}>
                    <div>
                        <NamedAvatar name={name} size='w-14 h-14' avatar_url={icon} />
                    </div>
                    <div className='flex flex-col w-full pr-4'>
                        <div className='flex items-center justify-between'>
                            <p className='font-medium text-lg text-gray-700 dark:text-gray-200'>
                                {name}
                            </p>
                            <p className='text-gray-900 dark:text-gray-300'>
                                12:39
                            </p>
                        </div>
                        <p className='text-gray-500 dark:text-gray-400 truncate w-64'>
                            {history ? history : ' Baixa o kwai com o meu, por...'}
                        </p>
                    </div>
                </div>
            </div>
            {/* </CustomLink> */}
        </>
    );
}
export default SidebarItem