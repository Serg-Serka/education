const { Worker, isMainThread } = require('worker_threads');

function generateGraph(numNodes, maxEdgeLength) {
    const graph = Array.from({ length: numNodes }, () =>
        Array.from({ length: numNodes }, () => 0));

    for (let i = 0; i < numNodes; i++) {
        for (let j = i + 1; j < numNodes; j++) {
            const edgeLength = Math.floor(Math.random() * maxEdgeLength) + 1;
            graph[i][j] = edgeLength;
            graph[j][i] = edgeLength; // Undirected graph, so set both directions
        }
    }

    return graph;
}

if (isMainThread) {
    const graph = generateGraph(1000, 1500);

    let startTime = Date.now();
    // const graph = [
    //     [0, 40, 40, 40],
    //     [10, 0, 35, 25],
    //     [15, 35, 0, 30],
    //     [20, 25, 30, 0]
    // ];
    const numNodes = graph.length;
    const maxWorkers = 4; // Maximum number of concurrent worker threads

    let currentStartNodeIndex = 0; // Index of the next starting node to assign
    let numWorkersRunning = 0; // Number of worker threads currently running

    // Function to start a worker thread
    function startWorker(startNode) {
        const worker = new Worker(__dirname + '/nearestNeighborWorker.js', {
            workerData: {
                graph: graph.slice(),
                startNode
            }
        });

        // Handle result from the worker thread
        worker.on('message', ({path, totalDistance}) => {
            // console.log(`Finished calculation for start node ${startNode}:`, totalDistance);
            numWorkersRunning--;

            // Start calculation for the next start node if available
            if (currentStartNodeIndex < numNodes) {
                startWorker(currentStartNodeIndex++);
            } else if (numWorkersRunning === 0) {
                console.log(Date.now() - startTime);
                console.log("All calculations finished.");
            }
        });

        numWorkersRunning++;
    }

    // Start initial worker threads
    for (let i = 0; i < Math.min(maxWorkers, numNodes); i++) {
        // const startTime = Date.now();
        startWorker(currentStartNodeIndex++);
    }

    // Aggregate results from worker threads
    // const paths = [];
    // let minDistance = Infinity;
    // let workersCompleted = 0;
    // for (let i = 0; i < numWorkers; i++) {
    //     workers[i].on('message', ({path, totalDistance}) => {
    //         if (totalDistance <= minDistance) {
    //             minDistance = totalDistance;
    //             paths.push(path);
    //         }
    //         workersCompleted++;
    //         if (workersCompleted === numWorkers) {
    //             // All workers have finished
    //             // Process paths here
    //             const time = Date.now() - startTime;
    //             console.log("Optimal Paths:", paths);
    //             console.log("The length of path:", totalDistance);
    //             console.log("Time spent: ", time)
    //         }
    //     });
    // }
} else {
    console.error('This script should be run as the main script.');
}