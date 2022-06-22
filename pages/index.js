import Link from 'next/link';


export default function Home(){
    return (
    <div>
        <title>Primeiro Site</title>
        <h1>Mensagem para a Kina:</h1>
        <h1>Vai ver se está a chover, eu não vou ao Pingo Doce</h1>
        <Link href="/sobre">
            <a>Visitar a página Sobre</a> 
        </Link>
    </div>)
}