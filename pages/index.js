import Link from 'next/link';

function Home(){
    return (<div>
        <h1>Meu Primeiro Site</h1>
        <h2>Teste1</h2>
        <Link href="/sobre">
            <a>Visitar a página Sobre</a> 
        </Link>
        </div>)
}

export default Home