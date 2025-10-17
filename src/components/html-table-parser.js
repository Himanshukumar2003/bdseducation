"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

function parseHtmlTableData(htmlContent) {
  const tableRegex = /<table[^>]*>([\s\S]*?)<\/table>/i;
  const tableMatch = htmlContent.match(tableRegex);

  if (!tableMatch) return null;

  const tableContent = tableMatch[1];

  // Parse headers
  const headerRegex = /<th[^>]*>([\s\S]*?)<\/th>/gi;
  const headers = [];
  let headerMatch;
  while ((headerMatch = headerRegex.exec(tableContent)) !== null) {
    const text = headerMatch[1].replace(/<[^>]*>/g, "").trim();
    headers.push(text);
  }

  // Parse rows
  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  const rows = [];
  let rowMatch;
  while ((rowMatch = rowRegex.exec(tableContent)) !== null) {
    const rowContent = rowMatch[1];
    const cellRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi;
    const cells = [];
    let cellMatch;
    while ((cellMatch = cellRegex.exec(rowContent)) !== null) {
      const text = cellMatch[1].replace(/<[^>]*>/g, "").trim();
      cells.push(text);
    }
    if (cells.length > 0) {
      rows.push(cells);
    }
  }

  return headers.length > 0 ? { headers, rows } : null;
}

export function HtmlTableParser({ htmlContent, className }) {
  const parsedTable = parseHtmlTableData(htmlContent);

  if (!parsedTable) return null;

  const { headers, rows } = parsedTable;

  const typeColumnIndices = headers
    .map((header, idx) =>
      header.toLowerCase().includes("type") ||
      header.toLowerCase().includes("category")
        ? idx
        : -1
    )
    .filter((idx) => idx !== -1);

  return (
    <div
      className={`w-full overflow-x-auto rounded-lg border border-border/50 ${className || ""}`}
    >
      <Table>
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-primary/5 to-primary/2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5">
            {headers.map((header, idx) => (
              <TableHead
                key={idx}
                className="font-semibold text-foreground px-4 py-3 text-sm"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, rowIdx) => (
            <TableRow
              key={rowIdx}
              className={`transition-colors ${
                rowIdx % 2 === 0
                  ? "bg-muted/30 hover:bg-muted/50"
                  : "hover:bg-muted/40"
              }`}
            >
              {row.map((cell, cellIdx) => {
                const isTypeColumn = typeColumnIndices.includes(cellIdx);
                return (
                  <TableCell key={cellIdx} className="px-4 py-3 text-sm">
                    {isTypeColumn ? (
                      <Badge variant="secondary" className="w-fit">
                        {cell}
                      </Badge>
                    ) : (
                      <span className="text-foreground">{cell}</span>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
