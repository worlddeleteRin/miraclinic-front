import Title from '@/components/content/Title';

import { socialsBlock } from '@/helpers/content';
import { useSite } from '@/hooks/useSite';

import {
    Button
} from '@mui/material';
import { Icon } from '@iconify/react';

function SocialsBlock() {
    const site = useSite()

    const title = (
        <div>
        <Title title="Пишите нам и экономьте" />
        <div className="my-3">
            Задайте вопрос нашему менеджеру и <strong> получите скидку 10% </strong> при заказе в личном чате
        </div>
        </div>
    )
    const image = (
        <div>
            <img
                className="max-h-[500px]"
                src={socialsBlock?.imgsrc}
            />
        </div>
    )
    const socials = (
        <div className="grid grid-cols-1 gap-3 text-center md:text-start">
            { title }
            <a href={site?.commonInfo?.socials?.vk}>
                <Button
                    color="primary"
                    variant="contained"
                    startIcon={
                        <Icon
                            icon="akar-icons:vk-fill"
                        />
                    }
                    className="bg-[#698cc8] w-full max-w-[280px]"
                >
                    ВКонтакте
                </Button>
            </a>
            <a href={site?.commonInfo?.socials?.whatsapp}>
                <Button
                    color="primary"
                    variant="contained"
                    startIcon={
                        <Icon
                            icon="akar-icons:whatsapp-fill"
                        />
                    }
                    className="bg-[#83d05b] w-full max-w-[280px]"
                >
                   WhatsApp 
                </Button>
            </a>
            <a href={site?.commonInfo?.socials?.vk}>
                <Button
                    color="primary"
                    variant="contained"
                    startIcon={
                        <Icon
                            icon="cib:viber"
                        />
                    }
                    className="bg-[#614d9b] w-full max-w-[280px]"
                >
                   Viber 
                </Button>
            </a>
        </div>
    )

    return (
        <div className="py-10 bg-[#f8f7f5]">
            <div className="max-w-screen-lg mx-2 md:mx-auto">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
                    { socials }
                    { image }
                </div>
            </div>
        </div>
    )
}

export default SocialsBlock
