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

    // let workersCompleted = 0;
    // for (let i = 1; i <= 4; i++) {
    //     const worker = new Worker(__dirname + '/nearestNeighborWorker.js', {
    //         workerData: {
    //             graph: graph.slice(i * 250, ((i + 1) * 250) - 1)
    //         }
    //     });
    //
    //     worker.on('message', ({ optimalDistance }) => {
    //         totalDistance += optimalDistance;
    //         workersCompleted++;
    //
    //         // If all workers have finished, display total distance
    //         if (workersCompleted === 4) {
    //             console.log("Total Distance:", totalDistance);
    //         }
    //     });
    // }


    const worker1 = new Worker(__dirname + '/nearestNeighborWorker.js', {
        workerData: {
            graph: graph.slice(0, 249)
        }
    });

    const worker2 = new Worker(__dirname + '/nearestNeighborWorker.js', {
        workerData: {
            graph: graph.slice(250, 499)
        }
    });
    const worker3 = new Worker(__dirname + '/nearestNeighborWorker.js', {
        workerData: {
            graph: graph.slice(500, 749)
        }
    });
    const worker4 = new Worker(__dirname + '/nearestNeighborWorker.js', {
        workerData: {
            graph: graph.slice(750, 999)
        }
    });

    worker1.on('message', ({paths, optimalDistance}) => {
        totalDistance += optimalDistance;
        // console.log("Part 1 distance:", optimalDistance);
        console.log("Total distance: ", totalDistance);
        console.log("Execution took: ", Date.now() - startTime);
    });
    worker2.on('message', ({paths, optimalDistance}) => {
        totalDistance += optimalDistance;
        // console.log("Part 2 distance:", optimalDistance);
        console.log("Total distance: ", totalDistance);
        console.log("Execution took: ", Date.now() - startTime);
    });
    worker3.on('message', ({paths, optimalDistance}) => {
        totalDistance += optimalDistance;
        // console.log("Part 3 distance:", optimalDistance);
        console.log("Total distance: ", totalDistance);
        console.log("Execution took: ", Date.now() - startTime);
    });
    worker4.on('message', ({paths, optimalDistance}) => {
        totalDistance += optimalDistance;
        // console.log("Part 4 distance:", optimalDistance);
        console.log("Total distance: ", totalDistance);
        console.log("Execution took: ", Date.now() - startTime);
    });


} else {
    console.error('This script should be run as the main script.');
}