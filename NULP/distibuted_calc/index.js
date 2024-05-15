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

// Nearest Neighbor Algorithm
function nearestNeighbor(graph, startNode) {
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

// Calculate total distance
function calculateTotalDistance(graph, path) {
    let totalDistance = 0;
    for (let i = 0; i < path.length - 1; i++) {
        totalDistance += graph[path[i]][path[i + 1]];
    }
    // Add distance from last node back to the start node
    totalDistance += graph[path[path.length - 1]][path[0]];
    return totalDistance;
}

// Example usage
const graph = generateGraph(100, 100);
const startTime = Date.now();
let paths = [];
let minDistance = Infinity;

for (let startNode = 0; startNode < graph.length; startNode++) {
    let path = nearestNeighbor(graph, startNode);
    let totalDistance = calculateTotalDistance(graph, path);

    if (totalDistance < minDistance) {
        paths.push(path);
        minDistance = totalDistance;
    }
}

const endTime = Date.now() - startTime;
// console.log("Optimal Paths:", paths);
console.log("Total Distance:", minDistance);
console.log("Time spent: ", endTime);