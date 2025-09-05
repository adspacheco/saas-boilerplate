import { describe, expect, it } from "vitest";

describe("/api/status", () => {
  it("GET to /api/status should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({ saas: "boilerplate" });
  });
});
