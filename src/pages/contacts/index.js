import { Icon } from '@iconify/react';
import SubPageHeader from '@/components/header/SubPageHeader.js';
import TextImageBlock from '@/components/content/TextImageBlock';
import TitleBig from '@/components/content/TitleBig';
import CallActionContainer from '@/components/content/CallActionContainer';

import {
    Fab,
} from '@mui/material';

import { motion } from 'framer-motion';

import { useCommonInfo } from '@/hooks/useSite';


function ContactBlockMain () {
    const commonInfoQuery = useCommonInfo()
    const commonInfo = commonInfoQuery?.data

    const block1Motion = {
        hidden: { opacity: 0, x: -100 },
        show: { 
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    }
    const socials = (
        <div className="py-5">
            <TitleBig
                title="Мы в соц. сетях"
                size="small"
            />
            <div className="flex gap-3 mt-6">
                {commonInfo?.socials && Object.keys(commonInfo?.socials)?.map((social, index) => (
                    <div key={index}>
                        <a href={commonInfo?.socials?.[social].link}>
                        <Fab
                            style={{backgroundColor: commonInfo?.socials[social]?.color}}
                        >
                            <Icon 
                                icon={commonInfo?.socials[social]?.icon}
                                width="35"
                                className="text-white"
                            />
                        </Fab>
                        </a>
                    </div>
                ))
                }
            </div>

        </div>
    )
    const addressBlock = (
        <div className="py-10">
            <TitleBig
                title="Адрес и режим работы"
                size="small"
            />
            <div className="mt-6">
                <div className="text-xl tracking-wider"> 
                    { commonInfo?.location?.address_name }
                </div>
                <div className="text-xl tracking-wider mt-3"> 
                    { commonInfo?.working_time}
                </div>
            </div>

        </div>
    )
    const mapBlock = (
        <div className="py-5 mt-4">
            <TitleBig
                title="Мы на карте"
                size="small"
            />
            <iframe
                src={commonInfo?.location?.map_link}
                className="w-full h-96 rounded-lg mt-8"
            >
            </iframe>
        </div>
    )
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <div>
                            { addressBlock }
                            { socials }
                        </div>
                        <div>
                            { mapBlock }
                        </div>
                    </div>
            </div>
        </>
    )
}

function ContactPage () {
    const titleBlock = (
        <TitleBig
            title="Контакты" 
            size="large"
        />
    )

    return (
        <>
        <div className="mx-4">
            <div className="max-w-screen-lg mx-auto">
                    { titleBlock }
                    <ContactBlockMain />
            </div>
        </div>
        <CallActionContainer />
        </>
    )
}

export { ContactBlockMain };
export default ContactPage;
