import Link from 'next/link';


export default function Home(){
    return (
    <div>
        <title>Primeiro Site</title>
        <Link href="/sobre">
            <a>Visitar a página Sobre</a> 
        </Link>
    </div>)
}