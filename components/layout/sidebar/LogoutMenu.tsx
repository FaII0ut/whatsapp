import React, { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import NamedAvatar from '../../global/NamedAvatar'
// import dynamic from 'next/dynamic'
// const Icon = dynamic(() => import('../../icon/Icon'))
import dynamic from 'next/dynamic'
import { useRecoilState } from 'recoil'
import { themeState } from '../../../store/atoms/theme'
const Icon = dynamic(() => import('../../icon/Icon'))


interface item {
    id: number,
    name: string,
    icon: string,
    unavailable: boolean
}

interface user {
    id: number,
    name: string,
    url: string
}

interface LogoutMenuProps {
    items: item[],
    user: user,
}

const LogoutMenu = ({ items, user }: LogoutMenuProps) => {
    const [selectedItem, setSelectedItem] = useState(items[0])
    const [dark, setDark] = useRecoilState(themeState);

    const [query, setQuery] = useState('')

    return (
        <div className="relative">
            <Combobox value={selectedItem} onChange={setSelectedItem}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600">
                        <Combobox.Input
                            className="border-0 text-gray-900 w-0 absolute right-0 -z-10"
                            onBlur={() => { }}
                            onChange={() => { }}
                            onKeyDown={() => { }}
                        />

                        <Combobox.Button className="w-full flex items-center justify-between p-2">
                            <div className='flex gap-2.5 items-center'>
                                <NamedAvatar />
                                <p className='font-medium text-sm dark:text-gray-100 text-gray-900'>
                                    Olivia Rhye
                                </p>
                            </div>
                            <Icon name="actions/ChevronRight" stroke={dark ? '#FFF' : '#A3A3A3'}/>
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200 transform"
                        enterFrom="transform opacity-0 -translate-x-[10px]"
                        enterTo="transform opacity-100 scale-100 translate-x-0"
                        leave="transition ease-in duration-200 transform"
                        leaveFrom="transform opacity-100 scale-100 translate-x-0"
                        leaveTo="transform opacity-0 -translate-x-[10px]"
                    >
                        <Combobox.Options className="absolute -top-[110%] shadow-lg left-[115%] py-1 mt-1 px-1 w-60 max-h-60 rounded-lg border bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700">
                            {
                                items.map((item) => (
                                    <Combobox.Option
                                        key={item.id}
                                        className={({ active }) =>
                                            `cursor-default flex items-center gap-3 w-full rounded py-2 px-3 dark:text-gray-100 text-gray-900 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''
                                            }`
                                        }
                                        value={item}
                                    >
                                        <div>
                                            <Icon name={item.icon} />
                                        </div>
                                        <p className='text-sm'>
                                            {item.name}
                                        </p>

                                        {/* <span
                                                className={`absolute inset-y-0 left-0 flex items-center pl-3`}
                                            >
                                                tick
                                            </span> */}
                                    </Combobox.Option>
                                ))
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default LogoutMenu