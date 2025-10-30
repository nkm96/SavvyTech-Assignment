import styled from "@emotion/styled";

const MemberListStyles = styled.span`
    .wrapper-div {
        position: relative;
        min-height: ${() => `calc(${window.innerHeight}px - 268px)`};

        .table-container {
            max-height: 60vh !important;
        }

        .chip {
            border-radius: 4px;
            padding: 18px 0px;
        }

        .pagination {
            /* left: 0; */
            right: -7px;
            /* margin-inline: auto; */
            width: fit-content;
        }

        .stick-bottom {
            position: absolute;
            bottom: 0px;

            .date {
                margin-right: 24px;
                margin-bottom: -8px;
            }
        }
    }

    .btns-container {
        display: flex;
        justify-content: space-between;
    }

    .filter-table-container {
        height: 340px;
    }

    .btn-in-table {
        padding: 5px 4px;
        border: none !important;
        min-width: unset !important;
        color: ${({ theme }) => theme.palette.primary.main} !important;
    }

    .btn-cell {
        gap: 5px;
        display: flex;
    }
`;

export default MemberListStyles;
