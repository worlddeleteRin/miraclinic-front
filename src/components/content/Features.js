import { defaultFeatures } from '@/helpers/content';
import { Icon } from '@iconify/react';
import TitleBig from '@/components/content/TitleBig';

import {
    Fab
} from '@mui/material';

function Features (props) {
    let features = []

    if (!props?.features) {
        features = defaultFeatures;
    } else {
        features = props?.features;
    }

    const title = (
        <TitleBig
            title="Клиенты выбирают нас"
            size="small"
        />
    )

    const Feature = ({feature}) => {
        return (
            <div className="rounded-lg flex-1 min-w-[150px] min-h-[110px] flex flex-col items-center relative">
                <div className="bg-primary absolute w-full h-full z-[0] rounded-lg top-3 -left-3">
                </div>
                <div className="bg-white z-[1] h-full w-full rounded-lg py-3 px-3 shadow-2xl flex flex-col items-center">
                    <div>
                        <Fab
                            color="primary"
                        >
                            <Icon
                                className=""
                                icon={feature?.icon}
                                width="25"
                            />
                        </Fab>
                    </div>
                    <div className="mt-3">
                    { feature?.title }
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="py-10 px-2">
            <div 
                className="max-w-screen-lg mx-4 md:mx-auto"
            >
                { title }
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
                    {features?.map((feature, index) => (
                        <Feature
                            key={index}
                            feature={feature}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features
