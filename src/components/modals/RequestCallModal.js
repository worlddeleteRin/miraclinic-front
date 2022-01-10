
import { useState } from 'react';

import { 
    Dialog,
    Fab,
    FormControl,
    Button,
    TextField,
} from '@mui/material';

import { Icon } from '@iconify/react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import InputMask from "react-input-mask";

import { requestCallModalOpenState } from '@/atoms/siteState';
import { useRecoilState} from 'recoil';

import { useSnackbar } from 'notistack';

import APISite from '@/api/site';

function RequestCallModal() {
    const callInfoDefault = {
      name: "",
      phoneMasked: "", 
      phone: "",
    }

    const { enqueueSnackbar } = useSnackbar();
    const [isOpen, setOpen] = useRecoilState(requestCallModalOpenState);
    const [callInfo, setCallInfo] = useState(callInfoDefault);
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setCallInfo(callInfoDefault);
    }

    const changeName = (event) => {
      const newCallInfo = {...callInfo};
      newCallInfo.name = event.target.value.trim();
      setCallInfo(newCallInfo);
    }

    function changePhone(event) {
      var newCallInfo = {...callInfo};
      var value = event.target.value;
      newCallInfo.phoneMasked = value;
      var rawValue = value.replace(/\_/g, '').replace(/\s/g, '');
      newCallInfo.phone = rawValue;
      setCallInfo(newCallInfo);
    };

    function validateForm() {
      if (callInfo.phone.length != 12) {
        return false;
      }
      if (callInfo.name.length < 1) {
        return false;
      }
      return true;
    }

    const submitCallClick = async () => {
      console.log("submit call click event", callInfo);
      if (isLoading) {
        return;
      }
      const isValid = validateForm();
      if (!isValid) {
        return;
      }
      console.log('it is valid: ', isValid);
      setIsLoading(true);
      await APISite.requestCall({
        name: callInfo.name,
        phone: callInfo.phone,
      });
      setIsLoading(false);
      handleClose();
      enqueueSnackbar('Ваша заявка успешно отправлена');
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
            <TextField
                value={callInfo.name}
                onChange={(event) => changeName(event)}
                variant="standard"
                label="Ваше Имя"
                className="tracking-wider max-w-[300px]"
            />
        </FormControl>
        <FormControl>
          <InputMask
            mask="+7 999 999 99 99"
            value={callInfo.phoneMasked}
            onChange={(event) => changePhone(event)}
          >
            <TextField
                variant="standard"
                label="Ваш номер телефона"
                className="tracking-wider max-w-[300px]"
            />
          </InputMask>
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
                onClick={submitCallClick}
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

export default RequestCallModal;
