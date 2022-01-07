import {
    Fab,
    Button,
} from '@mui/material';

import { defaultServices } from '@/helpers/content';
import { motion } from 'framer-motion';

import { Icon } from '@iconify/react';

import Link  from 'next/link';

import { useCategories } from '@/hooks/useServices';


function ServicesBlock (props) {

    //const services = props.services ? props.services : defaultServices
    const servicesQuery = useCategories();
    const services = servicesQuery?.data;

    // motion
    const containerMotion = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                //delayChildren: 2,
                staggerChildren: 0.1,
                // staggerDirection: 0.5,
            }
        }
    }
    const itemMotion = {
        hidden: { opacity: 0, x: -50 },
        show: { 
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            }
        },
    }


    const Service = ({service}) => {
        var href = `/services/${service?._id}`;
        return (
          <Link href={href} passHref>
                <motion.div
                    variants={itemMotion}
                    className="max-w-[500px] w-full sm:w-full flex-1 relative h-44 overflow-hidden cursor-pointer group">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-0 left-0 bg-black w-full h-full opacity-20 z-[3] rounded-md"></div>
                            <img
                                className="w-full h-full object-cover z-[2] rounded-md group-hover:scale-110 duration-500"
                                src={service?.imgsrc[0] }
                            />
                        </div>
                        <div className="font-semibold mt-2 bg-white z-[4] relative mx-2 px-2 py-1 rounded-lg max-w-max">
                            { service?.name } 
                        </div>
                        <div className="absolute bottom-2 right-2 z-[4]">
                            <Fab color="primary" size="medium">
                                <Icon
                                    icon="bx:bx-chevron-right"
                                    width="35"
                                />
                            </Fab>
                        </div>

                </motion.div>
            </Link>
        )
    }

    return (
        <div className="">
            <div className="max-w-screen-lg mx-4 md:mx-auto">

                <motion.div 
                    variants={containerMotion}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
                    {services?.map((service) =>
                            <Service
                                key={service?.id}
                                service={service}
                            />
                    )}
                </motion.div>

            </div>
        </div>
    )
}

export default ServicesBlock;
