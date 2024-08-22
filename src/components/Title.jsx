export default function Title({title}){
    return <header className="title">
            <span>
                <h1>{title}</h1>
                <span className="path">
                    <a href="home">Home</a>
                    <span className="sign">&gt;</span>
                    <span className="name">{title}</span>
                </span>
            </span>
    </header>
}