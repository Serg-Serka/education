import {useState, useEffect} from "react";
import RisksTable from "./RisksTable";
import {Col, Row, Form, Button} from "react-bootstrap";
import MultiTable from "./MultiTable";

function App() {

    const [techRiskData, setTechRiskData] = useState([
        ['t(r)1', 'Завдяки гнучкості EAV-моделі, запити до бази даних можуть бути складнішими і менш ефективними, що може призвести до зниження продуктивності системи.', true],
        ['t(r)2', 'EAV-модель може бути складнішою для розуміння та підтримки, що може збільшити час розробки, витрати на тестування та вимоги до навчання персоналу.', true],
        ['t(r)3', 'Використання EAV може призвести до непередбачуваної структури даних, що ускладнює їх аналіз та забезпечення цілісності.', true],
        ['t(r)4', 'У зв\'язку з гнучкістю схеми EAV можуть виникати обмеження щодо ефективного використання індексів, що може призвести до повільних операцій пошуку та сортування даних.', true],
        ['t(r)5', 'Використання EAV може ускладнити нормалізацію даних, що може призвести до збільшення обсягу даних та зниження ефективності їх обробки.', true],
        ['t(r)6', 'В EAV-моделі може виникнути ризик дублювання даних, оскільки одні й ті ж атрибути можуть бути повторено для кількох сутностей, що може призвести до неоднозначності та заплутаності.', true],
        ['t(r)7', 'Недостатня організація доступу до даних в EAV-схемі може призвести до проблем з безпекою, таким як незаконний доступ до конфіденційної інформації або порушення цілісності даних.', true],
        ['t(r)8', 'Складна структура даних в EAV може обмежити можливості аналізу та використання бізнес-інтелектуальних інструментів для витягування цінної інформації з даних.', true],
        ['t(r)9', 'Використання EAV може збільшити ризик помилок в коді через його складність та неоднорідність, що може призвести до недостатньої якості програмного забезпечення.', true],
        ['t(r)10', 'EAV-схема може обмежити можливості масштабування системи через збільшення обсягу даних та складність їх обробки.', true],
        ['t(r)11', 'При зростанні обсягу даних в EAV-схемі може виникнути погіршення продуктивності системи через збільшену складність запитів та обробки даних, що може призвести до зниження швидкодії та реактивності додатку.', true],
    ]);

    const [valueRiskData, setValueRiskData] = useState([
        ['c(r)1', 'Складна природа EAV-моделі може призвести до збільшення витрат на розробку, тестування та впровадження програмного забезпечення, зокрема через необхідність розробки складних запитів і багатопрошарових структур даних.', true],
        ['c(r)2', 'Використання EAV-моделі може вимагати додаткового часу та ресурсів на навчання персоналу щодо особливостей роботи з цією моделлю даних, що може призвести до збільшення витрат на навчальні курси та тренінги.', true],
        ['c(r)3', 'Складність управління даними в EAV-моделі може призвести до ризику низької якості даних через можливість дублювання, неоднозначність або відсутність контролю за цілісністю даних.', true],
        ['c(r)4', 'Складна структура даних в EAV може ускладнити аналіз та витягування корисної інформації з даних, що може призвести до зниження ефективності прийняття рішень та втрати конкурентної переваги.', true],
        ['c(r)5', 'Неправильна організація доступу до даних в EAV-схемі може призвести до ризику витоку конфіденційної інформації, що може негативно вплинути на репутацію та викликати судові позови.', true],
        ['c(r)6', 'Недостатня стійкість до помилок та непередбачуваність структури даних в EAV-схемі може призвести до ризику втрати важливих даних, що може спричинити фінансові втрати та втрату довіри клієнтів.', true],
        ['c(r)7', 'Складність структури даних в EAV може ускладнити інтеграцію з іншими системами, що може призвести до затримок у впровадженні нових функцій та погіршення взаємодії з партнерами та постачальниками.', true],
        ['c(r)8', 'Використання EAV-моделі може призвести до ризику неуспішних інновацій через складність її використання та можливість виникнення непередбачуваних проблем.', true],
        ['c(r)9', 'Недоцільне використання EAV-моделі може призвести до зниження конкурентоспроможності продукту через збільшення витрат, складність управління та недостатню адаптивність до змін на ринку.', true],
    ]);

    const [plannedRiskData, setPlannedRiskData] = useState([
        ['p(r)1', 'Складність EAV-моделі може призвести до затримок у визначенні та уточненні вимог до програмного забезпечення, що може вплинути на графік розробки.', true],
        ['p(r)2', 'Структура EAV може ускладнити вибір архітектурних рішень, що може призвести до нестабільності архітектури та затримок у впровадженні.', true],
        ['p(r)3', 'Недооцінка складності роботи з EAV-моделлю може призвести до недооцінки часу та ресурсів, необхідних для розробки програмного забезпечення.', true],
        ['p(r)4', 'Складна природа EAV-моделі може призвести до підвищення вимог до тестувальних ресурсів, що може призвести до затримок у випуску програмного забезпечення.', true],
        ['p(r)5', 'Недооцінка складності інтеграції з іншими системами може призвести до затримок у впровадженні та недоліків у функціональності.', true],
        ['p(r)6', 'Складна структура даних в EAV може збільшити ризик помилок у програмному коді, що може призвести до затримок у виправленні помилок та випуску нових версій програмного забезпечення.', true],
        ['p(r)7', 'Зміни у вимогах замовника можуть бути складнішими для реалізації через специфічну структуру EAV, що може призвести до затримок у впровадженні та підвищення вартості розробки.', true],
        ['p(r)8', 'Використання EAV-моделі може вимагати додаткових зусиль та ресурсів на навчання персоналу щодо її особливостей, що може призвести до затримок у впровадженні та підвищення витрат.', true],
        ['p(r)9', 'Персональний склад, який володіє знаннями про EAV-модель, може стати вузьким місцем, і заміна персоналу може призвести до затримок у розробці та погіршення якості продукту.', true],
        ['p(r)10', 'Складність управління та підтримки EAV-схеми може вимагати додаткових ресурсів на її підтримку та обслуговування, що може призвести до збільшення загальних витрат на програмне забезпечення.', true],
        ['p(r)11', 'Складність EAV-схеми може призвести до неефективного використання ресурсів, що може призвести до затримок у виконанні задач та збільшення загальних витрат на проект.', true],
    ]);

    const [realizationRiskData, setRealizationRiskData] = useState([
        ['m(r)1', 'Неспроможність вчасно виконувати завдання може призвести до затримок у реалізації проекту та перевищення графіку.', true],
        ['m(r)2', 'Недооцінка обсягу робіт може призвести до нестачі ресурсів та затримок у виконанні проекту.', true],
        ['m(r)3', 'Неправильне розуміння або інтерпретація вимог замовника може призвести до реалізації продукту, який не відповідає очікуванням.', true],
        ['m(r)4', 'Недоліки у комунікації з замовником можуть призвести до непорозумінь та помилок у виконанні завдань.', true],
        ['m(r)5', 'Неспроможність ефективно організовувати свій час та завдання може призвести до затримок та неефективності у виконанні проекту.', true],
        ['m(r)6', 'Недооцінка труднощів у виконанні завдань та обсягу робіт може призвести до перевантаження та затримок у виконанні проекту.', true],
        ['m(r)7', 'Непередбачувані обставини, такі як проблеми зі здоров\'ям або особисті проблеми, можуть призвести до затримок у виконанні завдань та втрати продуктивності.', true],
        ['m(r)8', 'Недостатня підтримка або можливість навчання може призвести до затримок у виконанні завдань через невпевненість у своїх навичках.', true],
        ['m(r)9', 'Втрата мотивації або інтересу до проекту може призвести до затримок у виконанні завдань та втрати продуктивності.', true],
        ['m(r)10', 'Технічні проблеми та несправності обладнання можуть призвести до затримок та втрати даних, які важливі для проекту.', true],
        ['m(r)11', 'Втрата ключової інформації або даних може призвести до затримок у виконанні завдань та потреби у відновленні або повторному створенні цих даних.', true],
        ['m(r)12', 'Недооцінка власних навичок та знань може призвести до затримок у виконанні завдань та неефективності у вирішенні проблем.', true],
        ['m(r)13', 'Неспроможність ефективно використовувати свій час може призвести до затримок у виконанні завдань та втрати продуктивності.', true],
        ['m(r)14', 'Неспроможність ефективно виявляти та управляти ризиками може призвести до непередбачених проблем та затримок у проекті.', true],
        ['m(r)15', 'Нестворення сприятливої атмосфери для роботи може призвести до втрати мотивації та затримок у виконанні завдань.', true],
        ['m(r)16', 'Проблеми зі сумісністю програмного забезпечення або інтерфейсами можуть призвести до затримок у виконанні завдань та потреби у вирішенні технічних проблем.', true],
    ]);

    const checkerChange = (dataTable, rowIndex, value) => {
        let data;
        let setter;
        console.log(value);

        switch (dataTable) {
            case 'tech':
                data = techRiskData;
                setter = setTechRiskData;
                break;
            case 'valuable':
                data = valueRiskData;
                setter = setValueRiskData;
                break;
            case 'planned':
                data = plannedRiskData;
                setter = setPlannedRiskData;
                break;
            case 'realization':
                data = realizationRiskData;
                setter = setRealizationRiskData;
                break;
            default:
                console.error("Specify the data!");
        }

        console.log(data);

        data[rowIndex][2] = value;
        setter(data);

    };

    const [costs, setCosts] = useState(1000);

    const getRandomFrom5to10 = () => Math.floor(Math.random() * (10 - 5 + 1)) + 5;

    const [expertCoeffData, setExpertCoeffData] = useState([
        ['Plural events', 'Amount', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ['Tech risks', 11, getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(),],
        ['Planned risks', 11, getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(),],
        ['Valuable risks', 9, getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(),],
        ['Risks of realization and management', 16, getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(),],
    ]);


    const [expertCostData, setExpertCostData] = useState([
        ['Plural events', 'Amount', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ['Tech risks', 11, getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(),],
        ['Planned risks', 11, getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(),],
        ['Valuable risks', 9, getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(),],
        ['Risks of realization and management', 16, getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(), getRandomFrom5to10(),],
    ]);

    return (
        <div className="App p-3">
            <h1>Hello from Serg!</h1>

            <Row>
                <Col md={6}>
                    <h3>Tech risks:</h3>
                    <RisksTable data={techRiskData}  checkChange={checkerChange} dataType={'tech'}/>
                    <h3>Planned risks:</h3>
                    <RisksTable data={plannedRiskData} checkChange={checkerChange} dataType={'planned'}/>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Costs: </Form.Label>
                        <Form.Control type="number" placeholder="1000" value={costs}
                                      onChange={e => setCosts(e.target.value)}/>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <h3>Valuable risks:</h3>
                    <RisksTable data={valueRiskData}  checkChange={checkerChange} dataType={'valuable'}/>
                    <h3>Risks of realization and management:</h3>
                    <RisksTable data={realizationRiskData}  checkChange={checkerChange} dataType={'realization'}/>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h5 className={'p-3'}>
                        Weighting coefficients of each of the experts for the probability of occurrence of risk events:
                    </h5>
                    <MultiTable data={expertCoeffData} />
                </Col>
                <Col md={6}>
                    <h5 className={'p-3'}>
                        Weighting coefficients of each of the experts for possible losses from the risk:
                    </h5>
                    <MultiTable data={expertCostData}/>
                </Col>
            </Row>
            <Row>
                <Button type={'button'} className={'btn btn-success'} style={{width: '50%', marginLeft: '25%'}}>Calculate</Button>
            </Row>



        </div>
    );
}

export default App;
