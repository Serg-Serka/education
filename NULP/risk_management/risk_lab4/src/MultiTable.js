import Table from 'react-bootstrap/Table';


function MultiTable({data}) {
    return (
        <Table  striped bordered hover>
            <tbody>
            {data.map(row => {
                return (
                    <tr>
                        {row.map(value => {
                            return (
                                <th style={{fontWeight: 400}}>{value}</th>
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
