import {
    Skeleton,
    IconButton,
    Button,
} from '@mui/material';

import { useCommonInfo } from '@/hooks/useSite';

import { Icon } from '@iconify/react';

import { useSetRecoilState } from 'recoil';
import { requestCallModalOpenState } from '@/atoms/siteState';

import Link from 'next/link';


function BaseFooter () {

    const commonInfoQuery = useCommonInfo()
    const commonInfo = commonInfoQuery?.data

    const openRequestCallModal = useSetRecoilState(requestCallModalOpenState);

    const handleOpenCallModal = () => {
        openRequestCallModal(true)
    }

    const loading_skeleton_height = 50
    const footerLoading = (
            <div className="py-2 px-4 grid grid-cols-4 gap-2 max-w-screen-lg mx-auto items-center">
                <Skeleton   variant="circular" className="h-12 w-12"/>
                <Skeleton  height={loading_skeleton_height} />
                <Skeleton  height={loading_skeleton_height} />
                <Skeleton  height={loading_skeleton_height} />
            </div>
    )
    const logoBlock = (
        <div className="bg-white px-8 py-3 rounded-lg">
          <Link href="/">
            <img
                src={commonInfo?.logo_src}
                className="max-w-[180px] cursor-pointer w-[100px]"
            />
          </Link>
        </div>
    )
    const socialsBlock = (
        <div>
            {commonInfo?.socials && Object.keys(commonInfo?.socials)?.map((social, index) => (
                <IconButton key={index} color="inherit">
                    <a href={commonInfo?.socials[social]?.link} target="_blank" rel="noreferrer">
                    <Icon icon={commonInfo?.socials[social]?.icon}/>
                    </a>
                </IconButton>
            ))
            }
        </div>
    )

    const requestCallBlock = (
        <div>
            <Button
                variant="outlined"
                onClick={handleOpenCallModal}
                className="uppercase bg-white"
            >
               Запись  
                <span className="flex uppercase ml-1 px-2 text-green-500 bg-green-100 rounded-md">
                    online
                </span>
            </Button>
        </div>
    )
    const phoneBlock = (
      <div className="text-white">
        <a 
          href="tel:`commonInfo?.phone`"
          className="tracking-wider font-semibold text-xl"
        >
          { commonInfo?.phone_display }
        </a>
      </div>
    )

    const credentialsBlock = (
      <div>
        <div>
          ООО &quot;Мира Клиник&quot;
          ИНН 9103093941
          ОГРН 1209100008798
        </div>
      </div>
    )

    if (commonInfoQuery.isLoading) {
        return (
            <>
              { footerLoading }
            </>
        )
    }
  
    return (
        <div className="bg-primary text-white px-4 py-5">
          <div className="max-w-screen-lg mx-auto flex items-center flex-col gap-5 md:flex-row">
              { logoBlock }
              <div className="flex-1 items-center text-center">
                { socialsBlock }
              </div>
              <div className="flex flex-col items-center gap-4">
                { requestCallBlock }
                { phoneBlock }
              </div>
          </div>
          <div className="max-w-screen-lg mx-auto mt-7">
            { credentialsBlock }
          </div>
        </div>
    )
}

export default BaseFooter
