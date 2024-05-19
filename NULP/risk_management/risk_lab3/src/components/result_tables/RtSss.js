import Table from 'react-bootstrap/Table';


function RtSss({data}) {
    return (
        <Table  striped bordered hover>
            <tbody>
                {data.map(row => {
                    return (
                        <tr>
                            {row.map(value => {
                                return (
                                    <th>{isNaN(value) ? 0 : parseFloat(value).toFixed(2)}</th>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default RtSss;
