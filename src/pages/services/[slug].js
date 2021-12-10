import Link from 'next/link';
import { useRouter } from 'next/router';
//import React, { useEffect, useState, Component } from 'react';

import SubPageHeader from '@/components/header/SubPageHeader';
import TextImageBlock from '@/components/content/TextImageBlock';

function ServicePage ({}) {
    const service = {
        slug: "test-slug",
        name: "Тестовое название услуги",
        label: "Тестовый лейбл",
        imgsrc: ["https://static.tildacdn.com/tild3162-3135-4066-a662-346165353366/noroot_1_2.jpg"],
        display_order: 0,
        description: "Более подробное описание услуги будет здесь. Более подробное описание услуги будет здесь. Более подробное описание услуги будет здесь." ,
        subservices: [
            {
                name: "Тестовое название дочерней услуги",
                price: "4200 руб.",
            },
            {
                name: "Тестовое название дочерней услуги",
                price: "4200 руб.",
            },
            {
                name: "Тестовое название дочерней услуги",
                price: "4200 руб.",
            },
            {
                name: "Тестовое название дочерней услуги",
                price: "4200 руб.",
            },
        ]
    }

    const router = useRouter();
    const { slug } = router.query

    const Service = ({subservice}) => (
        <div className="flex justify-between shadow-md bg-gray-50 rounded-lg py-4 px-4 items-center gap-2">
            <div className="w-8/12 text-sm md:text-xl tracking-wide">
                { subservice?.name}
            </div>
            <div className="w-4/12 max-w-max bg-primary text-white rounded-lg px-4 py-1 text-sm md:text-xl tracking-wide">
                { subservice?.price }
            </div>
        </div>
    )

    return (
        <div className="mx-4">
            <div className="max-w-screen-lg mx-auto">
                <SubPageHeader 
                title={service?.name} 
                size="small"
                />
                <TextImageBlock 
                    text={service?.description}
                    imgsrc={service?.imgsrc}
                />

                <div className="mt-10 grid grid-cols-1 gap-4">
                {service?.subservices && service?.subservices?.map((subservice, index) => (
                    <Service 
                        key={index}
                        subservice={subservice}
                    />
                ))
                }
                </div>

            </div>
        </div>
    );
}

export default ServicePage
