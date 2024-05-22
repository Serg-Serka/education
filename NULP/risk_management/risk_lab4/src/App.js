import {useState, useEffect} from "react";
import RisksTable from "./RisksTable";
import {Col, Row, Form, Button} from "react-bootstrap";
import MultiTable from "./MultiTable";
import ActionPlanTable from "./ActionPlanTable";

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

    const getRandomFrom01To05 = () => Math.random() * 0.4 + 0.1;

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

    const [probabilitiesData, setProbabilitiesData] = useState([]);
    const [costsData, setCostsData] = useState([]);

    const actions = [
        "",
        "Регулярне оновлення антивірусного програмного забезпечення.",
        "Створення бекапів баз даних на щоденній основі.",
        "Використання стандартизованих методів кодування для зменшення помилок.",
        "Проведення регулярних тестів безпеки.",
        "Планування регулярних перевірок безпеки для ідентифікації потенційних уразливостей.",
        "Регулярне навчання персоналу з питань безпеки.",
        "Впровадження двофакторної аутентифікації для збільшення безпеки доступу.",
        "Регулярне оновлення програмного забезпечення та операційної системи.",
        "Використання шифрування даних у транзиті та зберіганні.",
        "Створення автоматичних сповіщень про можливі проблеми або вторгнення.",
        "Моніторинг системних журналів для виявлення незвичайної активності.",
        "Проведення аудиту прав доступу до даних та систем.",
        "Використання сторонніх сервісів моніторингу безпеки.",
        "Встановлення меж доступу для обмеження прав доступу.",
        "Чітке документування процесів і процедур безпеки.",
        "Відділення тестового середовища від виробничого.",
        "Проведення регулярних аудитів коду для виявлення помилок.",
        "Використання найновіших технологій шифрування.",
        "Регулярне оновлення політик безпеки.",
        "Встановлення сильних паролів та їх регулярне оновлення.",
        "Відслідковування та вирішення виявлених безпекових проблем.",
        "Впровадження системи моніторингу змін для виявлення непередбачених змін.",
        "Створення плану управління змінами.",
        "Проведення регулярних тестів вразливостей.",
        "Мінімізація прав доступу до систем та даних.",
        "Використання дозволів на основі принципу найменших привілеїв.",
        "Налагодження системи моніторингу інтегрованих заходів безпеки.",
        "Проведення регулярних аудитів і відстеження виконання політик безпеки.",
        "Захист від відомих атак та вразливостей.",
        "Застосування заходів з обмеження доступу до даних та ресурсів.",
        "Підвищення обізнаності персоналу з питань безпеки.",
        "Використання позаштатних заходів безпеки, таких як резервне живлення та відновлення.",
        "Захист від фізичного доступу до обладнання та інфраструктури.",
        "Регулярне навчання персоналу процедурам безпеки та поведінці в разі кібератак.",
        "Створення запасних планів для негайного реагування на кібератаки або інші інциденти.",
        "Використання систем інтелектуального виявлення загроз для виявлення аномальної активності.",
        "Проведення регулярних тренувань з імітацією кібератак для підвищення готовності до інцидентів.",
        "Проведення регулярних аудитів забезпечення якості коду для виявлення потенційних помилок та вразливостей.",
        "Впровадження системи моніторингу та аналізу використання ресурсів для виявлення аномальної активності, яка може свідчити про потенційні загрози.",
        "Створення та підтримка документації щодо процедур реагування на інциденти безпеки для швидкого та ефективного відновлення після атак або інших негативних подій.",
        "Проведення регулярних навчань та тренувань персоналу щодо процедур безпеки, включаючи дії в разі кібератак, пожежі, природних лих або інших надзвичайних ситуацій."
    ];

    const calculate = () => {
        let probabilities = [
            ["Plural events", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Sum", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Sum", "Level"],
        ];

        techRiskData.map(row => {
            if (row[2] === true) {
                let last;
                probabilities.push([
                    row[1], getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), last = getRandomFrom01To05(),
                    last <= 0.3 ? "Low" : last >= 0.45 ? "High" : "Average"
                ]);
            }
        });
        valueRiskData.map(row => {
            if (row[2] === true) {
                let last;
                probabilities.push([
                    row[1], getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), last = getRandomFrom01To05(),
                    last <= 0.3 ? "Low" : last >= 0.45 ? "High" : "Average"
                ]);
            }
        });
        plannedRiskData.map(row => {
            if (row[2] === true) {
                let last;
                probabilities.push([
                    row[1], getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), last = getRandomFrom01To05(),
                    last <= 0.3 ? "Low" : last >= 0.45 ? "High" : "Average"
                ]);
            }
        });
        realizationRiskData.map(row => {
            if (row[2] === true) {
                let last;
                probabilities.push([
                    row[1], getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), last = getRandomFrom01To05(),
                    last <= 0.3 ? "Low" : last >= 0.45 ? "High" : "Average"
                ]);
            }
        });

        setProbabilitiesData(probabilities);

        let costs = [
            ["Plural events", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Sum", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Additional cost", "Final cost", "Level"],
        ];

        techRiskData.map(row => {
            if (row[2] === true) {
                let last;
                costs.push([
                    row[1], getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), last = getRandomFrom01To05() * 10, getRandomFrom01To05() * 100,
                    last <= 3 ? "Low" : last >= 45 ? "High" : "Average"
                ]);
            }
        });
        valueRiskData.map(row => {
            if (row[2] === true) {
                let last;
                costs.push([
                    row[1], getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), last = getRandomFrom01To05() * 10, getRandomFrom01To05() * 100,
                    last <= 3 ? "Low" : last >= 45 ? "High" : "Average"
                ]);
            }
        });
        plannedRiskData.map(row => {
            if (row[2] === true) {
                let last;
                costs.push([
                    row[1], getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), last = getRandomFrom01To05() * 10, getRandomFrom01To05() * 100,
                    last <= 3 ? "Low" : last >= 45 ? "High" : "Average"
                ]);
            }
        });
        realizationRiskData.map(row => {
            if (row[2] === true) {
                let last;
                costs.push([
                    row[1], getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(), getRandomFrom01To05(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(), getRandomFrom01To05() * getRandomFrom5to10(),
                    getRandomFrom01To05() * getRandomFrom5to10(), last = getRandomFrom01To05() * 10, getRandomFrom01To05() * 100,
                    last <= 3 ? "Low" : last >= 45 ? "High" : "Average"
                ]);
            }
        });

        setCostsData(costs);
    };


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
                <Button
                    type={'button'}
                    className={'btn btn-success'}
                    style={{width: '50%', marginLeft: '25%'}}
                    onClick={calculate}
                >
                    Calculate
                </Button>
            </Row>
            <Row className={'p-3'}>
                <h3>Probabilities data:</h3>
                <MultiTable data={probabilitiesData} />
                <h3>Costs data:</h3>
                <MultiTable data={costsData} />
                <h3>Monitoring and risk management:</h3>
                <ActionPlanTable actions={actions} costs={costsData.slice(1)} probabilities={probabilitiesData.slice(1)} />
            </Row>
        </div>
    );
}

export default App;
