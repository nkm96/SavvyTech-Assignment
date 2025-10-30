import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SavvyLoadingButton from "components/SavvyLoadingButton";
import { Form, Formik } from "formik";
import { enqueueSnackbar } from "notistack";
import { ListItem } from "pages/ListManagement";
import { Dispatch, SetStateAction, useState } from "react";
import { EnumAction } from "utils/enum";
import * as yup from "yup";

const validationSchema = yup.object({
    title: yup
        .string()
        .min(3, "Minimum three characters required.")
        .required("Minimum three characters required."),
    subTitle: yup
        .string()
        .min(3, "Minimum three characters required.")
        .required("Minimum three characters required.")
});

export default function CreateTitleForm(props: PropsType) {
    const { thisRow, action, setRows, handleCloseModal } = props;
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formValues] = useState<FormValuesType>({
        title: thisRow ? thisRow?.title : null,
        subTitle: thisRow ? thisRow?.subTitle : null
    });

    const handleCreateEditRow = (values: FormValuesType) => {
        if (values && values.title !== null && values.subTitle !== null) {
            setIsLoading(true);

            if (thisRow && action == EnumAction.Edit) {
                //call edit api
                setRows((prev) =>
                    prev.map((r) =>
                        r.id === thisRow.id
                            ? { ...r, title: values.title || "", subTitle: values.subTitle || "" }
                            : r
                    )
                );
                enqueueSnackbar("Edited Successfully!", {
                    variant: "success"
                });
                handleCloseModal();
                setIsLoading(false);
            } else {
                //call create api
                setRows((prev) =>
                    prev.concat({
                        date: new Date().toLocaleDateString(),
                        id: crypto.randomUUID(),
                        title: values.title || "",
                        subTitle: values.subTitle || ""
                    })
                );

                handleCloseModal();
                enqueueSnackbar("Created Successfully!", { variant: "success" });
                setIsLoading(false);
            }
        }
    };

    return (
        <Formik
            validationSchema={validationSchema}
            onSubmit={(values) => {
                handleCreateEditRow(values);
            }}
            initialValues={formValues}>
            {({ values, touched, errors, handleBlur, handleChange }) => {
                return (
                    <Form>
                        <Grid container className={action == EnumAction.View ? "view-mode" : ""}>
                            <Grid item xs={12} container className="d-f-j-c-a-c" spacing={1}>
                                <Grid item xs={12} className="d-f-j-c-a-c" mt="10px">
                                    <TextField
                                        id="title"
                                        label="Title"
                                        value={values.title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={(touched.title && errors.title) || " "}
                                        error={touched.title && Boolean(errors.title)}
                                        disabled={action == EnumAction.View}
                                        className={
                                            action == EnumAction.View ? "view-mode-text" : ""
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} className="d-f-j-c-a-c">
                                    <TextField
                                        id="subTitle"
                                        label="SubTitle"
                                        value={values.subTitle}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={(touched.subTitle && errors.subTitle) || " "}
                                        error={touched.subTitle && Boolean(errors.subTitle)}
                                        disabled={action == EnumAction.View}
                                        className={
                                            action == EnumAction.View ? "view-mode-text" : ""
                                        }
                                    />
                                </Grid>

                                {action != EnumAction.View && (
                                    <Box sx={{ position: "absolute", bottom: "20px" }}>
                                        <SavvyLoadingButton
                                            fullWidth
                                            size="medium"
                                            color="primary"
                                            variant="contained"
                                            type="submit"
                                            endIcon={<CheckIcon />}
                                            loading={isLoading}
                                            disabled={isLoading}>
                                            {action == EnumAction.Edit ? "Edit" : "Create"}
                                        </SavvyLoadingButton>
                                    </Box>
                                )}
                            </Grid>
                        </Grid>
                    </Form>
                );
            }}
        </Formik>
    );
}

interface FormValuesType {
    title: string | null;
    subTitle: string | null;
}

interface PropsType {
    thisRow: ListItem | null;
    action: EnumAction;
    setRows: Dispatch<SetStateAction<ListItem[]>>;
    handleCloseModal: () => void;
}
