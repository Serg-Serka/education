import Table from 'react-bootstrap/Table';

function MathTable({data, setter}) {

    return(
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Parameter</th>
                    <th>Mark</th>
                    <th>Unit</th>
                    <th>Min</th>
                    <th>Nom</th>
                    <th>Max</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(data).map(([parameter, value]) => {
                    return (
                        <tr key={parameter}>
                            {Object.entries(value).map(([key, value]) => {
                                return key === 'max' ? (
                                    <th key={key}>
                                        <input
                                            style={{width: '100px'}}
                                            type='number'
                                            value={value}
                                            onChange={(e) => setter('math', parameter, key, e.target.value)}
                                        />
                                    </th>
                                ) : (
                                    <th key={key}>{typeof value === 'number' ? parseFloat(value).toFixed(2) : value}</th>
                                )
                            })}
                        </tr>
                    );
                })}

                </tbody>
            </Table>
        </>
    );

}

export default MathTable;