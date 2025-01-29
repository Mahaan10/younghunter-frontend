function Table({ children }) {
  return (
    <div className="bg-neutral-200 dark:bg-zinc-950 overflow-auto">
      <table>{children}</table>
    </div>
  );
}

export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="bg-neutral-400 dark:bg-zinc-800">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tr>{children}</tr>;
}

function TableRow({ children }) {
  return <tbody>{children}</tbody>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
