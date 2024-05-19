import Table from 'react-bootstrap/Table';


function OneRowTable({data}) {
    return (
        <Table  striped bordered hover>
            <tbody>
                <tr>
                    {data.map(row => {
                        return (
                                <th>{parseFloat(row).toFixed(2)}</th>
                        );
                    })}
                </tr>
            </tbody>
        </Table>
    );
}

export default OneRowTable;
