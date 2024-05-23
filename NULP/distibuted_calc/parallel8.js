const { Worker, isMainThread } = require('worker_threads');
// Generating graph
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

let graph = generateGraph(1000, 100);


if (isMainThread) {
    let startTime = Date.now();
    let totalDistance = 0;

    const worker1 = new Worker(__dirname + '/nearestNeighborWorker.js', {
        workerData: {
            graph: graph.slice(0, 124)
        }
    });

    const worker2 = new Worker(__dirname + '/nearestNeighborWorker.js', {
        workerData: {
            graph: graph.slice(125, 249)
        }
    });
    const worker3 = new Worker(__dirname + '/nearestNeighborWorker.js', {
        workerData: {
            graph: graph.slice(250, 374)
        }
    });
    const worker4 = new Worker(__dirname + '/nearestNeighborWorker.js', {
        workerData: {
            graph: graph.slice(375, 499)
        }
    });

    const worker5 = new Worker(__dirname + '/nearestNeighborWorker.js', {
        workerData: {
            graph: graph.slice(500, 624)
        }
    });

    const worker6 = new Worker(__dirname + '/nearestNeighborWorker.js', {
        workerData: {
            graph: graph.slice(625, 749)
        }
    });
    const worker7 = new Worker(__dirname + '/nearestNeighborWorker.js', {
        workerData: {
            graph: graph.slice(750, 874)
        }
    });
    const worker8 = new Worker(__dirname + '/nearestNeighborWorker.js', {
        workerData: {
            graph: graph.slice(875, 999)
        }
    });

    worker1.on('message', ({paths, optimalDistance}) => {
        totalDistance += optimalDistance;
        console.log("Total distance: ", totalDistance);
        console.log("Execution took: ", Date.now() - startTime);
    });
    worker2.on('message', ({paths, optimalDistance}) => {
        totalDistance += optimalDistance;
        console.log("Total distance: ", totalDistance);
        console.log("Execution took: ", Date.now() - startTime);
    });
    worker3.on('message', ({paths, optimalDistance}) => {
        totalDistance += optimalDistance;
        console.log("Total distance: ", totalDistance);
        console.log("Execution took: ", Date.now() - startTime);
    });
    worker4.on('message', ({paths, optimalDistance}) => {
        totalDistance += optimalDistance;
        console.log("Total distance: ", totalDistance);
        console.log("Execution took: ", Date.now() - startTime);
    });

    worker5.on('message', ({paths, optimalDistance}) => {
        totalDistance += optimalDistance;
        console.log("Total distance: ", totalDistance);
        console.log("Execution took: ", Date.now() - startTime);
    });
    worker6.on('message', ({paths, optimalDistance}) => {
        totalDistance += optimalDistance;
        console.log("Total distance: ", totalDistance);
        console.log("Execution took: ", Date.now() - startTime);
    });
    worker7.on('message', ({paths, optimalDistance}) => {
        totalDistance += optimalDistance;
        console.log("Total distance: ", totalDistance);
        console.log("Execution took: ", Date.now() - startTime);
    });
    worker8.on('message', ({paths, optimalDistance}) => {
        totalDistance += optimalDistance;
        console.log("Total distance: ", totalDistance);
        console.log("Execution took: ", Date.now() - startTime);
    });



} else {
    console.error('This script should be run as the main script.');
}