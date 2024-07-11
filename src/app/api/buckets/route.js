// src/app/api/buckets/route.js
import { NextResponse } from "next/server"
import supabase from "../supabase"

export async function GET() {
	// Fetch data from the buckets table
	const { data, error } = await supabase.from("buckets").select("id, name")

	if (error) {
		return NextResponse.json({ error: error.message }, { status: 500 })
	}

	return NextResponse.json(data, { status: 200 })
}
