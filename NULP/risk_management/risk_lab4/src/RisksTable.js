import {Table} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function RisksTable({data, checkChange, dataType}) {
    return (
        <>
            <Table striped bordered hover>
                <tbody>

                    {data.map((row, index) => (
                        <tr key={index}>
                            {row.map((value, valIndex) => (
                                <th style={{fontWeight: 400}} key={dataType + '_' + index + '_' + valIndex}>
                                    {typeof value === 'string' ? value :
                                        <Form.Check
                                            type='switch'
                                            defaultChecked={value}
                                            id={row[0]}
                                            onChange={e => {
                                                let checked = e.target.checked;
                                                checkChange(dataType, index, checked);
                                            }}
                                        />
                                    }
                                </th>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default RisksTable;