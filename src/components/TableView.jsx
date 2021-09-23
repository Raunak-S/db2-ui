import './TableView.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const TableView = () => {

		const [tables, setTables] = useState(null)
		const [rows, setRows] = useState(null)

		const getRows = async () => {
				const rowList = await axios.get(`http://localhost:8080/rows`)
				
				setRows(rowList.data.map(row => {
					const {AGE, LASTNAME, FIRSTNAME} = row
					return <li key={row.FIRSTNAME+row.LASTNAME}>{FIRSTNAME + LASTNAME + AGE}</li>
				}))
			}

		useEffect(() => {
			
			const getTables = async () => {
				setTables((await axios.get(`http://localhost:8080/getTables`)).data.map(table => {
						return (
								<label>
										<input type="radio" value={table.TABNAME} name="tables" onChange={() => {getRows(table.TABNAME)}} /> {table.TABNAME}
								</label>
						)
				}))
		}
				getTables()
		}, [])

		return (
				<div className='tableview-container'>
						<p>Tables</p>
						{tables ? tables : <div>Loading Tables</div>}
						<h1>Table Name</h1>
						{rows ? rows : <div>No Table Selected</div>}
				</div>
		)
}

export default TableView