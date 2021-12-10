import TitleBig from '@/components/content/TitleBig';

import { Icon } from '@iconify/react';

import { useState } from 'react';

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';


function AccordionQA (props) {
    const default_title = "Частые вопросы и ответы"
    const default_content = [
        {
            "title": "Здесь будет вопрос?",
            "body": "Здесь будет ответ на вопрос",
        },
        {
            "title": "Здесь будет вопрос?",
            "body": "Здесь будет ответ на вопрос",
        },
        {
            "title": "Здесь будет вопрос?",
            "body": "Здесь будет ответ на вопрос",
        },
        {
            "title": "Здесь будет вопрос?",
            "body": "Здесь будет ответ на вопрос",
        },
    ]
    // eof def values

    const title = props?.title || default_title
    const content = props?.content || default_content

    const [expandedId, setExpanded] = useState(0);
    const handleExpanded = (id) => {
        const newId = id === expandedId ? null: id 
        setExpanded(newId)
    }

    const titleBlock = (
        <TitleBig 
            title={title}
            size="small"
        />
    )
    const accordionBlock = (
        <div className="grid grid-cols-1 mt-5 gap-3">
            {content && content.map((item, index) => (
          <Accordion 
              expanded={expandedId === index}
              key={index}
              onChange={() => handleExpanded(index)}
              className="rounded-xl"
          >
            <AccordionSummary
              expandIcon={<Icon icon="bx:bx-chevron-down" width="30" className="text-white"/>}
              className="bg-primary rounded-xl"
            >
                <div className="font-semibold text-white tracking-wide">
                { item?.title }
                </div>
            </AccordionSummary>
            <AccordionDetails className="rounded-xl">
                { item?.body }
            </AccordionDetails>
          </Accordion>
            ))
            }
        </div>
    )
   return (
       <div className="mx-4 py-10">
            <div className="max-w-screen-lg mx-auto">
                { titleBlock }
                { accordionBlock }
            </div>
       </div>
   )
}

export default AccordionQA
