import { SubTitle } from 'chart.js';
import React from 'react'
import Button from '../button/Button';

interface HeaderProps {
    children?: JSX.Element,
    title: string,
    subtitle?: JSX.Element
    extraClasses?:string
}

const Header: React.FC<HeaderProps> = ({ children, title , subtitle, extraClasses='bg-white dark:bg-gray-900'}) => {
    return (
        <div className={`flex p-8 justify-between z-10 ${extraClasses}`} > 
        {/* sticky top-0 */}
            <div >
                <p className='text-3xl font-semibold text-gray-900 dark:text-gray-200 capitalize'>
                    {title}
                </p>
                {subtitle}
            </div>
            {children}
        </div>
    );
}
export default Header