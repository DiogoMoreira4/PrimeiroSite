import Link from 'next/link';


export default function Home(){
    return (
    <div>
        <title>Primeiro Site</title>
        <Link href="/sobre">
            <a>Visitar a página Sobre</a> 
            <a>Vai ver se está a chover, eu não vou ao Pingo Doce</a>
        </Link>

    </div>)
}