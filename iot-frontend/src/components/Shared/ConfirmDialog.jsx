import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const ConfirmDialog = ({
    open,
    title = 'Are you sure?',
    message = 'This action cannot be undone',
    onConfirm,
    onCancel,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    confirmColor = 'primary',
    cancelColor = 'inherit'
    }) => {
    return (
        <Dialog
        open={open}
        onClose={onCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
            {title}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
            {message}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onCancel} color={cancelColor}>
            {cancelText}
            </Button>
            <Button onClick={onConfirm} color={confirmColor} autoFocus>
            {confirmText}
            </Button>
        </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;