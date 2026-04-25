import { NextResponse } from "next/server";

const ORIGIN = "586 Stockton Ave, San Jose, CA 95126";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address")?.trim() ?? "";
  const zipCode = searchParams.get("zipCode")?.trim() ?? "";
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!address || !zipCode) {
    return NextResponse.json(
      { error: "Missing address or zip code." },
      { status: 400 },
    );
  }

  if (!apiKey) {
    return NextResponse.json(
      { error: "Google Maps API key not configured." },
      { status: 500 },
    );
  }

  const destination = `${address}, ${zipCode}`;
  const matrixUrl = new URL(
    "https://maps.googleapis.com/maps/api/distancematrix/json",
  );
  matrixUrl.searchParams.set("origins", ORIGIN);
  matrixUrl.searchParams.set("destinations", destination);
  matrixUrl.searchParams.set("mode", "driving");
  matrixUrl.searchParams.set("units", "imperial");
  matrixUrl.searchParams.set("key", apiKey);

  try {
    const response = await fetch(matrixUrl.toString(), { cache: "no-store" });
    if (!response.ok) {
      return NextResponse.json(
        { error: "Distance lookup failed." },
        { status: 502 },
      );
    }

    const data = (await response.json()) as {
      status?: string;
      rows?: Array<{
        elements?: Array<{
          status?: string;
          distance?: { value?: number };
        }>;
      }>;
    };

    if (data.status !== "OK") {
      return NextResponse.json(
        { error: "Distance service unavailable." },
        { status: 502 },
      );
    }

    const element = data.rows?.[0]?.elements?.[0];
    if (!element || element.status !== "OK" || !element.distance?.value) {
      return NextResponse.json(
        { error: "Could not calculate route distance." },
        { status: 400 },
      );
    }

    const miles = Math.round(element.distance.value / 1609.344);
    return NextResponse.json({ miles });
  } catch {
    return NextResponse.json(
      { error: "Distance lookup request failed." },
      { status: 500 },
    );
  }
}
