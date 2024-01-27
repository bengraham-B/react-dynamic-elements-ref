import React from 'react'
import { useState } from 'react'
import './styles/style.css'

export default function App() {
    const [addInput, setAddInput] = useState([{name: "", label: ""}])

	const handleAddInput = () => {
		setAddInput([...addInput, {name: "", label: ""}])
	}

	const handleAddInputChange = (e, i) => {
		const field = e.target.name
		const newAddInputs = [...addInput]
		newAddInputs[i][field] = e.target.value
		setAddInput(newAddInputs)
	}

	const deleteAddTod = (i) => {
		const newAddInput = [...addInput]
		newAddInput.splice(i, 1)
		setAddInput(newAddInput)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(addInput)
	}
	return (
		<div >

			<section id="App_Page">


				<form id="Form" onSubmit={handleSubmit}>
					<div id="title" className="title-container">
						<h1>Add Info</h1>
					</div>
					{addInput.map((addInput, index) => (
						<div key={index} className='input-container'>

							<input 
								key={`${index}-name`} 
								type="text" 
								placeholder='name' 
								name="name"
								value={addInput.name} 
								onChange={(e) => handleAddInputChange(e, index)}
								required 
								
							/>
							
							<input 
								key={`${index}-label`} 
								type="text" 
								placeholder='label' 
								name="label"
								value={addInput.label} 
								onChange={(e) => handleAddInputChange(e, index)}
								required 
								
							/>

							<button onClick={() => deleteAddTod(index)}>Delete</button>

						</div>

					))}
					<div className='btn-container'>
						<button className='add-btn' onClick={handleAddInput}>Add Todo</button>
						<button className='submit-btn' onClick={handleSubmit}>Submit</button>
					</div>
				</form>

			</section>

		
		</div>
	)
}
