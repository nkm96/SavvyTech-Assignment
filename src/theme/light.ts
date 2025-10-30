// export Mui light theme object from here
import { ButtonProps } from "@mui/material/Button";
import { alpha, createTheme, PaletteOptions, Theme, ThemeOptions } from "@mui/material/styles";

const createColor = (mainColor: string) => {
    const theme = createTheme();
    return theme.palette.augmentColor({ color: { main: mainColor } });
};

export const redColor = "#FF0000";
const commonBlack = "#12110E";

const baseTheme = createTheme({
    direction: "ltr",
    palette: {
        mode: "light",
        primary: {
            main: "#78cec4ff",
            dark: "#5E2329",
            light: "#DDF6F3"
        },
        secondary: {
            // light: "rgba(160, 219, 219, 0.1)",
            // main: "#F0ECE0",
            // dark: "#FBD288"
            main: "#923A43",
            dark: "#5E2329",
            light: "#923A43BF"
        },
        background: {
            default: "#FDFFFD",
            paper: "#FDFFFD"
        },
        text: {
            primary: "#0F3D3E",
            disabled: "#819988"
        },
        divider: "#B5BBB6",
        common: {
            black: commonBlack,
            white: "#F8F6F2"
        },
        info: {
            main: "#A0DBDB"
        },
        // custom colors here (ATTENTION: for use these colors in a mui component like Button, must declare in src/types/mui-theme.d.ts file)
        acceptedTagColor: createColor("#5aafa5ff"),
        canceledTagColor: createColor("#C5C7CD"),
        closedTagColor: createColor("#4D96FF"),
        rejectedTagColor: createColor("#B8001F"),
        underReviewTagColor: createColor("#5aafa5ff"),
        dialogTitleBgColor: createColor("#5aafa5ff"),
        appBgColor: createColor("#FCFBF8)")
    } as PaletteOptions,

    typography: {
        allVariants: {
            fontFamily: "YekanBakh !important"
        }
    }
} as ThemeOptions);

const lightTheme: Theme = createTheme(baseTheme, {
    components: {
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
                size: "small"
            },
            styleOverrides: {
                root: {
                    "& .MuiInputBase-root": {
                        // height: "40px"
                    }
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: commonBlack
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: "#1D191980",
                    borderRadius: "4px"
                },
                input: {
                    fontSize: "14px",
                    height: "24px"
                    // padding: "15px 14px"
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    // color: "#0F3D3E !important"
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
                    fontSize: "13px",
                    borderRadius: "4px"
                },
                outlined: ({ theme, ownerState }: { theme: Theme; ownerState: ButtonProps }) => {
                    const colorKey = ownerState.color as keyof typeof theme.palette;
                    const color = colorKey && theme.palette[colorKey];

                    const borderColor =
                        color && typeof color === "object" && "main" in color
                            ? color.main
                            : theme.palette.primary.main;

                    return {
                        borderWidth: "2px",
                        borderColor: borderColor,
                        color: commonBlack,
                        "&:hover": {
                            borderWidth: "2px"
                        }
                    };
                },
                outlinedPrimary: {
                    borderColor: `${baseTheme.palette.secondary.main}`,
                    color: baseTheme.palette.secondary.main,
                    ":hover": {
                        borderColor: `${baseTheme.palette.secondary.dark}`,
                        // backgroundColor: "#FFC55A33",
                        textShadow: "0px 0px 1px #0f3d3e7a"
                    }
                },
                containedSecondary: {
                    backgroundColor: baseTheme.palette.secondary.main,
                    borderColor: baseTheme.palette.secondary.dark,
                    ":hover": {
                        backgroundColor: baseTheme.palette.secondary.main,
                        textShadow: "0px 0px 1px rgba(255, 196, 50, 0.3)"
                    }
                },
                containedPrimary: {
                    backgroundColor: baseTheme.palette.secondary.main,
                    borderColor: "rgba(255, 196, 50, 1)",
                    color: baseTheme.palette.background.paper,
                    ":hover": {
                        backgroundColor: baseTheme.palette.secondary.dark,
                        textShadow: "0px 0px 1px rgba(255, 196, 50, 0.3)"
                    }
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: { height: "23px" },
                colorDefault: {
                    backgroundColor: "#F1DBB2",
                    borderRadius: "8px"
                }
            }
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    border: `0.5px solid ${baseTheme.palette.action.disabled}`,
                    "&.Mui-selected": {
                        backgroundColor: `${baseTheme.palette.secondary.main} !important`,
                        color: "white",
                        ":hover": {
                            // backgroundColor: `${baseTheme.palette.primary.main} !important`,
                            textShadow: "0px 0px 1px rgba(255, 196, 50, 0.3)"
                        }
                    }
                },
                ellipsis: { border: "none" }
            }
        },
        MuiTab: {
            flexContainer: {
                backgroundColor: "#FCFBF8"
            },
            styleOverrides: {
                // indicator: {
                //     backgroundColor: "#FEFFFD !important"
                // },
                root: {
                    "&.Mui-selected": {
                        color: "#0E091A !important",
                        fontWeight: "bold",
                        backgroundColor: "#FEFFFD !important",
                        borderBottom: "none !important"
                    },
                    border: "1px solid #F0ECE0 !important",
                    borderTopLeftRadius: "50px !important",
                    borderTopRightRadius: "50px !important",
                    backgroundColor: "#E2E4E7 !important",
                    minHeight: "40px",
                    maxHeight: "40px",
                    fontSize: "14px !important"
                }
            }
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-head": {
                        textAlign: "center",
                        // padding: "10.2px",
                        color: baseTheme.palette.common.black,
                        backgroundColor: baseTheme.palette.primary.main
                    }
                }
            }
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    borderSpacing: "0",
                    border: "1px solid #A3C1AB",
                    // borderLeft: "1px solid #A3C1AB,
                    // borderRight: "1px solid #0E091A",
                    boxShadow: "0px 0px 0px",
                    borderRadius: "4px 4px 0px 0px"
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    transition: "0.15s",
                    "&.MuiTableRow-hover:hover": {
                        backgroundColor: "#F8E4BF"
                    },
                    "&.Mui-selected": {
                        backgroundColor: "#FBD288 !important"
                    }
                }
            },
            variants: [
                {
                    props: { variant: "border" },
                    style: {
                        borderRadius: "8px !important",
                        marginBottom: "4px !important",
                        border: "solid 1px #A3C1AB !important",
                        backgroundColor: "#FBD288"
                    }
                }
            ]
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: `${baseTheme.palette.primary.main} !important`
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    borderBottom: "1px solid #A3C1AB",
                    justifyContent: "center",
                    fontWeight: "600",
                    padding: "5.5px 16px"
                },
                body: {
                    borderBottom: "1px solid #A3C1AB",
                    justifyContent: "center",
                    fontWeight: "400",
                    padding: "2.5px 16px"
                },
                footer: {
                    borderBottom: "1px solid rgba(14, 24, 95, 0.5)",
                    justifyContent: "center"
                }
            },
            variants: [
                {
                    props: { variant: "border" },
                    style: {
                        borderTop: "solid 1px #A3C1AB !important",
                        borderBottom: "solid 1px #A3C1AB !important"
                    }
                }
            ]
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: "12px",
                    fontFamily: "YekanBakh !important",
                    backgroundColor: "#5aafa5ff",
                    color: "#0F3D3E"
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: "16px",
                    backgroundColor: baseTheme.palette.common.white
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    boxShadow: "0 2px 4px 0 rgba(14, 24, 95, 0.25)",
                    backgroundColor: "#5aafa5ff",
                    // border: "solid 1px #000000",
                    padding: "0px",
                    fontSize: "16px",
                    fontWeight: "600"
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: "18px",
                    fontWeight: "600"
                },
                subtitle1: {
                    fontSize: "16px",
                    fontWeight: "600"
                },
                subtitle2: {
                    fontSize: "16px",
                    fontWeight: "400"
                },
                body1: {
                    fontSize: "14px",
                    fontWeight: "600"
                },
                body2: {
                    fontSize: "14px",
                    fontWeight: "400"
                },
                caption: {
                    fontSize: "12px",
                    fontWeight: "400",
                    color: baseTheme.palette.common.black
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                root: {},
                paper: {
                    borderRadius: "8px",
                    boxShadow: "0px 2px 6px 0px rgba(33, 146, 255, 0.15)",
                    border: "solid 1px " + baseTheme.palette.primary.main //+ baseTheme.palette.secondary.main
                },
                list: { paddingTop: "2px", paddingBottom: "2px" }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    paddingRight: "8px",
                    paddingLeft: "8px"
                }
            }
        },
        MuiStepLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-active": {
                        color: baseTheme.palette.primary.main,
                        fontSize: "14px",
                        fontWeight: "400"
                    },
                    "&.Mui-disabled": {
                        color: baseTheme.palette.text.disabled,
                        border: "1px solid #C0BAA5",
                        fontSize: "14px",
                        fontWeight: "400"
                    },
                    "&.Mui-completed": {
                        color: baseTheme.palette.text.primary,
                        fontSize: "14px",
                        fontWeight: "400"
                    }
                }
            }
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    fill: `${baseTheme.palette.common.white}`,
                    "&.Mui-active": {
                        fill: `${baseTheme.palette.primary.light} !important`
                    }
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    "& .MuiSvgIcon-root": {
                        fill: baseTheme.palette.primary.dark
                    }
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    "&.Mui-active": {
                        boxShadow: "0px 0px 0px 14px " + baseTheme.palette.success.main
                    }
                },
                thumb: {
                    color: baseTheme.palette.primary.main
                },
                track: {
                    color: baseTheme.palette.primary.main
                },
                rail: {
                    color: alpha(baseTheme.palette.common.black, 0.25)
                }
            }
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    color: baseTheme.palette.common.black,
                    "&.Mui-selected": {
                        backgroundColor: "#FCB5271A",
                        color: "#662AFF"
                        // textShadow: "0px 0px 1px #8b5dff"
                    }
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        backgroundColor: baseTheme.palette.background.paper
                        // color: baseTheme.palette.text.disabled
                    },
                    "&.MuiAccordion-root:before": {
                        backgroundColor: "transparent"
                    },
                    boxShadow: "none",
                    border: "1px solid #F0ECE0"
                }
            }
        }
    }
});

export default lightTheme;
