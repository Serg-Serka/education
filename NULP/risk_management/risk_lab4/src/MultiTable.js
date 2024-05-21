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
                                <th style={{fontWeight: 400}} key={index + '_' + valIndex}>{value}</th>
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
