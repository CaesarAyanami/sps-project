import './viewStyles.css'
import '../components/Components.css'
import agregar from '../assets/agregar.svg'

export default function Home() {
    return (
    <div className='body-home'>
		<div>
			<h1 className='mt-5 mx-auto text-center text-5xl font-sans text-gray-800'>¡Bienvenido a SPS HEALTH SERVICE!</h1>
		</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-12 w-full">
	<div className="p-6 bg-gray-200 cursor-pointer hover:bg-blue-400 hover:text-white tracking-wide shadow-xl transition duration-600">
		<p className="text-center px-2 py-1">
			<img src={agregar} alt="Agregar" className="mx-auto w-16 h-16"/>
		</p>
		<h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
			Agregar Nuevo Tiempo Clínico
		</h2>
		<p className="mt-2 text-gray-800 text-center">
			Añadir nueva historia del paciente para iniciar el proceso de la creación de historia.
		</p>
	</div>
	<div className="p-6 bg-gray-200 hover:bg-blue-400 hover:text-white tracking-wide shadow-xl transition duration-600">
		<p className="text-center text-4xl">

		</p>
		<h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
			Numeros Totales de Historias
		</h2>
		<p className="mt-2 text-gray-800 text-center">
			0
		</p>
	</div>
	<div className="p-6 bg-gray-200 cursor-pointer hover:bg-blue-400 hover:text-white tracking-wide shadow-xl transition duration-600">
		<p className="text-center text-4xl">
		</p>
		<h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
			Archivo
		</h2>
		<p className="mt-2 text-gray-800 text-center">
			Archivo de historias clínicas
		</p>
	</div>
	<div className="p-6 bg-gray-200 cursor-pointer hover:bg-blue-400 hover:text-white tracking-wide shadow-xl transition duration-600">
		<p className="text-center text-4xl">
		</p>
		<h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
			Inventario
		</h2>
		<p className="mt-2 text-gray-800 text-center">
			Inventario de insumos medicos
		</p>
	</div>
</div>
    </div>

    )
}
