import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

function SavvyLoadingButton(props: LoadingButtonProps) {
    const { children, ...restProps } = props;

    return <LoadingButton {...restProps}>{children}</LoadingButton>;
}

export default SavvyLoadingButton;
