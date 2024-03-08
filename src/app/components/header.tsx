export default function Header({ children }: any) {
  return (
    <div className="flex">
      <header className="flex-1">
        <h1 className="text-4xl">{children}</h1>
      </header>
      <nav>
        <ul className="flex gap-6">
          <li><a href="#HOME">HOME</a></li>
          <li><a href="#SOBRE MIM">SOBRE MIM</a></li>
          <li><a href="#PORTFOLIO">PORTFOLIO</a></li>
          <li><a href="#CONTATO">CONTATO</a></li>
          <li><a href="#BLOG">BLOG</a></li>
        </ul>
      </nav>
    </div>
  );
}
