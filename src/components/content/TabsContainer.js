import { defaultTabsContainer } from "@/helpers/content";

import {
    Tab,
} from '@mui/material';
import {
    TabContext,
    TabList,
    TabPanel
} from '@mui/lab';

import Title from '@/components/content/Title';

import { useState } from 'react';


function TabsContainer (props) {
    const imgsrc = props?.imgsrc ? props.imgsrc : defaultTabsContainer.imgsrc
    const tabs = props?.tabs ? props.tabs : defaultTabsContainer.tabs

    const [tabValue, setTabValue] = useState(1);

    const handleSetTab = (event, newValue) => {
        setTabValue(newValue)
    }

    const title = (
        <div className="">
            <Title title="Как рассчитывается стоимость"/>
        </div>
    )

    const tabsBlock = (
        <div>
            { title }
            <TabContext
                value={tabValue}
            >
                <TabList
                    variant="scrollable"
                    scrollButtons="auto"
                    onChange={handleSetTab}
                >
                    {tabs?.map((tab) =>
                            <Tab
                                key={tab?.id}
                                label={tab?.title}
                                value={tab?.id}
                            >
                            </Tab>
                    )}
                </TabList>
                <div>
                    {tabs?.map((tab) => 
                            <div key={tab?.id}> 
                            <TabPanel value={tab?.id}
                                className="bg-gray-100 rounded-lg mt-3"
                            >
                                {tab?.content}
                            </TabPanel>
                            </div>
                    )}
                </div>
              </TabContext>
        </div>
    )
    const imageBlock = (
        <div>
            <img
                className="max-h-[400px] object-contain"
                src={imgsrc}
            />
        </div>
    )
    return (
        <div className="py-4 mt-5 mx-2">
            <div className="max-w-screen-lg mx-2 md:mx-auto grid gap-4 grid-cols-1 md:grid-cols-2">
                {tabsBlock}
                {imageBlock}
            </div>
        </div>
    )
}

export default TabsContainer
