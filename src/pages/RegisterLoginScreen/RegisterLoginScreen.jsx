import React from 'react';
import './style.css'

function RegisterLoginScreen() {
  return (
    <div>
        <header>
            <img src="" alt="Logotipo" />
            <button>HOME</button>
            <button>HOME</button>
            <button>HOME</button>
            <input type="text" placeholder="Pesquisar" />
            <img src="" alt="Favorites" />
            <img src="" alt="Carrinho" />
            <img src="" alt="Perfil" />
        </header>
        <div className='container'>
            <form action="" method="post">
                <h1>Cadastre-se Aqui</h1>
                <input type="text" name="nome" placeholder="Nome" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="senha" placeholder="Senha" />
                <p><strong>Sexo: </strong></p>
                <div className='gender-div'>
                    <input type="radio" id="male" name="sexo" value="homem" />
                    <label for="male"><strong>Masculino</strong></label>
                    <input type="radio" id="female" name="sexo" value="mulher" />
                    <label for="female"><strong>Femenino</strong></label>
                    <input type="radio" id="outro" name="sexo" value="outro" />
                    <label for="outro"><strong>Outro</strong></label>
                </div>
                
                <p><strong>Data de Nascimento</strong></p>
                <input type="date" name="nascimento" />
                <p><strong>Endereço</strong></p>
                <input type="text" name="endereco" placeholder="País" />
                <input type="text" name="endereco" placeholder="Cidade" />
                <input type="text" name="endereco" placeholder="Zona" />

                <input type="submit" value="Cadastrar" />
            </form>
            <p>OU</p> 
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