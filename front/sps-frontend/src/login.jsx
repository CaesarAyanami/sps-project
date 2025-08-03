import './components/Components.css'

function ContainerLogin(){
return(
    <section className='container-login'> a
        <div className='container-title'>
            <h1 className='title'>Inicia Sesión</h1>
        </div>
        <div className='container-form-login'>
            <form action="" method="post">
                <label for="username">
                    <h2>Usuario:</h2>
                    <input type="text" />
                </label>
            </form>
        </div>
    </section>
    )
}
export {ContainerLogin}