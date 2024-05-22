import {Table, Form} from 'react-bootstrap';


function ActionPlanTable({costs, probabilities, actions}) {

    return (
        <Table  striped bordered hover>
            <tbody>
                <tr>
                    <th>Risk event</th>
                    <th>Calculated probability</th>
                    <th>Action plan</th>
                    <th>Risk assessment</th>
                    <th>Loss assessment</th>
                    <th>Size</th>
                </tr>
                {costs.map((row, index) => {
                    let loss;
                    let risk;
                    return (
                        <tr key={index + Math.random()}>
                            <th style={{fontWeight: 400}}>{costs[index][0]}</th>
                            <th style={{fontWeight: 400}}>{parseFloat(probabilities[index][22].toFixed(3))}</th>
                            <th style={{fontWeight: 400}}>
                                <Form.Select aria-label="Default select example">
                                    {actions.map(action => {
                                        return (
                                            <option value={action}>{action}</option>
                                        )
                                    })}
                                </Form.Select>
                            </th>
                            <th style={{fontWeight: 400}}>{risk = parseFloat(Math.random().toFixed(3))}</th>
                            <th style={{fontWeight: 400}}>{loss = parseFloat(Math.random().toFixed(3))}</th>
                            <th style={{fontWeight: 400}}>{parseFloat((loss * risk).toFixed(3))}</th>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

export default ActionPlanTable;
