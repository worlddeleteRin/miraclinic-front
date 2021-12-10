
import { useEffect, useState } from 'react';

import Link  from 'next/link';
import { useRouter } from 'next/router';

import DesktopHeader from '@/components/header/DesktopHeader';
import MobileHeader from '@/components/header/MobileHeader';
import MobileDrawer from '@/components/header/MobileDrawer';

import { useCommonInfo, useHeaderLinks } from '@/hooks/useSite';

import { useRecoilState } from 'recoil';

import { 
    commonInfoState, headerLinksState 
} from '@/atoms/siteState';

import {
    Skeleton
} from '@mui/material';

function BaseHeader() {

    const commonInfoQuery = useCommonInfo();
    const headerLinksQuery = useHeaderLinks();

    const commonInfo = commonInfoQuery?.data
    const headerLinks = Array.isArray(headerLinksQuery?.data) ? 
        headerLinksQuery.data : null
        


    const headerError = (
        <div>
            error while fetch info
        </div>
    )

    const loading_skeleton_height = 50
    const headerLoading = (
            <div className="py-2 px-4 grid grid-cols-4 gap-2 max-w-screen-lg mx-auto items-center">
                <Skeleton   variant="circular" className="h-12 w-12"/>
                <Skeleton  height={loading_skeleton_height} />
                <Skeleton  height={loading_skeleton_height} />
                <Skeleton  height={loading_skeleton_height} />
            </div>
    )


    if (commonInfoQuery.isError || headerLinksQuery.isError) {
        return (
            <>
                { headerError }   
            </>
        )
    }

    if (commonInfoQuery.isLoading || headerLinksQuery.isLoading) {
        return (
            <>
                {headerLoading } 
            </>
        )
    }


    return (
        <>
        <div className="hidden md:block">
            <MobileDrawer 
                commonInfo={commonInfo}
                headerLinks={headerLinks}
            />
            <DesktopHeader 
                commonInfo={commonInfo}
                headerLinks={headerLinks}
            />
        </div>
        <div className="block md:hidden mb-[59px]">
            <MobileHeader 
                commonInfo={commonInfo}
                headerLinks={headerLinks}
            />
        </div>
        </>
    )
}

export default BaseHeader;
