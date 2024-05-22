import Table from 'react-bootstrap/Table';


function MultiTable({data}) {
    return (
        <Table  striped bordered hover>
            <tbody>
            {data.map((row, index) => {
                return (
                    <tr key={index}>
                        {row.map((value, valIndex) => {
                            return (
                                <th
                                    style={{
                                        fontWeight: 400,
                                        backgroundColor: value === "Low" ? "green" : value === "Average" ? "orange" : value === "High" ? "red" : "white"
                                    }}
                                    key={index + '_' + valIndex}
                                >
                                    {typeof value === 'number' ? parseFloat(value.toFixed(2)) : value}
                                </th>
                            );
                        })}
                    </tr>
                );
            })}
            </tbody>
        </Table>
    );
}

export default MultiTable;
