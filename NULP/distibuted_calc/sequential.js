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
// console.log("Graph:", graph);

function nearestNeighbor(graph, startNode, mostOptimalDistance) {
    const nodesNumber = graph.length;
    const visited = new Array(nodesNumber).fill(false);
    let path = [startNode];
    let distance = 0;
    visited[startNode] = true;

    for (let i = 0; i < nodesNumber - 1; i++) {
        if (distance > mostOptimalDistance) {
            break;
        }
        let nearest = -1;
        let minDist = 100;

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
    // console.log("Path:", path);
    // console.log("Distance:", distance);

    return {path, distance};
}

let startTime = Date.now();

let paths = [];
let optimalDistance = Infinity;
for (let startNode = 0; startNode < graph.length; startNode++) {
    let {path, distance} = nearestNeighbor(graph, startNode, optimalDistance);

    if (distance < optimalDistance) {
        paths = path;
        optimalDistance = distance;
    }
}
console.log("Execution took: ", Date.now() - startTime);
console.log("Distance: ", optimalDistance);