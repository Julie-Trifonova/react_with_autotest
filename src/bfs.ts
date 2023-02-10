const bfs = (graph: any) => {
  if (typeof graph !== 'object') {
    throw new Error('INVALID_ARGUMENT');
  }
  const start = 'A';
  const visited: Array<any> = [];
  let needVisit: Array<any> = [];

  needVisit.push(start);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      const tmp = !graph[node] ? [] : graph[node];
      needVisit = [...needVisit, ...tmp];
    }
  }
  return visited;
};

export default bfs;
