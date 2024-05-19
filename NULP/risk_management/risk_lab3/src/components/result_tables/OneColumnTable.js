import Table from 'react-bootstrap/Table';


function OneColumnTable({data}) {
    return (
        <Table  striped bordered hover>
            <tbody>
            {data.map(row => {
                return (
                    <tr>
                        <th>{parseFloat(row).toFixed(2)}</th>
                    </tr>
                );
            })}
            </tbody>
        </Table>
    );
}

export default OneColumnTable;
