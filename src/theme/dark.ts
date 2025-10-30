import { createTheme, PaletteOptions, Theme, ThemeOptions } from "@mui/material/styles";

const createColor = (mainColor: string) => {
    const theme = createTheme();
    return theme.palette.augmentColor({ color: { main: mainColor } });
};

const commonBlack = "#0E185F";

const baseTheme = createTheme({
    direction: "ltr",
    palette: {
        mode: "dark",
        primary: {
            main: "#FFC432"
        },
        secondary: {
            light: "rgba(160, 219, 219, 0.1)",
            main: "#A0DBDB",
            dark: "#56A7A7"
        },
        background: {
            default: "#F0F9F9",
            paper: "#F0F9F9"
        },
        text: {
            primary: "#200E3A",
            disabled: "rgba(14, 24, 95, 0.5)"
        },
        common: {
            black: commonBlack,
            white: "rgba(253, 255, 254, 1)"
        },
        exampleColor: createColor("#ff5845")
    } as PaletteOptions,
    typography: {
        allVariants: {
            fontFamily: "YekanBakh !important"
        }
    }
} as ThemeOptions);

const darkTheme: Theme = createTheme(baseTheme, {
    components: {
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
                size: "small"
            },
            styleOverrides: {
                root: {
                    "& .MuiInputBase-root": {
                        height: "40px"
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: commonBlack
                    }
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-focused": {
                        color: commonBlack
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none"
                    }
                },
                sizeMedium: {
                    height: "40px",
                    fontSize: "14px",
                    borderRadius: "4px"
                },
                sizeSmall: {
                    height: "30px",
                    fontSize: "14px",
                    borderRadius: "4px"
                },
                outlined: {
                    borderWidth: "2px",
                    color: commonBlack,
                    "&:hover": {
                        borderWidth: "2px"
                    }
                }
            }
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    backgroundColor: baseTheme.palette.common.white,
                    color: commonBlack,
                    border: `1px solid ${baseTheme.palette.action.disabled}`,
                    "&:hover": {
                        backgroundColor: baseTheme.palette.primary.light
                    },
                    "&.Mui-selected": {
                        backgroundColor: baseTheme.palette.primary.main,
                        "&:hover": {
                            backgroundColor: "#FFC432",
                            opacity: 0.9
                        }
                    }
                }
            }
        }
    }
});

export default darkTheme;
