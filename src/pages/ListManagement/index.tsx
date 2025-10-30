import AddIcon from "@mui/icons-material/Add";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    IconButton,
    Stack,
    Tooltip,
    Typography
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import SavvyDialog from "components/SavvyDialog";
import SavvyNoData from "components/SavvyNoData";
import { useState } from "react";
import { EnumAction } from "utils/enum";
import CreateTitleForm from "./Dialogs/CreateTitle";
import DeleteTitle from "./Dialogs/DeleteTitle";
import deleteImage from "assets/Images/vector_delete.png";

export interface ListItem {
    id: string;
    title: string;
    subTitle: string;
    date: string;
}

export default function ListViewPage() {
    const [view, setView] = useState<"list" | "card">("list");
    const [rows, setRows] = useState<ListItem[]>([]);
    const [selectedRow, setSelectedRow] = useState<ListItem | null>(null);
    const [action, setAction] = useState<EnumAction>(EnumAction.Add);
    const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

    const handleCloseAddModal = () => {
        setSelectedRow(null);
        setAction(EnumAction.Add);
        setIsOpenAddModal(false);
    };

    const handleCloseDeleteModal = () => {
        setSelectedRow(null);
        setAction(EnumAction.Add);
        setIsOpenDeleteModal(false);
    };

    const handleOpenDeleteModal = (row: ListItem) => {
        setSelectedRow(row);
        setAction(EnumAction.Delete);
        setIsOpenDeleteModal(true);
    };

    const handleDelete = () => {
        setRows((prev) => prev.filter((row) => row.id !== selectedRow?.id));
    };

    const columns: GridColDef[] = [
        { field: "title", headerName: "Title", width: 200 },
        { field: "subTitle", headerName: "SubTitle", width: 200 },
        { field: "date", headerName: "Create Date", width: 120 },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            sortable: false,
            filterable: false,
            renderCell: (params) => {
                const row = params.row as ListItem;
                return (
                    <Stack direction="row" spacing={1} mt="10px">
                        <Tooltip title="View">
                            <IconButton
                                color="primary"
                                size="small"
                                onClick={() => {
                                    setSelectedRow(row);
                                    setAction(EnumAction.View);
                                    setIsOpenAddModal(true);
                                }}>
                                <VisibilityIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Edit">
                            <IconButton
                                color="info"
                                size="small"
                                onClick={() => {
                                    setSelectedRow(row);
                                    setAction(EnumAction.Edit);
                                    setIsOpenAddModal(true);
                                }}>
                                <EditIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete">
                            <IconButton
                                color="info"
                                size="small"
                                onClick={() => handleOpenDeleteModal(row)}>
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                );
            }
        }
    ];

    return (
        <>
            <Box sx={{ p: 3 }}>
                {/* Header */}
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Titles
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        <Button
                            endIcon={<AddIcon />}
                            variant="contained"
                            size="small"
                            fullWidth
                            sx={{ margin: "5px 15px !important" }}
                            onClick={() => setIsOpenAddModal(true)}>
                            Create
                        </Button>

                        <Tooltip title="List View">
                            <IconButton
                                color={view === "list" ? "primary" : "default"}
                                onClick={() => setView("list")}>
                                <ViewListIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Card View">
                            <IconButton
                                color={view === "card" ? "primary" : "default"}
                                onClick={() => setView("card")}>
                                <ViewModuleIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Stack>

                {/* Content */}
                {!rows || rows.length === 0 ? (
                    <SavvyNoData />
                ) : (
                    <>
                        {view === "list" ? (
                            <Box
                                sx={{
                                    height: 420,
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                    overflow: "hidden"
                                }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSizeOptions={[5]}
                                    initialState={{
                                        pagination: { paginationModel: { pageSize: 5 } }
                                    }}
                                    disableRowSelectionOnClick
                                />
                            </Box>
                        ) : (
                            <Grid container spacing={2}>
                                {rows.map((row) => (
                                    <Grid item xs={12} sm={6} md={4} key={row.id}>
                                        <Card
                                            sx={{
                                                borderRadius: 3,
                                                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                                transition: "0.3s",
                                                "&:hover": { transform: "translateY(-4px)" }
                                            }}>
                                            <CardContent>
                                                <Stack
                                                    direction="row"
                                                    spacing={2}
                                                    alignItems="center">
                                                    <Box>
                                                        <Typography fontWeight="bold">
                                                            {row.title}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary">
                                                            {row.subTitle}
                                                        </Typography>
                                                    </Box>
                                                </Stack>

                                                <Box sx={{ mt: 2 }}>
                                                    <Typography variant="body2">
                                                        Created At: {row.date}
                                                    </Typography>
                                                </Box>

                                                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                                                    <Tooltip title="View">
                                                        <IconButton
                                                            color="info"
                                                            size="small"
                                                            onClick={() => {
                                                                setSelectedRow(row);
                                                                setAction(EnumAction.View);
                                                                setIsOpenAddModal(true);
                                                            }}>
                                                            <VisibilityIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>

                                                    <Tooltip title="Edit">
                                                        <IconButton
                                                            color="info"
                                                            size="small"
                                                            onClick={() => {
                                                                setSelectedRow(row);
                                                                setAction(EnumAction.Edit);
                                                                setIsOpenAddModal(true);
                                                            }}>
                                                            <EditIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>

                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            color="info"
                                                            size="small"
                                                            onClick={() =>
                                                                handleOpenDeleteModal(row)
                                                            }>
                                                            <DeleteIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </>
                )}
            </Box>

            {/* Dialog */}
            <SavvyDialog
                maxWidth="md"
                handleClose={handleCloseAddModal}
                open={isOpenAddModal}
                title={
                    action === EnumAction.Add
                        ? "Create"
                        : action === EnumAction.Edit
                          ? "Edit"
                          : "View"
                }
                DialogContents={
                    <CreateTitleForm
                        thisRow={selectedRow}
                        action={action}
                        setRows={setRows}
                        handleCloseModal={handleCloseAddModal}
                    />
                }
                height="280px"
            />

            <SavvyDialog
                handleClose={handleCloseDeleteModal}
                open={isOpenDeleteModal}
                title="Delete"
                maxWidth="sm"
                bgImageOpacity={0.1}
                imageSrc={deleteImage}
                height="250px"
                dangerous
                confirmDialog
                handleAccept={handleDelete}
                DialogContents={<DeleteTitle />}
            />
        </>
    );
}
