import Link from 'next/link';
import { useRouter } from 'next/router';
//import React, { useEffect, useState, Component } from 'react';
import { useEffect } from 'react';

import SubPageHeader from '@/components/header/SubPageHeader';
import TextImageBlock from '@/components/content/TextImageBlock';

import { useCategory, useServices } from '@/hooks/useServices';

function ServicePage ({}) {

    const router = useRouter();
    const { id } = router.query;

    const categoryQuery = useCategory(id);
    const category = categoryQuery.data;

    const servicesParams = {
      "category_id": id
    }
    const servicesQuery = useServices(servicesParams)
    const services = servicesQuery.data;

    if (categoryQuery.isError) {
        return (
          <>
            Ошибка при загрузке
          </>
        )
    }
    if (categoryQuery.isLoading) {
        return (
          <>
            Загрузка...
          </>
        )
    }



    const ServicesList = ({services}) => (
      <div className="mt-10 grid grid-cols-1 gap-4">
      {services?.map((service, index) => (
          <Service 
              key={index}
              service={service}
          />
      ))
      }
      </div>
    );

    const Service = ({service}) => (
        <div className="flex justify-between shadow-md bg-gray-50 rounded-lg py-4 px-4 items-center gap-2">
            <div className="w-8/12 text-sm md:text-xl tracking-wide">
                { service?.name}
            </div>
            <div className="w-4/12 max-w-max bg-primary text-white rounded-lg px-4 py-1 text-sm md:text-xl tracking-wide">
                { service?.price } ₽
            </div>
        </div>
    );


    return (
        <div className="mx-4">
            <div className="max-w-screen-lg mx-auto">
                <SubPageHeader 
                title={category?.name} 
                size="small"
                />
                <TextImageBlock 
                    text={category?.description}
                    imgsrc={category?.imgsrc[0]}
                />
                { services && 
                  <ServicesList
                    services={services}
                  />
                }

            </div>
        </div>
    );
}

export default ServicePage
