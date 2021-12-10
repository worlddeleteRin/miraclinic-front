import { Button,
} from '@mui/material'

import Link from 'next/link';
import { useSite } from '@/hooks/useSite';

import { Icon } from '@iconify/react';

function IntroContainer1 (props) {
    const title = props?.title ? props.title : "Служба услуг ДРСУ82"
    const imgsrc = props?.imgsrc ? props?.imgsrc : "https://cheljabinsk.ooskidka.ru/wp-content/uploads/2021/03/Remont-krovli.jpg"

    const site = useSite();

    const handleOpenCallModal = () => {
        site.setRequestCallModal(true);
    }

    const background = (
        <div 
        >
        <div
            className="absolute top-0 left-0 z-[3] bg-black w-full h-full opacity-50"
        >
        </div>
        <img
            className="absolute top-0 left-0 z-[2] w-full h-full object-cover"
            src={imgsrc}
        />
        </div>
    )
    const titleBlock = (
        <div
            className="text-white tracking-wider text-[35px] mx-auto md:mx-0 md:text-[65px] font-bold"
        >
            { title }
        </div>
    )
    const phone = (
        <div className="mt-2 mx-auto md:mx-0">
            <a 
                className="text-white text-[24px] md:text-[32px] font-semibold"
                href={'tel:' + site?.commonInfo?.phone}>
                { site?.commonInfo?.phone_display }
            </a>
        </div>
    )
    const socials = (
        <div
            className="mt-4 flex flex-row gap-4 mx-auto md:mx-0"
        >
            <a href={site?.commonInfo?.socials?.whatsapp}>
                <Button
                    variant="contained"
                    color="primary"
                    className="bg-[#83d05b]"
                    size="large"
                    startIcon={
                        <Icon
                            icon="akar-icons:whatsapp-fill"
                        />
                    }
                >
                    WhatsApp
                </Button>
            </a>
            <a 
                href={site?.commonInfo?.socials?.viber}>
                <Button
                    variant="contained"
                    color="primary"
                    className="bg-[#614d9b]"
                    size="large"
                    startIcon={
                        <Icon
                            icon="akar-icons:whatsapp-fill"
                        />
                    }
                >
                    Viber
                </Button>
            </a>
        </div>
    )
    const requestCallButton = (
        <div className="mt-7 flex">
            <Button
                color="secondary"
                variant="contained"
                size="large"
                onClick={handleOpenCallModal}
                className="w-8/12 mx-auto md:w-auto md:mx-0"
            >
            Оставить заявку
            </Button>
        </div>
    )

    return (
        <div
            className="relative bg-transparent min-h-[400px] flex flex-col justify-center"
        >
            { background }
            <div
                className="max-w-screen-lg mx-auto w-full relative z-[5] md:px-12 px-2 py-10"
            >
                <div 
                    className="relative md:w-9/12 h-full flex flex-col"
                >
                    { titleBlock }
                    { phone }
                    { socials }
                    { requestCallButton }
                </div>
            </div>

        </div>
    )
}

export default IntroContainer1
