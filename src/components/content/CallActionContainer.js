import {
    Button
} from '@mui/material';

import TitleBig from '@/components/content/TitleBig';

import { useSetRecoilState } from 'recoil';
import { requestCallModalOpenState } from '@/atoms/siteState';

function CallActionContainer () {
    const setCallModalOpen = useSetRecoilState(requestCallModalOpenState)
    const handleOpenCallRequest = () => {
        setCallModalOpen(true) 
    }

    const titleBlock = (
        <TitleBig
            title="Нужна консультация?"
            size="medium"
        />
    )
    const descBlock = (
        <div className="text-xl md:text-2xl mt-7 tracking-wide font-semibold py-5 leading-relaxed md:leading-relaxed">
            Оставьте Вашу заявку. <br />
            Мы перезвоним в течение <br />
            <span className="py-1 px-3 rounded-lg bg-primary text-white mx-2 tracking-wide">
                5 минут 
            </span>
            и ответим на все интересующие Вас вопросы.
        </div>
    )
    const actionBlock = (
        <div className="mt-12 text-center md:text-left">
            <Button
                variant="contained"
                onClick={handleOpenCallRequest}
                size="large"
                className="tracking-widest uppercase"
            >
                Заказать звонок
            </Button>
        </div>
    )
    return (
        <div className="py-12 bg-gray-100">
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto">
                    { titleBlock }
                    { descBlock }
                    { actionBlock }
                </div>
            </div>
        </div>
    )
}

export default CallActionContainer;
