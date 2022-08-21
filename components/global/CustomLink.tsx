import Link from 'next/link';
import React from 'react'

interface CustomLinkProps {
    href: string,
    children: JSX.Element

}

const CustomLink: React.FC<CustomLinkProps> = ({href,children}) => {
    return (
             <Link href={href}>
            <a href={href}>
                {children}
            </a>
        </Link>
    );
}
export default CustomLink