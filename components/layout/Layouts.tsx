import React, { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil';
import { themeState } from '../../store/atoms/theme';
import dynamic from 'next/dynamic'
import Icon from '../icon/Icon';
const Sidebar = dynamic(() => import('./sidebar/Sidebar'))
interface LayoutsProps {
    children: JSX.Element
}

const Layouts: React.FC<LayoutsProps> = ({ children }) => {
    const [theme, setTheme] = useRecoilState(themeState);
    // const setTheme = useStoreActions(
    //     (action: Actions<StoreModel>) => action.theme.setTheme
    // );
    // const theme = useStoreState((state: State<StoreModel>) => state.theme.theme);



    return (
        <>
            <div className='flex min-w-screen min-h-screen'>
                <Sidebar />
                <div className={`bg-white dark:bg-gray-900 w-full`}>
                    {children}
                </div>
                {/* <Icon name={`Setting`} /> */}
            </div>
        </>
    );
}
export default Layouts