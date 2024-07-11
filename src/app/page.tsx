"use client"
import React, { useState } from "react"
import styles from "./page.module.css"
import Buckets from "./components/Buckets"

const HomePage = () => {
	const [newIdea, setNewIdea] = useState("")

	const handleAddIdea = () => {
		console.log("Added idea:", newIdea)
		setNewIdea("")
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Add Idea</h1>
			</div>
			<div className={styles.inputContainer}>
				<input type="text" className={styles.input} value={newIdea} onChange={event => setNewIdea(event.target.value)} />
				<button className={styles.button} onClick={handleAddIdea}>
					Add
				</button>
			</div>
			<Buckets />
		</div>
	)
}
export default HomePage
