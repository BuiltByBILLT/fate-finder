"use client"
import { useEffect, useState } from "react"

export default function Buckets() {
	const [buckets, setBuckets] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchBuckets = async () => {
			const response = await fetch("/api/buckets")
			const data = await response.json()
			setBuckets(data)
			setLoading(false)
		}

		fetchBuckets()
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<h1>Buckets</h1>
			<ul>
				{buckets.map(bucket => (
					<li key={bucket.id}>
						{bucket.id}: {bucket.name}
					</li>
				))}
			</ul>
		</div>
	)
}
