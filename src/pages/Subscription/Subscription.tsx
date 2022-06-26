import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoWlTECH } from "../../components/Logo/LogoWlTECH";
import { CheckCircle } from "phosphor-react";
import { useCreateSubscriberMutation } from "../../graphql/generated";



function Subscription(){
  const navigate = useNavigate();

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');

  const [ createSubscriber, { data, loading } ] = useCreateSubscriberMutation();

 async function handleSubscribe(event: FormEvent){
    try {
      event.preventDefault();

      createSubscriber({
        variables: {
          name,
          email
        }
      });
      setName("");
      setEmail("");
      navigate("/event")
    } catch (error) {
      console.warn("Error em fazer Inscrição de usuário", error)
    }
    
  }

  return(
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">

      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <LogoWlTECH />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">Node JS</strong>
          </h1>

          <p  className="mt-4 text-gray-200 leading-relaxed">
            Em apenas um curso você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar
            as melhores oportunidades do mercado.
          </p>
        </div>


        <div className="p-8 bg-gay-700 border border-gray-500 rounded">

          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14" 
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />

            <input
              className="bg-gray-900 rounded px-5 h-14" 
              type="email"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />

            <button 
              className="mt-4 bg-green-500 rounded py-4 font-bold text-sm uppercase hover:bg-green-700 transition-colors disabled:opacity-50"
              disabled={loading } 
              type="submit"
            >
              { loading ? <CheckCircle /> : 'Quero me inscrever'}
            </button>
          </form>

        </div>
      </div>

      <img src="/src/assets/code-mockup.png" alt="" className="mt-10" />
    </div>
  )
};

export default Subscription;