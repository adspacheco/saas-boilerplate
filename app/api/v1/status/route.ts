import { NextResponse } from "next/server";
import { db } from "database/client.ts";
import { sql } from "drizzle-orm";

export async function GET() {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await db.execute(sql`SHOW server_version;`);
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionsResult = await db.execute(
    sql`SHOW max_connections;`,
  );
  const databaseMaxConnectionsValue = databaseMaxConnectionsResult.rows[0]
    .max_connections as string;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnectionsResult = await db.execute(
    sql`SELECT count(*)::int FROM pg_stat_activity WHERE datname = ${databaseName}`,
  );
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  return NextResponse.json(
    {
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: databaseVersionValue,
          max_connections: parseInt(databaseMaxConnectionsValue, 10),
          opened_connections: databaseOpenedConnectionsValue,
        },
      },
    },
    {
      status: 200,
    },
  );
}
