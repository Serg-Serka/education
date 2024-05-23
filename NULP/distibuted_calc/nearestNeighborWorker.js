const { parentPort, workerData } = require('worker_threads');

function nearestNeighbor(graph, startNode) {
    const nodesNumber = graph.length;
    const visited = new Array(nodesNumber).fill(false);
    let path = [startNode];
    let distance = 0;
    visited[startNode] = true;

    for (let i = 0; i < nodesNumber - 1; i++) {
        let nearest = -1;
        let minDist = Infinity;

        for (let j = 0; j < nodesNumber; j++) {
            if (!visited[j] && graph[path[i]][j] < minDist) {
                nearest = j;
                minDist = graph[path[i]][j];
            }
        }
        path.push(nearest);
        distance += minDist;
        visited[nearest] = true;
    }

    return {path, distance};
}

// Receive data from the main thread
const { graph } = workerData;

// Execute nearest neighbor algorithm
let paths = [];
let optimalDistance = Infinity;
for (let startNode = 0; startNode < graph.length; startNode++) {
    let {path, distance} = nearestNeighbor(graph, startNode);

    if (distance < optimalDistance) {
        paths = path;
        optimalDistance = distance;
    }
}

// Send the result back to the main thread
parentPort.postMessage({paths, optimalDistance});