import Image from "next/image";

const links = [
  {
    title: "ゆたの世界",
    subtitle: "works archive · photo & video",
    href: "https://yutayuta-world.pages.dev/",
    featured: true,
  },
  { title: "X", subtitle: "@yutayuta_8e", href: "https://x.com/yutayuta_8e" },
  {
    title: "Instagram",
    subtitle: "@yutayuta_8e",
    href: "https://www.instagram.com/yutayuta_8e",
  },
  {
    title: "YouTube",
    subtitle: "@yutayuta_8e",
    href: "https://youtube.com/@yutayuta_8e?si=11IHSaR6S7NUSWOV",
  },
  { title: "Suno", subtitle: "@yutayuta_8e", href: "https://suno.com/@yutayuta_8e" },
  {
    title: "質問箱",
    subtitle: "mond",
    href: "https://mond.how/ja/yutayuta_8e",
  },
  {
    title: "果実",
    subtitle: "fruits catch",
    href: "https://fruits-catch.pages.dev/",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "ゆた",
    alternateName: "yuta",
    url: "https://yuta-index.pages.dev",
    image: "https://yuta-index.pages.dev/og.png",
    sameAs: [
      "https://x.com/yutayuta_8e",
      "https://www.instagram.com/yutayuta_8e",
      "https://youtube.com/@yutayuta_8e",
      "https://suno.com/@yutayuta_8e",
      "https://mond.how/ja/yutayuta_8e",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <a className="skip-link" href="#main">メインコンテンツへ</a>
      <main id="main" className="link-hub" data-layout="index-cards">
        <div className="link-hub__shell">
          <header className="link-hub__header">
            <figure className="link-hub__portrait">
              <Image
                src="/yuta-index.jpg"
                alt="両手でハートを作るゆた"
                width={1280}
                height={960}
                sizes="(max-width: 760px) 100vw, 340px"
                priority
                unoptimized
              />
            </figure>
            <div className="link-hub__intro">
              <span aria-hidden="true" />
              <div>
                <h1 aria-label="ゆたの、ぜんぶ。">
                  <span className="title-visual" aria-hidden="true">
                    <span className="title-glyph">ゆ</span><span className="title-glyph title-glyph--ta">た</span><span className="title-glyph title-glyph--no">の</span><span className="title-glyph">、</span><span className="title-glyph title-glyph--ze">ぜ</span><span className="title-glyph">ん</span><span className="title-glyph title-glyph--bu">ぶ</span><span className="title-glyph title-glyph--period">。</span>
                  </span>
                </h1>
                <p>official links - @yutayuta_8e</p>
              </div>
            </div>
          </header>
          <nav className="link-hub__links" aria-label="ゆたのリンク一覧">
            {links.map((link, index) => (
              <a
                className={`link-hub__link${link.featured ? " link-hub__link--featured" : ""}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={link.title}
              >
                <span className="link-hub__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="link-hub__copy">
                  <strong>{link.title}</strong>
                  <small>{link.subtitle}</small>
                  <span className="sr-only">（新しいタブで開きます）</span>
                </span>
                <span className="link-hub__arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
          <footer className="link-hub__footer">
            <span>© {currentYear} YUTA</span><span>YUTA INDEX</span>
          </footer>
        </div>
      </main>
    </>
  );
}
