import React from 'react';

function RegisterLoginScreen() {
  return (
    <div>
        <header>
            <img src="" alt="Logotipo" />
            <button></button>
            <button></button>
            <button></button>
            <input type="text" placeholder="Pesquisar" />
            <img src="" alt="Favorites" />
            <img src="" alt="Carrinho" />
            <img src="" alt="Perfil" />
        </header>
        <div>
            <form action="" method="post">
                <h1>Cadastre-se Aqui</h1>
                <input type="text" name="nome" placeholder="Nome" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="senha" placeholder="Senha" />
                <input type="submit" value="Cadastrar" />
            </form>    
            <form action="" method="post">
                <h1>Faça Login</h1>
                <button>Login com Google</button> 
                <button>Login com Facebook</button> 
                <button>Login com numero de telefone</button>
                <p>---------------OU----------------</p>
                <input type="text" name='email' placeholder='Email' />
                <input type="password" name='senha' placeholder='Senha' />
                <input type="submit" value='Login'/>
                <p>Esqueceu a senha?</p>

            </form>
        </div>  
    </div>
  )
  }

  export default RegisterLoginScreen;