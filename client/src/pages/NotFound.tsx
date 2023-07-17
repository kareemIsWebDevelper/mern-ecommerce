import {Link} from "react-router-dom";

export default function NotFound() {
    return (
    <section>
        <div className={'grid gap-6 text-center'}>
            <h1 className={'text-4xl font-bold md:text-8xl'}>
                Sorry, <br className={'md:hidden'}/>
                Not Found
            </h1>
            <p className={'text-3xl text-slate-400'}>
                Return to &nbsp;
                <Link className={'underline'} to={'/'}>Home</Link>
            </p>
        </div>
    </section>
    )
}