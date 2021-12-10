import { Icon } from '@iconify/react';
import { 
    Button,
    CircularProgress,
    Fab,
    Tooltip,
    Zoom,
    IconButton,
} from '@mui/material';

import { useEffect, useState } from 'react';

import Link  from 'next/link';
import { useRouter } from 'next/router';

import { requestCallModalOpenState } from '@/atoms/siteState';

import { useSetRecoilState } from 'recoil';

function DesktopHeader({commonInfo, headerLinks}) {

    const openRequestCallModal = useSetRecoilState(requestCallModalOpenState);

    const router = useRouter()

    const handleOpenCallModal = () => {
        openRequestCallModal(true)
    }

    const handleAddressOpen = () => {
        const map_link = commonInfo?.location?.map_link || null
        if (map_link) {
            window.open(map_link, '_blank').focus();
        }
    }


    const socialsBlock = (
        <div className="flex gap-1">
            <a 
                href={commonInfo?.socials?.instagram?.link} 
                target="_blank" 
                rel="noreferrer"
            >
                <Fab
                    color="primary"
                    size="medium"
                    variant="outlined"
                >
                    <Icon
                        icon="akar-icons:instagram-fill"
                        width="22"
                    />
                </Fab>
            </a>
            <a 
                href={commonInfo?.socials?.vk?.link} 
                target="_blank"
                rel="noreferrer"
            >
            <Fab
                color="primary"
                size="medium"
            >
                <Icon
                    icon="akar-icons:vk-fill"
                    width="22"
                />
            </Fab>
            </a>
        </div>
    )

    const contactInfo = (
        <div>
            <a 
            href={'tel:'+ commonInfo?.phone}
            className="text-xl font-bold cursor-pointer">
                { commonInfo?.phone_display }
            </a>
            <div className="text-gray-400 text-[14px] font-light">
                { commonInfo?.working_time }
            </div>
        </div>
    )
    const requestCallButton = (
        <div>
            <Button
                variant="outlined"
                onClick={handleOpenCallModal}
                className="uppercase"
            >
               Запись  
                <span className="flex uppercase ml-1 px-2 text-green-500 bg-green-100 rounded-md">
                    online
                </span>
            </Button>
        </div>
    )
    const addressBlock = (
        <Tooltip
            title="Нажмите на адрес, чтобы открыть на карте"
            arrow={true}
        >
            <div 
                onClick={handleAddressOpen}
                className="cursor-pointer flex items-center flex-shrink max-w-[350px]">
                <div>
                    <Fab
                        size="small"
                        color="primary"
                    >
                        <Icon
                            icon="mdi:map-marker-outline"
                            width="25"
                        />
                    </Fab>
                </div>
                <div className="ml-2">
                    <span
                        className="tracking-wide font-semibold"
                    >
                        Адрес:
                    </span>
                    <div color="primary">
                        { commonInfo?.location?.address_name} 
                    </div>
                </div>
            </div>
        </Tooltip>
    )
    const timeBlock = (
            <div 
                className="cursor-pointer flex items-center flex-shrink max-w-[350px]">
                <div>
                    <Fab
                        size="small"
                        color="primary"
                    >
                        <Icon
                            icon="carbon:time"
                            width="25"
                        />
                    </Fab>
                </div>
                <div className="ml-2">
                    <span
                        className="tracking-wide font-semibold"
                    >
                        Режим работы:
                    </span>
                    <div color="primary">
                        { commonInfo?.working_time} 
                    </div>
                </div>
            </div>
    )


    const headerFirst = (
        <div 
            className="flex items-center justify-around"
        >
            <Link href="/">
                <img
                    className="max-h-[70px] cursor-pointer cursor-pointer"
                    src={commonInfo?.logo_src}
                />
            </Link>
            { addressBlock }
            { socialsBlock }
            { requestCallButton }
            { contactInfo }
        </div>
    )
    
    const headerLinksBlock = headerLinks?.map((link_item) => (
            <span
                key={link_item.id}
            >
            <Link href={link_item?.link?.to}>
                <Button
                    variant={router.pathname === link_item?.link?.to ? 'contained': 'text'}
                    className="font-medium uppercase rounded-full"
                    key={link_item.id}
                    aria-controls="basic-menu"
                    area-haspopup="true"
                    area-expanded={open ? 'true': undefined}
                >
                    { link_item?.title } 
                </Button>
            </Link>
            </span>
        )
    )

    return (
        <div
        >
            <div className="max-w-screen-xl mx-auto py-3">
                { headerFirst }
            </div>
            <div className="max-w-screen-xl mx-auto rounded-xl py-1">
                <div className="mx-auto max-w-screen-xl h-full flex items-center justify-center">
                    { headerLinksBlock }
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader;
