import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ClearIcon } from "@mui/x-date-pickers";
import { ReactNode } from "react";

function SavvyDialog(props: SavvyDialogProps) {
    const {
        DialogContents,
        handleClose,
        title,
        confirmDialog = false,
        maxWidth,
        handleCancel,
        handleAccept,
        dontCloseModalOnBackdropClick,
        dontCloseModalOnEscapeKeyDown,
        dangerous = false,
        imageSrc,
        marginTopImg,
        bgImageOpacity = 0.05,
        height,
        dontShowCloseIcon,
        actionButtons,
        acceptBtnText,
        cancelBtnText,
        closeAfterAccept = true,
        ...restProps
    } = props;

    const handleCloseModal:
        | ((event: object, reason: "backdropClick" | "escapeKeyDown") => void)
        | undefined = (_e, reason) => {
        if (dontCloseModalOnBackdropClick && reason === "backdropClick") return;
        if (dontCloseModalOnEscapeKeyDown && reason === "escapeKeyDown") return;
        handleClose();
    };

    return (
        <Dialog
            sx={(theme) => ({
                "& .MuiPaper-root": {
                    position: "relative",
                    height: height || "auto",
                    borderRadius: "8px",
                    overflow: "hidden",
                    backgroundColor: theme.palette.common.white
                },
                "& .MuiModal-backdrop": {
                    backgroundColor: `${theme.palette.common.black}33`,
                    backdropFilter: "blur(1px)"
                }
            })}
            onClose={handleCloseModal}
            maxWidth={maxWidth || "md"}
            fullWidth
            {...restProps}>
            <DialogTitle
                sx={(theme) => ({
                    backgroundColor: dangerous ? theme.palette.error.main : "#5aafa5ff",
                    color: dangerous ? theme.palette.common.white : theme.palette.common.black,
                    padding: "11px 24px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: "400",
                    position: "relative",
                    zIndex: 1,
                    boxShadow: `0px 2px 4px 0px ${theme.palette.common.black}33`
                })}>
                {title}
            </DialogTitle>

            {!dontShowCloseIcon && (
                <Tooltip
                    children={
                        <IconButton
                            sx={(theme) => ({
                                position: "absolute",
                                right: 10,
                                top: 5,
                                color: dangerous
                                    ? theme.palette.common.white
                                    : theme.palette.common.black,
                                zIndex: 2
                            })}
                            aria-label="close"
                            onClick={handleClose}>
                            <ClearIcon />
                        </IconButton>
                    }
                    title="Close"
                />
            )}

            <div
                style={{
                    position: "absolute",
                    top: 60,
                    bottom: 60,
                    left: 0,
                    width: "100%",
                    height: "calc(100% - 110px)",
                    marginTop: marginTopImg || "20px",
                    backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: bgImageOpacity,
                    zIndex: 0
                }}
            />

            <DialogContent
                sx={{
                    padding: "20px 24px",
                    // paddingTop: "30px",
                    position: "relative",
                    zIndex: 1, // Keeps content above the background
                    "&::-webkit-scrollbar": {
                        width: "8px",
                        height: "8px",
                        borderRadius: "100px"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(0, 0, 0, 0.33)",
                        minHeight: "40px",
                        maxHeight: "40px",
                        borderRadius: "100px"
                    }
                }}>
                {DialogContents}
            </DialogContent>

            {actionButtons && <DialogActions sx={{ zIndex: 1 }}>{actionButtons}</DialogActions>}
            {confirmDialog && (
                <DialogActions sx={{ zIndex: 1 }} className="d-f-j-c-a-c">
                    <Button
                        variant="outlined"
                        color={dangerous ? "error" : "primary"}
                        onClick={() => {
                            handleCancel?.();
                            handleClose();
                        }}>
                        {cancelBtnText || "Cancel"}
                    </Button>
                    <Button
                        variant="contained"
                        color={dangerous ? "error" : "primary"}
                        onClick={() => {
                            handleAccept?.();
                            if (closeAfterAccept) handleClose();
                        }}>
                        {acceptBtnText || "Delete"}
                    </Button>
                </DialogActions>
            )}
        </Dialog>
    );
}

export default SavvyDialog;

interface SavvyDialogPropsBase extends DialogProps {
    DialogContents: ReactNode;
    handleClose: () => void;
    title: string;
    confirmDialog?: boolean;
    handleCancel?: () => void;
    dontCloseModalOnBackdropClick?: boolean;
    dontCloseModalOnEscapeKeyDown?: boolean;
    dontShowCloseIcon?: boolean;
    dangerous?: boolean;
    imageSrc?: string;
    marginTopImg?: string;
    bgImageOpacity?: number;
    height?: string;
}

interface SavvyDialogPropsWithConfirm extends SavvyDialogPropsBase {
    confirmDialog: true;
    handleAccept: () => void;
    actionButtons?: undefined;
    acceptBtnText?: string;
    cancelBtnText?: string;
    closeAfterAccept?: boolean;
}

interface SavvyDialogPropsWithoutConfirm extends SavvyDialogPropsBase {
    confirmDialog?: false;
    handleAccept?: () => void;
    actionButtons?: ReactNode;
    acceptBtnText?: undefined;
    cancelBtnText?: undefined;
    closeAfterAccept?: boolean;
}

type SavvyDialogProps = SavvyDialogPropsWithConfirm | SavvyDialogPropsWithoutConfirm;
