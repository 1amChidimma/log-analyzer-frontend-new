import React from "react";
import '../styles/Table.css';

import { useToast } from "./ToastContext";

const Table = ({data = [], onRowClick}) => {

    const { showToast } = useToast();

    return (
        <>
        <div className="table-wrapper">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>ENDPOINT</th>
                        <th>TOTAL REQUESTS</th>
                        <th>SUCCESS COUNT</th>
                        <th>FAILURE COUNT</th>
                        <th>SUCCESS RATE (%)</th>
                        <th>FAILURE RATE (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr onClick={() => showToast("No data available")}>
                            <td colSpan="7" style={{ textAlign: "center" }}>
                                No data available
                            </td>
                        </tr>
                    ) : (
                        data.map((row, index) => (
                            <tr 
                            key={index}
                            onClick={() => onRowClick && onRowClick(row)}
                            className="clickable-row"
                        >
                            <td>{index + 1}</td>
                            <td className="endpoint-cells">{row.endpoint}</td>
                            <td>{row.totalRequests}</td>
                            <td>{row.success}</td>
                            <td>{row.failure}</td>
                            <td>{row.successRate}%</td>
                            <td>{row.failureRate}%</td>

                        </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
        </>
    )

};

export default Table;