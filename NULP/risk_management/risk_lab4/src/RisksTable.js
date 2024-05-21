import {Table} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function RisksTable({data}) {
    return (
        <>
            <Table striped bordered hover>
                <tbody>

                    {data.map((row) => (
                        <tr>
                            {row.map(value => (
                                <th style={{fontWeight: 400}}>{value}</th>
                            ))}
                            <th>
                                <Form.Check
                                    type='checkbox'
                                    id={row[0]}
                                />
                            </th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default RisksTable;