import { createSvgIcon } from "@mui/material";

export const FileIcon = createSvgIcon(
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8 29C7.45 29 7 28.55 7 28V4C7 3.45 7.45 3 8 3H18V8C18 9.10625 18.8938 10 20 10H25V28C25 28.55 24.55 29 24 29H8ZM8 0C5.79375 0 4 1.79375 4 4V28C4 30.2062 5.79375 32 8 32H24C26.2062 32 28 30.2062 28 28V9.65625C28 8.59375 27.5812 7.575 26.8312 6.825L21.1688 1.16875C20.4188 0.41875 19.4062 0 18.3438 0H8ZM11.5 16C10.6687 16 10 16.6688 10 17.5C10 18.3312 10.6687 19 11.5 19H20.5C21.3312 19 22 18.3312 22 17.5C22 16.6688 21.3312 16 20.5 16H11.5ZM11.5 22C10.6687 22 10 22.6688 10 23.5C10 24.3312 10.6687 25 11.5 25H20.5C21.3312 25 22 24.3312 22 23.5C22 22.6688 21.3312 22 20.5 22H11.5Z"
            fill="#262E28"
        />
    </svg>,
    "FileIcon"
);

// import React from "react";
// import { createSvgIcon, SvgIconProps } from "@mui/material";

// export const FileIcon: React.FC<FileIconProps> = ({ size, ...props }) => {
//     const iconSize = size ? { fontSize: size } : {};
//     return <FileIconBase style={iconSize} {...props} />;
// };

// interface FileIconProps extends SvgIconProps {
//     size?: number;
// }

// export const FileIconBase = createSvgIcon(
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path
//             d="M8 29C7.45 29 7 28.55 7 28V4C7 3.45 7.45 3 8 3H18V8C18 9.10625 18.8938 10 20 10H25V28C25 28.55 24.55 29 24 29H8ZM8 0C5.79375 0 4 1.79375 4 4V28C4 30.2062 5.79375 32 8 32H24C26.2062 32 28 30.2062 28 28V9.65625C28 8.59375 27.5812 7.575 26.8312 6.825L21.1688 1.16875C20.4188 0.41875 19.4062 0 18.3438 0H8ZM11.5 16C10.6687 16 10 16.6688 10 17.5C10 18.3312 10.6687 19 11.5 19H20.5C21.3312 19 22 18.3312 22 17.5C22 16.6688 21.3312 16 20.5 16H11.5ZM11.5 22C10.6687 22 10 22.6688 10 23.5C10 24.3312 10.6687 25 11.5 25H20.5C21.3312 25 22 24.3312 22 23.5C22 22.6688 21.3312 22 20.5 22H11.5Z"
//             fill="#262E28"
//         />
//     </svg>,
//     "FileIcon"
// );
