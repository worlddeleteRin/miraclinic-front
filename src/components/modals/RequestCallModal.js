import { 
    Dialog,
    DialogContent,
    Fab,
    FormControl,
    Input,
    InputLabel,
    Button,
} from '@mui/material';

import { Icon } from '@iconify/react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { requestCallModalOpenState } from '@/atoms/siteState';
import { useRecoilState} from 'recoil';


function RequestCallModal() {

    const [isOpen, setOpen] = useRecoilState(requestCallModalOpenState);

    const handleClose = () => {
        setOpen(false)
    }

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const closeIcon = (
        <div
            className="absolute top-3 right-3"
        >
        <Fab
            onClick={handleClose}
            size="medium"
            color="primary"
        >
            <Icon
                icon="eva:close-fill"
                width="20"
            />
        </Fab>
        </div>
    )

    const title = (
        <div className="text-[30px] tracking-wide font-extrabold">
            Оставьте свои контакты 
        </div>
    )

    const description = (
        <div 
            className="py-3 tracking-wide font-light text-lg text-gray-400"
        >
            Мы перезвоним в течение 5 минут и ответим на все интересующие Вас вопросы.
        </div>
    )

    const formInputs = (
        <div
            className="flex flex-col gap-5 mt-5"
        >
        <FormControl>
            <InputLabel htmlFor="request-call-name">Ваше Имя</InputLabel>
            <Input
                id="request-call-name"
                className="tracking-wider max-w-[300px]"
            />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="request-call-phone">Ваш контактный телефон</InputLabel>
            <Input
                id="request-call-phone"
                className="tracking-wider max-w-[300px]"
            />
        </FormControl>
        </div>
    )
    const formSubmit = (
        <div
            className="mt-10"
        >
            <Button
                variant="contained"
                size="large"
            >
                Отправить заявку
            </Button>
        </div>
    )

    return (
        <Dialog 
            open={isOpen}
            onClose={handleClose}
            fullScreen={fullScreen}
            maxWidth="800px"
        >
            <div
                className="max-w-[800px] md:min-w-[700px] min-h-[200px] py-6 sm:px-10 px-7 flex flex-col  h-full"
            >
                <div className="w-11/12 sm:w-10/12 flex flex-col justify-center h-full">
                    { title }
                    { description }
                    { formInputs }
                    { formSubmit }
                </div>
            </div>
            {closeIcon}
        </Dialog>
    )
}

export default RequestCallModal
