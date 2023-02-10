const dfs = (graph: any) => {
  if (typeof graph !== 'object') {
    throw new Error('INVALID_ARGUMENT');
  }
  const visited: Array<any> = [];
  let needVisit: Array<any> = [];
  const start = 'A';
  needVisit.push(start);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      const tmp = !graph[node] ? [] : graph[node];
      needVisit = [...tmp, ...needVisit];
    }
  }
  return visited;
};

export default dfs;
