import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Home.module.css'

import IntroContainer1 from '@/components/content/IntroContainer1';

import Features from '@/components/content/Features';
// import BlockContainer1 from '@/components/content/BlockContainer1';
import ServicesBlock from '@/components/content/ServicesBlock';
// import TabsContainer from '@/components/content/TabsContainer';
// import SocialsBlock from '@/components/content/SocialsBlock';
import { AboutUsBlockMain } from '@/pages/aboutus/index';
import { ContactBlockMain } from '@/pages/contacts/index';

import CallActionContainer from '@/components/content/CallActionContainer';
import AccordionQA from '@/components/content/AccordionQA';
import MainSlider from '@/components/sliders/MainSlider';
import StocksSlider from '@/components/sliders/StocksSlider';


import TitleBig from '@/components/content/TitleBig';



export default function Home() {

    const ServicesTitle = (
        <TitleBig
            title="Наши услуги"
            size="medium"
        /> 
    )
  return (
    <div className="">
        <MainSlider />
            <div className="py-8 bg-gray-50 mt-6">
                <div className="max-w-screen-lg mx-auto">
                    <div className="mx-4">
                        { ServicesTitle }
                        <ServicesBlock />
                    </div>
                </div>
            </div>
          <StocksSlider />
             <Features/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto py-10">
                    <AboutUsBlockMain />
                </div>
            </div>
            <CallActionContainer />
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto">
                <ContactBlockMain />
                </div>
            </div>
            <AccordionQA />
    </div>
  )
}

