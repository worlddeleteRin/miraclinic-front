import { Icon } from '@iconify/react'; import { 
    Button,
    AppBar,
    Toolbar,
    IconButton,
    Fab,
} from '@mui/material';

import { useCommonInfo, useHeaderLinks } from '@/hooks/useSite';

// import { useEffect, useState } from 'react';
//

import Link  from 'next/link';
import { useRouter } from 'next/router';

import { useSetRecoilState } from 'recoil';
import { requestCallModalOpenState } from '@/atoms/siteState';
import { mobileMenuDrawerOpenState } from '@/atoms/siteState';


function MobileHeader({commonInfo, headerLinks}) {
    // mobile drawer open
    const setMobileDrawerOpen = useSetRecoilState(mobileMenuDrawerOpenState)
    const openRequestCallModal = useSetRecoilState(requestCallModalOpenState);

    const handleOpenCallModal = () => {
        openRequestCallModal(true)
    }

    const router = useRouter()

    const menu = (
        <>
            <IconButton
                onClick={() => setMobileDrawerOpen(true)}
                color="inherit"
                size="large"
            >
                <Icon
                    icon="feather:menu"
                />
            </IconButton>
        </>
    )
    const requestCall = (
        <div>
            <Fab
                href={'tel:' + commonInfo?.phone}
                color="primary"
                size="small"
                className="bg-white"
            >
                <Icon
                    icon="ci:phone"
                    width="17"
                    className="text-black"
                />
            </Fab>
        </div>
    );
    const openCallModalBlock = (
        <div>
            <Button
                variant="outlined"
                onClick={handleOpenCallModal}
                className="uppercase text-[12px]"
                size="small"
            >
               Запись  
                <span className="flex uppercase ml-1 px-2 text-green-500 bg-green-100 rounded-md">
                    online
                </span>
            </Button>
        </div>
    )
    const logo = (
        <div>
            <Link href="/">
                <img
                    className="h-[50px] object-contain cursor-pointer"
                    src={commonInfo?.logo_src}
                />
            </Link>
        </div>
    )
    

    return (
        <AppBar
            color="inherit"
        >
                <Toolbar>
                    <div className="flex flex-1 items-center gap-1">
                        { logo }
                        { requestCall }
                        <div className="ml-1">
                        { openCallModalBlock }
                        </div>
                    </div>
                    { menu }
                </Toolbar>
        </AppBar>
    )
}

export default MobileHeader;
