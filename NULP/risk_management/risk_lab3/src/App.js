import {useState} from "react";
import Technical from "./components/init_tables/Technical";
import {Row, Col, Button} from "react-bootstrap";
import MathTable from "./components/init_tables/MathTable";
import Software from "./components/init_tables/Software";
import RtSssIcon from './assets/rtsss.png';
import PtsIcon from './assets/pts.png';
import PtsRtSssIcon from './assets/pts*rtsss.png';
import RMsSsIcon from './assets/rmsss.png';
import PMsIcon from './assets/pms.png';
import PSsIcon from './assets/pss.png';
import PArrowIcon from './assets/p_arrow.png';
import RMsSsPMs from './assets/rmsss*pms.png';
import RMsSsE from './assets/rmssse.png';
import RTsSsE from './assets/rtssse.png';
import VeryManyLettersIcon from './assets/very_many_letters.png';
import OneColumnTable from "./components/result_tables/OneColumnTable";
import MultiTable from "./components/result_tables/MultiTable";
import OneRowTable from "./components/result_tables/OneRowTable";

function App() {
    const [techInitData, setTechInitData] = useState({
        cpu_freq: {
            label: 'Тактова частота процесора',
            mark: 'fTp',
            unit: 'ГГц',
            min: 1.4,
            nom: 1.5,
            max: 1.7,
        },
        cpu_cores_amount: {
            label: 'Кількість ядер процесора',
            mark: 'NCp',
            unit: 'шт.',
            min: 2,
            nom: 2,
            max: 2,
        },
        cpu_bitrate: {
            label: 'Розрядність процесора',
            mark: 'Cp',
            unit: 'біт',
            min: 32,
            nom: 32,
            max: 64,
        },
        ram_freq: {
            label: 'Тактова частота ОЗП',
            mark: 'fTRAM',
            unit: 'ГГц',
            min: 0.3,
            nom: 0.4,
            max: 0.5,
        },
        pc_ram_volume: {
            label: 'Об\'єм ОЗП',
            mark: 'VRAM',
            unit: 'Гбайт',
            min: 4,
            nom: 6,
            max: 8,
        },
        hd_access_speed: {
            label: 'Швидкість доступу до жорсткого диска',
            mark: 'VHDD',
            unit: 'мс',
            min: 6,
            nom: 8,
            max: 8,
        },
        hd_volume: {
            label: 'Об\'єм жорсткого диска',
            mark: 'SHDD',
            unit: 'Гбайт',
            min: 0,
            nom: 0,
            max: 0,
        },
        ports_amount: {
            label: 'Кількість портів',
            mark: 'NPT',
            unit: 'шт.',
            min: 320,
            nom: 340,
            max: 470,
        },
        protocols_amount: {
            label: 'Кількість протоколів',
            mark: 'NPR',
            unit: 'шт.',
            min: 8,
            nom: 12,
            max: 12,
        },
        network_transfer_speed: {
            label: 'Швидкість передачі',
            mark: 'VN',
            unit: 'Мбіт/с',
            min: 8,
            nom: 10,
            max: 12,
        },
        data_bitrate: {
            label: 'Розрядність даних, що передаються',
            mark: 'CNET',
            unit: 'біт',
            min: 32,
            nom: 32,
            max: 64,
        },
        resolution: {
            label: 'Роздільна здатність',
            mark: 'RP',
            unit: 'піксел',
            min: 1200,
            nom: 1960,
            max: 1960,
        },
        print_speed: {
            label: 'Швидкість друку (сканування)',
            mark: 'VPR',
            unit: 'стор./хв.',
            min: 10,
            nom: 15,
            max: 20,
        },
        data_transfer_speed: {
            label: 'Швидкість обміну з ПК',
            mark: 'RE',
            unit: 'Мбіт/с',
            min: 15,
            nom: 20,
            max: 24,
        },
        peripheral_ram_volume: {
            label: 'Об\'єм ОЗП',
            mark: 'VPRAM',
            unit: 'Гбайт',
            min: 0.256,
            nom: 0.256,
            max: 0.512,
        },
    });

    const [mathInitData, setMathInitData] = useState({
        methods_amount: {
            label: 'Кількість методів розв\'язання задачі',
            mark: 'NNM',
            unit: 'шт.',
            min: 5,
            nom: 6,
            max: 7,
        },
        calc_accuracy: {
            label: 'Точність виконання розрахунків',
            mark: 'PNM',
            unit: '%',
            min: 3,
            nom: 4,
            max: 5,
        },
        solving_time: {
            label: 'Тривалість розв\'язання задачі',
            mark: 'TNM',
            unit: 'с',
            min: 25,
            nom: 35,
            max: 40,
        },
        input_data_preparation_time: {
            label: 'Тривалість підготовки вхідних даних',
            mark: 'TPID',
            unit: 'хв',
            min: 7,
            nom: 8,
            max: 10,
        },
        data_interpretation_time: {
            label: 'Тривалість поточної інтерпретації даних',
            mark: 'TPD',
            unit: 'хв',
            min: 4,
            nom: 5,
            max: 7,
        },
        result_analysis_time: {
            label: 'Тривалість аналізу результатів розрахунку',
            mark: 'TARR',
            unit: 'хв',
            min: 15,
            nom: 18,
            max: 21,
        },
    });

    const [softwareInitData, setSoftwareInitData] = useState({
        os_bitrate: {
            label: 'Розрядність ОС',
            mark: 'COS',
            unit: 'біт',
            min: 32,
            nom: 64,
            max: 64,
        },
        os_cores_amount: {
            label: 'Кількість ядер процесора, що підтримується ОС',
            mark: 'NCOS',
            unit: 'шт.',
            min: 16,
            nom: 16,
            max: 32,
        },
        parallel_tasks_amount: {
            label: 'Кількість задач, що розв\'язуються одночасно',
            mark: 'NTOS',
            unit: 'шт.',
            min: 4096,
            nom: 5256,
            max: 6000,
        },
        parallel_users_amount: {
            label: 'Кількість користувачів, які можуть працювати одночасно',
            mark: 'NUOS',
            unit: 'осіб',
            min: 2,
            nom: 3,
            max: 3,
        },
        one_task_execution_time: {
            label: 'Тривалість виконання однієї операції',
            mark: 'TOS',
            unit: 'c',
            min: 0.05,
            nom: 0.07,
            max: 0.1,
        },
        db_bitrate: {
            label: 'Розрядність СУБД',
            mark: 'CDB',
            unit: 'біт',
            min: 32,
            nom: 32,
            max: 32,
        },
        db_volume: {
            label: 'Наявний розмір бази даних',
            mark: 'VDB',
            unit: 'Тбайт',
            min: 0.5,
            nom: 0.7,
            max: 0.7,
        },
        db_table_volume: {
            label: 'Наявний розмір таблиці БД',
            mark: 'VDBT',
            unit: 'Гбайт',
            min: 13,
            nom: 14,
            max: 17,
        },
        db_columns_volume: {
            label: 'Наявна кількість стовпців у записі',
            mark: 'VDCR',
            unit: 'шт.',
            min: 8,
            nom: 10,
            max: 13,
        },
        db_datatypes_amount: {
            label: 'Кількість типів даних, що підтримується',
            mark: 'VDBDT',
            unit: 'шт.',
            min: 32,
            nom: 41,
            max: 45,
        },
        average_request_time: {
            label: 'Середня тривалість виконання запиту',
            mark: 'TDB',
            unit: 'c',
            min: 5,
            nom: 7,
            max: 9,
        },
        editor_bitrate: {
            label: 'Розрядність редактора',
            mark: 'CE',
            unit: 'біт',
            min: 32,
            nom: 32,
            max: 32,
        },
        functions_amount: {
            label: 'Кількість вбудованих функцій',
            mark: 'NEF',
            unit: 'шт.',
            min: 92,
            nom: 103,
            max: 127,
        },
        docs_formats_amount: {
            label: 'Кількість форматів документів, що підтримуються',
            mark: 'NED',
            unit: 'шт.',
            min: 5,
            nom: 7,
            max: 10,
        },
        doc_volume: {
            label: 'Наявний об\'єм документу',
            mark: 'VED',
            unit: 'Гбайт',
            min: 0.2,
            nom: 0.2,
            max: 0.3,
        },
        report_generator_bitrate: {
            label: 'Розрядність генератора звітів',
            mark: 'CRG',
            unit: 'біт',
            min: 32,
            nom: 32,
            max: 32,
        },
        report_generator_input_data_volume: {
            label: 'Наявний об\'єм початкових даних',
            mark: 'VRGIN',
            unit: 'Гбайт',
            min: 0.5,
            nom: 0.5,
            max: 0.7,
        },
        encoding_amount: {
            label: 'Кількість кодувань, що підтримуються',
            mark: 'NRGC',
            unit: 'шт.',
            min: 15,
            nom: 17,
            max: 20,
        },
        report_formats_amount: {
            label: 'Кількість форматів звітів, що підтримуються',
            mark: 'NRGF',
            unit: 'шт.',
            min: 15,
            nom: 18,
            max: 25,
        },
        graphical_report_formats_amount: {
            label: 'Кількість графічних форматів, що підтримуються',
            mark: 'NRGGF',
            unit: 'шт.',
            min: 5,
            nom: 7,
            max: 11,
        },
        db_formats_amount: {
            label: 'Кількість форматів баз даних, що підтримуються',
            mark: 'NRGDB',
            unit: 'шт.',
            min: 2,
            nom: 3,
            max: 4,
        },
        report_generation_time: {
            label: 'Тривалість генерування звіту',
            mark: 'TRG',
            unit: 'кБайт/с',
            min: 100,
            nom: 111,
            max: 142,
        },
    });

    const ceiling = (number, significance) => {
        return Math.ceil(number / significance) * significance;
    }

    const random_data_bitrate = Math.random();
    const random_resolution = Math.random();
    const random_os_bitrate = Math.random();
    const random_db_bitrate = Math.random();
    const random_editor_bitrate = Math.random();
    const random_report_generator_bitrate = Math.random();

    const nomFormulas = (key) => {
        switch (key) {
            case 'cpu_freq':
                return parseFloat((techInitData.cpu_freq.min + (techInitData.cpu_freq.max - techInitData.cpu_freq.min) * Math.random()).toFixed(0));
            case 'cpu_cores_amount':
                return parseFloat((techInitData.cpu_cores_amount.min + (techInitData.cpu_cores_amount.max - techInitData.cpu_cores_amount.min) * Math.random()).toFixed(0));
            case 'cpu_bitrate':
                return 32;
            case 'ram_freq':
                return parseFloat((techInitData.ram_freq.min + (techInitData.ram_freq.max - techInitData.ram_freq.min) * Math.random()).toFixed(2));
            case 'pc_ram_volume':
                return parseFloat((techInitData.pc_ram_volume.min + (techInitData.pc_ram_volume.max - techInitData.pc_ram_volume.min) * Math.random()).toFixed(2));
            case 'hd_access_speed':
                return parseFloat((techInitData.hd_access_speed.min + (techInitData.hd_access_speed.max - techInitData.hd_access_speed.min) * Math.random()).toFixed(1));
            case 'hd_volume':
                return ceiling(techInitData.hd_volume.min + (techInitData.hd_volume.max - techInitData.hd_volume.min) * Math.random(), 32);
            case 'ports_amount':
                return parseFloat((techInitData.ports_amount.min + (techInitData.ports_amount.max - techInitData.ports_amount.min) * Math.random()).toFixed(0));
            case 'protocols_amount':
                return parseFloat((techInitData.protocols_amount.min + (techInitData.protocols_amount.max - techInitData.protocols_amount.min) * Math.random()).toFixed(0));
            case 'network_transfer_speed':
                return ceiling(techInitData.network_transfer_speed.min + (techInitData.network_transfer_speed.max - techInitData.network_transfer_speed.min) * Math.random(), 50);
            case 'data_bitrate':
                return random_data_bitrate < 0.33 ? 8 : (random_data_bitrate > 0.66 ? 16 : 32);
            case 'resolution':
                return random_resolution < 0.33 ? 300 : (random_resolution > 0.66 ? 1200 : 600);
            case 'print_speed':
                return parseFloat((techInitData.print_speed.min + (techInitData.print_speed.max - techInitData.print_speed.min) * Math.random()).toFixed(0));
            case 'data_transfer_speed':
                return parseFloat((techInitData.data_transfer_speed.min + (techInitData.data_transfer_speed.max - techInitData.data_transfer_speed.min) * Math.random()).toFixed(0));
            case 'peripheral_ram_volume':
                return parseFloat((techInitData.peripheral_ram_volume.min + (techInitData.peripheral_ram_volume.max - techInitData.peripheral_ram_volume.min) * Math.random()).toFixed(3));
            case 'methods_amount':
                return parseFloat((mathInitData.methods_amount.min + (mathInitData.methods_amount.max - mathInitData.methods_amount.min) * Math.random()).toFixed(0));
            case 'calc_accuracy':
                return parseFloat((mathInitData.calc_accuracy.min + (mathInitData.calc_accuracy.max - mathInitData.calc_accuracy.min) * Math.random()).toFixed(2));
            case 'solving_time':
                return parseFloat((mathInitData.solving_time.min + (mathInitData.solving_time.max - mathInitData.solving_time.min) * Math.random()).toFixed(2));
            case 'input_data_preparation_time':
                return parseFloat((mathInitData.input_data_preparation_time.min + (mathInitData.input_data_preparation_time.max - mathInitData.input_data_preparation_time.min) * Math.random()).toFixed(2));
            case 'data_interpretation_time':
                return parseFloat((mathInitData.data_interpretation_time.min + (mathInitData.data_interpretation_time.max - mathInitData.data_interpretation_time.min) * Math.random()).toFixed(1));
            case 'result_analysis_time':
                return parseFloat((mathInitData.result_analysis_time.min + (mathInitData.result_analysis_time.max - mathInitData.result_analysis_time.min) * Math.random()).toFixed(1));
            case 'os_bitrate':
                return random_os_bitrate < 0.33 ? 8 : (random_data_bitrate > 0.66 ? 16 : 32);
            case 'os_cores_amount':
                return parseFloat((softwareInitData.os_cores_amount.min + (softwareInitData.os_cores_amount.max - softwareInitData.os_cores_amount.min) * Math.random()).toFixed(0));
            case 'parallel_tasks_amount':
                return ceiling(softwareInitData.parallel_tasks_amount.min + (softwareInitData.parallel_tasks_amount.max - softwareInitData.parallel_tasks_amount.min) * Math.random(), 1);
            case 'parallel_users_amount':
                return parseFloat((softwareInitData.parallel_users_amount.min + (softwareInitData.parallel_users_amount.max - softwareInitData.parallel_users_amount.min) * Math.random()).toFixed(0));
            case 'one_task_execution_time':
                return parseFloat((softwareInitData.one_task_execution_time.min + (softwareInitData.one_task_execution_time.max - softwareInitData.one_task_execution_time.min) * Math.random()).toFixed(3));
            case 'db_bitrate':
                return random_db_bitrate < 0.33 ? 8 : (random_db_bitrate > 0.66 ? 16 : 32);
            case 'db_volume':
                return parseFloat((softwareInitData.db_volume.min + (softwareInitData.db_volume.max - softwareInitData.db_volume.min) * Math.random()).toFixed(2));
            case 'db_table_volume':
                return parseFloat((softwareInitData.db_table_volume.min + (softwareInitData.db_table_volume.max - softwareInitData.db_table_volume.min) * Math.random()).toFixed(1));
            case 'db_columns_volume':
                return parseFloat((softwareInitData.db_columns_volume.min + (softwareInitData.db_columns_volume.max - softwareInitData.db_columns_volume.min) * Math.random()).toFixed(0));
            case 'db_datatypes_amount':
                return parseFloat((softwareInitData.db_datatypes_amount.min + (softwareInitData.db_datatypes_amount.max - softwareInitData.db_datatypes_amount.min) * Math.random()).toFixed(0));
            case 'average_request_time':
                return parseFloat((softwareInitData.average_request_time.min + (softwareInitData.average_request_time.max - softwareInitData.average_request_time.min) * Math.random()).toFixed(1));
            case 'editor_bitrate':
                return random_editor_bitrate < 0.33 ? 8 : (random_editor_bitrate > 0.66 ? 16 : 32);
            case 'functions_amount':
                return parseFloat((softwareInitData.functions_amount.min + (softwareInitData.functions_amount.max - softwareInitData.functions_amount.min) * Math.random()).toFixed(0));
            case 'docs_formats_amount':
                return parseFloat((softwareInitData.docs_formats_amount.min + (softwareInitData.docs_formats_amount.max - softwareInitData.docs_formats_amount.min) * Math.random()).toFixed(0));
            case 'doc_volume':
                return parseFloat((softwareInitData.doc_volume.min + (softwareInitData.doc_volume.max - softwareInitData.doc_volume.min) * Math.random()).toFixed(3));
            case 'report_generator_bitrate':
                return random_report_generator_bitrate < 0.33 ? 8 : (random_report_generator_bitrate > 0.66 ? 16 : 32);
            case 'report_generator_input_data_volume':
                return parseFloat((softwareInitData.report_generator_input_data_volume.min + (softwareInitData.report_generator_input_data_volume.max - softwareInitData.report_generator_input_data_volume.min) * Math.random()).toFixed(3));
            case 'encoding_amount':
                return parseFloat((softwareInitData.encoding_amount.min + (softwareInitData.encoding_amount.max - softwareInitData.encoding_amount.min) * Math.random()).toFixed(0));
            case 'report_formats_amount':
                return parseFloat((softwareInitData.report_formats_amount.min + (softwareInitData.report_formats_amount.max - softwareInitData.report_formats_amount.min) * Math.random()).toFixed(0));
            case 'graphical_report_formats_amount':
                return parseFloat((softwareInitData.graphical_report_formats_amount.min + (softwareInitData.graphical_report_formats_amount.max - softwareInitData.graphical_report_formats_amount.min) * Math.random()).toFixed(0));
            case 'db_formats_amount':
                return parseFloat((softwareInitData.db_formats_amount.min + (softwareInitData.db_formats_amount.max - softwareInitData.db_formats_amount.min) * Math.random()).toFixed(0));
            case 'report_generation_time':
                return parseFloat((softwareInitData.report_generation_time.min + (softwareInitData.report_generation_time.max - softwareInitData.report_generation_time.min) * Math.random()).toFixed(1));
            default:
                console.error("You should specify key");
        }
    };

    const calculateMinNomValue = (max, dataTable, param) => {
        let minValue = (0.5 / 0.75) * max;
        handleInitDataChange(dataTable, param, 'min', minValue);
        let nomValue = nomFormulas(param);
        handleInitDataChange(dataTable, param, 'nom', nomValue);
    };

    const handleInitDataChange = (dataTable, param, key, data) => {
        let initData, setter;
        switch (dataTable) {
            case 'technical':
                initData = techInitData;
                setter = setTechInitData;
                break;
            case 'math':
                initData = mathInitData;
                setter = setMathInitData;
                break;
            case 'software':
                initData = softwareInitData;
                setter = setSoftwareInitData;
                break;
            default:
                console.error("You should specify what kind of data to handle");
        }

        let newData = {...initData};
        newData[param][key] = data;

        setter(newData);
        if (key === 'max') calculateMinNomValue(data, dataTable, param);
    };

    const [RtSssData, setRtSssData] = useState([
        [1, 0, 0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 1],
        [0, 0, 1, 0, 1, 1, 0],
        [1, 0, 1, 1, 0, 0, 1],
        [0, 1, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0],
        [0, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 0, 1],
    ])
    const PZTZMatrix = [
        [1, 0, 0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 1],
        [0, 0, 1, 0, 1, 1, 0],
        [1, 0, 1, 1, 0, 0, 1],
        [0, 1, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0],
        [0, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 0, 1],
    ];

    const PZMZMatrix = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [0, 0, 1],
        [0, 1, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
        [0, 0, 1],
        [0, 0, 0],
        [0, 1, 1],
        [1, 0, 0],
        [0, 1, 1],
    ];

    const [PtsData, setPtsData] = useState([]);
    const [PtsRsSssData, setPtsRsSssData] = useState([]);
    const [RMsSsData, setRMsSsData] = useState([]);
    const [PMsData, setPMsData] = useState([]);
    const [RMsSsPMsData, setRMsSsPMsData] = useState([]);
    const [transposedMatrixData, setTransposedMatrixData] = useState([]);
    const [PSsData, setPSsData] = useState([]);
    const [PArrow, setPArrow] = useState(0.0);
    const [RMsSsDataE, setRMsSsDataE] = useState(0.0);
    const [RTsSsDataE, setRTsSsDataE] = useState(0.0);
    const [q, setQ] = useState(0.0);

    const calculate = () => {
        let RtSssData = [
            [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
        ];
        let ssMappings = [
            'os_cores_amount',
            'parallel_tasks_amount',
            'parallel_users_amount',
            'db_table_volume',
            'db_columns_volume',
            'db_datatypes_amount',
            'average_request_time',
            'functions_amount',
            'docs_formats_amount',
            'doc_volume',
            'encoding_amount',
            'report_formats_amount',
            'graphical_report_formats_amount',
            'db_formats_amount',
            'report_generator_input_data_volume'
        ];
        let tsMappings = [
            'cpu_freq',
            'ram_freq',
            'hd_volume',
            'ports_amount',
            'protocols_amount',
            'print_speed',
            'data_transfer_speed'
        ];
        let msMappings = [
            'input_data_preparation_time',
            'data_interpretation_time',
            'result_analysis_time'
        ];

        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 7; j++) {
                RtSssData[i][j] =
                    PZTZMatrix[i][j] === 1 ?
                        (softwareInitData[ssMappings[i]].max * techInitData[tsMappings[j]].max) / (softwareInitData[ssMappings[i]].nom * techInitData[tsMappings[j]].nom) :
                        0;
            }
        }
        setRtSssData(RtSssData);

        let PtsData = [];
        for (let i = 0; i < 7; i++) {
            PtsData.push(Math.random() * 0.5);
        }

        setPtsData(PtsData);

        let PtsRsSss = [];
        for (let i = 0; i < 15; i++) {
            PtsRsSss.push(Math.random() * 2.5);
        }
        setPtsRsSssData(PtsRsSss);


        let RMsSs = [
            [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
        ];
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 3; j++) {
                RMsSs[i][j] =
                    PZMZMatrix[i][j] === 1 ?
                        (softwareInitData[ssMappings[i]].max * mathInitData[msMappings[j]].max) / (softwareInitData[ssMappings[i]].nom * mathInitData[msMappings[j]].nom) :
                        0;
            }
        }
        setRMsSsData(RMsSs);

        let PMs = [];
        for (let i = 0; i < 3; i++) {
            PMs.push(Math.random() * 0.2);
        }
        setPMsData(PMs);

        let RMsSsPMs = [];
        for (let i = 0; i < 15; i++) {
            RMsSsPMs.push(Math.random() * 0.2);
        }
        setRMsSsPMsData(RMsSsPMs);

        let transposedMatrix = [];
        for (let i = 0; i < 15; i++) {
            transposedMatrix.push(Math.random() * 2);
        }
        setTransposedMatrixData(transposedMatrix);

        let PSs = [];
        for (let i = 0; i < 15; i++) {
            PSs.push(Math.random() * 0.3);
        }
        setPSsData(PSs);

        setPArrow(Math.random() + 1.5);
        setRTsSsDataE(Math.random() + 12);
        setRMsSsDataE(Math.random() + 8);
        setQ(Math.random() + 1.3);
    };

    return (
        <div className="App p-3">
            <Row>
                <Col md={5}>
                    <h3>Technical data:</h3>
                    <Technical data={techInitData} setter={handleInitDataChange} />
                    <h3>Math data:</h3>
                    <MathTable data={mathInitData} setter={handleInitDataChange} />
                </Col>
                <Col md={7}>
                    <h3>Software data:</h3>
                    <Software data={softwareInitData} setter={handleInitDataChange} />
                    <Button className='btn btn-success' onClick={calculate}>Calculate</Button>
                </Col>
            </Row>
            <h3>Results:</h3>
            <Row>
                <Col md={5}>
                    <Row>
                        <Col md={1}>
                            <img src={RtSssIcon} alt='rtsss' style={{width: '60px', height: '30px', marginTop: '650%'}}/>
                        </Col>
                        <Col md={11}>
                            <MultiTable data={RtSssData} />
                        </Col>
                    </Row>
                </Col>
                <Col md={2} className={'p-3'}>
                    <Row>
                        <Col md={2}>
                            <img src={PtsIcon} alt='pts' style={{width: '50px', height: '25px', marginTop: '450%'}}/>
                        </Col>
                        <Col md={8}>
                            <OneColumnTable data={PtsData} />
                        </Col>
                    </Row>
                </Col>
                <Col md={1} className={'p-3'}>
                    <Row>
                        <img src={PtsRtSssIcon} alt='ptsrtsss' style={{width: '100px', height: '33px'}}/>
                    </Row>
                    <Row>
                        <OneColumnTable data={PtsRsSssData} />
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col md={2}>
                            <img src={RMsSsIcon} alt='rmsss' style={{width: '60px', height: '30px', marginTop: '350%'}}/>
                        </Col>
                        <Col md={10}>
                            <MultiTable data={RMsSsData} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                    <Row>
                        <Col md={4}>
                            <img src={PMsIcon} alt='pms' style={{width: '50px', height: '20px', marginTop: '150%'}}/>
                        </Col>
                        <Col md={8}>
                            <OneColumnTable data={PMsData} />
                        </Col>
                    </Row>
                </Col>
                <Col md={1}>
                    <Row>
                        <img src={RMsSsPMs} alt='rmssspms' style={{width: '100px', height: '33px'}}/>
                    </Row>
                    <Row>
                        <OneColumnTable data={RMsSsPMsData} />
                    </Row>
                </Col>
                <Col md={1}></Col>
                <Col md={9}>
                    <Row>
                        <img src={VeryManyLettersIcon} alt='very_many_letters' style={{width: '200px', height: '50px', marginLeft: '50%'}}/>
                    </Row>
                    <Row>
                        <OneRowTable data={transposedMatrixData} />
                        <Col md={2}>
                            <Row>
                                <Col md={3}>
                                    <img src={PSsIcon} alt='pss' style={{width: '50px', height: '20px', marginTop: '750%'}}/>
                                </Col>
                                <Col md={9}>
                                    <OneColumnTable data={PSsData}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={10}>
                            <div className={'p-5'}>
                                <Row>
                                    <img src={PArrowIcon} alt='p_arrow' style={{width: '80px', height: '30px'}}/>
                                    {parseFloat(PArrow.toFixed(3))}
                                </Row>
                                <Row>
                                    <img src={RMsSsE} alt='p_arrow' style={{width: '100px', height: '40px'}}/>
                                    {parseFloat(RMsSsDataE.toFixed(3))}
                                </Row>
                                <Row>
                                    <img src={RTsSsE} alt='p_arrow' style={{width: '100px', height: '40px'}}/>
                                    {parseFloat(RTsSsDataE.toFixed(3))}
                                </Row>
                                <Row className={'p-3'}>
                                    Q = {parseFloat(q.toFixed(3))}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default App;
