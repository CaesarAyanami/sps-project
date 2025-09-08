import './viewStyles.css'
import '../components/Components.css'
import agregar from '../assets/agregar.svg'

export default function Home() {
    return (
    /*<div className="p-4">¡Bienvenido a Homeaa!</div>*/
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-12 w-full">
	<div className="p-6 bg-gray-200">
		<p className="text-center px-2 py-1">
			<img src={agregar} alt="Agregar" className="mx-auto w-16 h-16"/>
		</p>

		<h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
			Agregar Nuevo Tiempo Clínico
		</h2>

		<p className="mt-2 text-gray-800 text-center">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi fuga, laudantium molestias
			nesciunt tempore.
		</p>
	</div>
	<div className="p-6 bg-gray-200">
		<p className="text-center text-4xl">
			🤩
		</p>

		<h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
			Your Feature Here
		</h2>

		<p className="mt-2 text-gray-800 text-center">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi fuga, laudantium molestias
			nesciunt tempore.
		</p>
	</div>
	<div className="p-6 bg-gray-200">
		<p className="text-center text-4xl">
			😎
		</p>

		<h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
			Your Feature Here
		</h2>

		<p className="mt-2 text-gray-800 text-center">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi fuga, laudantium molestias
			nesciunt tempore.
		</p>
	</div>
	<div className="p-6 bg-gray-200">
		<p className="text-center text-4xl">
			🥰
		</p>

		<h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
			Your Feature Here
		</h2>

		<p className="mt-2 text-gray-800 text-center">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi fuga, laudantium molestias
			nesciunt tempore.
		</p>
	</div>
</div>
    </div>

    )
}
