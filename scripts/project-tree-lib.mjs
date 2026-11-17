export function buildProjectTree(paths) {
  const root = { children: new Map(), isFile: false };

  for (const path of [...paths].filter(Boolean).sort()) {
    const segments = path.replaceAll("\\", "/").split("/");
    let current = root;

    for (let index = 0; index < segments.length; index += 1) {
      const segment = segments[index];
      if (!current.children.has(segment)) {
        current.children.set(segment, {
          children: new Map(),
          isFile: index === segments.length - 1,
        });
      }
      current = current.children.get(segment);
    }
  }

  const lines = ["CodeShare/"];

  function visit(node, prefix) {
    const entries = [...node.children.entries()].sort(([nameA, itemA], [nameB, itemB]) => {
      const typeA = itemA.isFile ? 1 : 0;
      const typeB = itemB.isFile ? 1 : 0;
      return typeA - typeB || nameA.localeCompare(nameB);
    });

    entries.forEach(([name, child], index) => {
      const isLast = index === entries.length - 1;
      const hasChildren = child.children.size > 0;
      lines.push(`${prefix}${isLast ? "└── " : "├── "}${name}${hasChildren ? "/" : ""}`);
      if (hasChildren) visit(child, `${prefix}${isLast ? "    " : "│   "}`);
    });
  }

  visit(root, "");
  return lines.join("\n");
}
