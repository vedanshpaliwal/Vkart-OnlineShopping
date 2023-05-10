import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AiResponseDialog({ open, setOpen, Data, Heading }) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ 'textTransform': 'uppercase' }}>{Heading}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {Data}
                    </DialogContentText>

                </DialogContent>

            </Dialog>
        </div>
    );
}
