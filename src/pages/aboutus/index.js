import { Icon } from '@iconify/react';
import SubPageHeader from '@/components/header/SubPageHeader.js';
import TextImageBlock from '@/components/content/TextImageBlock';

import { motion } from 'framer-motion';

function AboutUsBlockMain () {
    const about_us_text = "Рецепт успешного лечения прост: врачи-эксперты, высококлассное оборудование и искренняя забота."
    const about_us_imgsrc = "https://gtrk-kostroma.ru/upload/iblock/c1a/c1a68ac6a127e8c0241633b7b61e49c4.jpg"
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

    const block1 = (
        <motion.div 
            variants={block1Motion}
            initial="hidden"
            animate="show"
            className="mt-3">
            <div className="font-semibold tracking-wide text-2xl sm:text-4xl sm:leading-relaxed">
            Наши пациенты — это люди, которые ценят профессионализм и качество сервиса и не готовы переплачивать за излишества.
            </div>
        </motion.div>
    )
    return (
        <>
        { block1 }
        <TextImageBlock
            text={about_us_text}
            imgsrc={about_us_imgsrc}
        />
        </>
    )
}

function AboutUs () {

    return (
        <div className="mx-4">
            <div className="max-w-screen-lg mx-auto">
                <SubPageHeader
                    title="О Нас" />
                <AboutUsBlockMain />
            </div>
        </div>
    )
}

export { AboutUsBlockMain };
export default AboutUs;
