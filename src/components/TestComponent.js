import { Icon } from '@iconify/react';
import { Button } from '@mui/material';

function TestComponent (props) {
    return (
        <div style={{border: '2px solid red'}}>
            props are {JSON.stringify(props)}
            <p>test component is here dude</p>
            <Button
                color="primary"
                variant="contained"
                startIcon={
                    <Icon 
                    width="25"
                    icon="mdi:account-circle"/>
                }
            >
                {props?.button_title || "button"} 
            </Button>
        </div>
    )
}

export default TestComponent;
