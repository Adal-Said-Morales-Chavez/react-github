
import React from 'react'
import Contador from './Contador'
import TablaPersonas from './TablaPersonas'

function App() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
			<Contador />
			<TablaPersonas />
		</div>
	)
}

export default App
