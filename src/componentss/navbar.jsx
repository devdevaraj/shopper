import "./navbar.css";

export default function NavBar({ setSearch }) {
    return (
        <main className="navbar">
            <h1>Shoper</h1>
            <section className="right">
                <h2><a href="/cart">cart</a></h2>
                <input type="text" onInput={e => setSearch(e.target.value)} placeholder="search" />
            </section>
        </main>
    );
}