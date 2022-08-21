import Image from 'next/image';
import React, { useState } from 'react';

interface NamedAvatarProps {
    avatar_url?: string,
    name?: string,
    size?: string,
    padding?: string,
    classNames?: string,
    fontSize?: string
}

const NamedAvatar: React.FC<NamedAvatarProps> = ({
    avatar_url = "Avatar.png",
    name ="hello vaahish",
    size = 'h-10 w-10',
    padding = "",
    classNames = '',
    fontSize = 'text-base'
}) => {
    const [validAvater, setValidAvater] = useState(true)
    const getInitials = (name: string) => {
       const initials = name.split(" ").map((n)=>n[0]).join("");
        return initials
    }
    return (
        <>
            {true ? (
                <div
                    className={`${size} relative rounded-full ${classNames}`}
                   
                >
                    <Image  
                        src={`/images/${avatar_url}`}
                        alt=""
                        width={100}
                        height={100}
                    />
                </div>
            ) : (
                <span className={`inline-flex items-center justify-center rounded-full bg-primary-100 ${size} ${padding} ${classNames}`}>
                    <span className={`${fontSize} font-medium text leading-none text-primary-600 uppercase`}>
                        {name  ? getInitials(name) : ''}
                    </span>
                </span>
            )}
        </>
    );
}
export default NamedAvatar
