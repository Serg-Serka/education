const { parentPort, workerData } = require('worker_threads');

function nearestNeighbor(graph, startNode) {
    // Implementation of the nearest neighbor algorithm
    // Same as the function in the previous example

    const numNodes = graph.length;
    const visited = new Array(numNodes).fill(false);
    let path = [startNode];
    visited[startNode] = true;

    for (let i = 0; i < numNodes - 1; i++) {
        let nearest = -1;
        let minDist = Infinity;
        for (let j = 0; j < numNodes; j++) {
            if (!visited[j] && graph[path[i]][j] < minDist) {
                nearest = j;
                minDist = graph[path[i]][j];
            }
        }
        path.push(nearest);
        visited[nearest] = true;
    }
    return path;
}

function calculateTotalDistance(graph, path) {
    let totalDistance = 0;
    for (let i = 0; i < path.length - 1; i++) {
        totalDistance += graph[path[i]][path[i + 1]];
    }
    // Add distance from last node back to the start node
    totalDistance += graph[path[path.length - 1]][path[0]];
    return totalDistance;
}

// Receive data from the main thread
const { graph, startNode } = workerData;

// Execute nearest neighbor algorithm
const path = nearestNeighbor(graph, startNode);
const totalDistance = calculateTotalDistance(graph, path);

// Send the result back to the main thread
parentPort.postMessage({path, totalDistance});