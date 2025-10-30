import { Dispatch, SetStateAction } from "react";

export interface DialogProps {
    setIsOpenDialog: Dispatch<SetStateAction<boolean>>;
}
