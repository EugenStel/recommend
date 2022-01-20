import React from "react";
import { Pagination } from "@mui/material";

export const CustomPagination = ({ setPage, numOfPages = 10 }) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <>
            <Pagination
                count={numOfPages}
                variant="outlined"
                color="primary"
                sx={{ marginTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                onChange={(e) => handlePageChange(e.target.textContent)}
            />
        </>
    )
}
