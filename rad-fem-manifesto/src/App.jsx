import { useEffect, useRef } from "react";
import "./App.css";

const sources = [
  {
    author: "Wright, Kelsey",
    title: "Sexual Objectification of Female Bodies in Beauty Pageants, Pornography, and Media",
    date: "Sept. 2017",
    note: "Establishes the connective logic between media, pageantry, and pornography as a unified system of objectification.",
    url: "https://suny-bro.primo.exlibrisgroup.com/permalink/01SUNY_BRO/13js9gg/alma998418721904805"
  },
  {
    author: "Cava, Antonia",
    title: "Porn-Cultural Industries: Female Children and Teenagers' Eroticisation",
    date: "Culture e Studi Del Sociale, vol. 9, no. 2, December 2024",
    note: "Documents the migration of pornographic logic into mainstream youth-facing media and its normalization of girls' sexual objectification.",
    url: "https://suny-bro.primo.exlibrisgroup.com/permalink/01SUNY_BRO/181r8gn/cdi_doaj_primary_oai_doaj_org_article_3c9c4dbdf9cd4d32887a54b187a338df"
  },
  {
    author: "Sonkaya, Zehra İncedal & Nursel Üstündağ Öcal",
    title: "Young People's Attitudes toward Marriage, Gender Roles, and Related Factors",
    date: "BMC Public Health, vol. 24, no. 1, November 2024.",
    note: "Shows how patriarchal marriage norms are reproduced through socialization, making structural coercion feel like personal preference.",
    url: "https://doi.org/10.1186/s12889-024-20904-z"
  },
  {
    author: "Faisal, Umme Summaiya, et al.",
    title: "Influence of Marital Pressures and Cultural Constructs on Females (IMPACT-F): A Global Study of Female Medical Students and Doctors",
    date: "BMC Medical Education, vol. 26, no. 1, January 2026.",
    note: "Demonstrates that marital coercion crosses class and education lines, constraining even highly credentialed women globally.",
    url: "https://doi.org/10.1186/s12909-025-08519-3"
  },
  {
    author: "Enough Is Enough",
    title: "Porn Industry Archives",
    date: "Accessed April 2026",
    note: "Provides comprehensive data on the economic scale of the global pornography industry.",
    url: "https://enough.org/stats_porn_industry_archives"
  },
  {
    author: "Girls Not Brides",
    title: "700 million women were married as children, reveals new UNICEF data",
    date: "August 2014",
    note: "Offers global statistics on the prevalence of child marriage",
    url: "https://www.girlsnotbrides.org/es/articulos/700-million-women-married-children-reveals-new-unicef-data/"
  },
  {
    author: "Black, M.C. et al.",
    title: "National Intimate Partner and Sexual Violence Survey",
    date: "2010",
    note: "A excellent survey provided by the CDC providing insides into the prevalence of intimate partner violence and sexual violence in the US.",
    url: "https://www.nsvrc.org/wp-content/uploads/2024/11/NISVS_Report2010-a.pdf"
  }
];

const issues = [
  {
    num: "01",
    title: "Forced & Coerced Marriage",
    body: "Coercion need not be physical to be real. Faisal et al. (2026) found that even highly educated women—doctors and medical students—face marital pressures that structurally constrain their professional and personal autonomy worldwide. The penalties for non-compliance are social, economic, and familial. That is coercion."
  },
  {
    num: "02",
    title: "Internalized Gender Roles",
    body: "Sonkaya & Öcal (2024) demonstrate that patriarchal marriage norms are actively reproduced through socialization. Young people internalize gendered expectations about who should marry, when, and on what terms—making coercion feel like choice. The system sustains itself by making its own constraints invisible."
  },
  {
    num: "03",
    title: "The Pornography Industry",
    body: "Wright (2017) traces the same objectifying logic across beauty pageants, media, and pornography: all reduce women to their physical and sexual utility. Cava (2024) documents how this logic has escaped the adult industry entirely—migrating into music, advertising, and youth media, normalizing the eroticization of girls."
  },
  {
    num: "04",
    title: "Legal & Cultural Reform",
    body: "Both crises demand structural response. Criminalizing coercive marriage means nothing without economic safety nets for women who face community pressure. Regulating pornography means nothing without challenging the cultural normalization Wright and Cava document. Law and culture must move together."
  }
];

const demands = [
  "Criminalize coercive marriage practices with meaningful enforcement",
  "Mandate informed consent frameworks for all adult content industries",
  "Expand support infrastructure for survivors of sexual exploitation",
  "Dismantle legal structures that treat women as property or objects",
  "Center radical feminist analysis in policy reform conversations"
];

export default function Manifesto() {
  const revealRefs = useRef([]);
  revealRefs.current = []; // Reset the array on each render

  const addRef = (el) => {
    if (el) revealRefs.current.push(el);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const marqueeContent = Array(8).fill(null).map((_, i) => (
    <span key={i}>
      BODILY AUTONOMY NOW <span className="marquee-sep" />
      END SEXUAL EXPLOITATION <span className="marquee-sep" />
      DISMANTLE THE PATRIARCHY <span className="marquee-sep" />
      RECLAIM POWER <span className="marquee-sep" />
    </span>
  ));

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#hero" className="nav-logo">RADI<span>CAL</span></a>
        <ul className="nav-links">
          <li><a href="#thesis">Thesis</a></li>
          <li><a href="#demands">Demands</a></li>
          <li><a href="#issues">Issues</a></li>
          <li><a href="#sources">Sources</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-panel" />
        <div className="hero-panel-2" />
        <div className="hero-panel-3" />

        <div className="hero-left">
          <p className="hero-eyebrow">A Radical Feminist Manifesto — 2026</p>
          <h1 className="hero-title">
            <span className="line-white">NO</span>
            <span className="line-outline">MORE</span>
            <span className="line-red">CHAINS</span>
          </h1>
          <p className="hero-subtitle">
            Sexual exploitation—through forced marriage and pornography—is not a private matter. It is a political instrument of patriarchal control. The time for polite discourse is over.
          </p>
          <div className="hero-cta-row">
            <a href="#thesis" className="btn-primary"><span>Read the Manifesto</span></a>
            <a href="#demands" className="btn-ghost"><span>Our Demands</span></a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-inner">{marqueeContent}{marqueeContent}</div>
      </div>

      {/* STATS */}
      <div className="stats-bar" ref={addRef}>
        {[
          { n: "$97B+", l: "Global porn industry revenue" },
          { n: "700M",   l: "Women married before 18 globally" },
          { n: "1 in 3", l: "Women in the US have experienced rape, physical violence, and/or stalking by an intimate partner" },
          { n: "0",      l: "Countries with full gender equality" },
        ].map((s, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-number">{s.n}</span>
            <span className="stat-label">{s.l}</span>
          </div>
        ))}
      </div>

      {/* THESIS */}
      <section className="thesis" id="thesis">
        <div className="container thesis-inner">
          <div className="scroll-reveal" ref={addRef}>
            <p className="section-eyebrow">01 — The Argument</p>
            <h2 className="thesis-heading">THE LENS OF RADICAL FEMINISM</h2>
          </div>
          <div className="thesis-body scroll-reveal" ref={addRef}>
            <p><strong>Radical feminism does not ask politely.</strong> It interrogates the root of women's oppression — the patriarchy as a totalizing system — not merely its symptoms. Through this lens, forced marriage and pornography are not edge cases. They are the system working as designed.</p>
            <p>Coercion in marriage operates far beyond overt force. Faisal et al. (2026) studied female doctors and medical students globally and found that marital pressures impose <strong>structural constraints on women's autonomy</strong> regardless of educational achievement — proving coercion is a class-crossing phenomenon encoded in culture, not just circumstance.</p>
            <p>Sonkaya & Öcal (2024) show how these norms are reproduced: young people actively internalize patriarchal expectations about marriage, making structural coercion feel like personal desire. Meanwhile, Wright (2017) connects the sexual objectification of women across media, pageantry, and pornography into a single coherent logic. Cava (2024) traces that logic into children's media — <strong>the eroticization of girls as normalized culture</strong>. This is not coincidence. It is a system.</p>
          </div>
        </div>
      </section>

      {/* DEMANDS */}
      <section className="cta-block" id="demands">
        <div className="cta-bg-text">NOW</div>
        <div className="container cta-inner">
          <p className="section-eyebrow" style={{ color: 'rgb(0, 0, 0)' }}>02 — What We Demand</p>
          <h2 className="cta-heading">
            <span className="cta-heading-inner">REFORM</span>
            <span className="cta-heading-inner outline-dark">IS NOT</span>
            <span className="cta-heading-inner">OPTIONAL</span>
          </h2>
          <ul className="demand-list scroll-reveal" ref={addRef}>
            {demands.map((d, i) => (
              <li key={i}>
                <span className="demand-bullet" />
                {d}
              </li>
            ))}
          </ul>
          <div className="cta-buttons scroll-reveal" ref={addRef}>
            <a href="#sources" className="btn-dark"><span>Review the Research</span></a>
          </div>
        </div>
      </section>

            {/* ISSUE CARDS */}
      <section className="issues" id="issues">
        <div className="container">
          <p className="section-eyebrow" style={{ color: 'rgba(255, 255, 255, 0.45)' }}>03 — Issues</p>
          <div className="issues-header scroll-reveal" ref={addRef}>
            <h2 className="issues-title">THE FOUR FRONTS</h2>
            <span className="issues-count">// 4 CRITICAL ISSUES</span>
          </div>
          <div className="cards-grid">
            {issues.map((card, i) => (
              <div className="issue-card scroll-reveal" key={i} ref={addRef} style={{ transitionDelay: `${i * 0.09}s` }}>
                <div className="issue-card-inner">
                  <div className="card-number">{card.num}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTIST STATEMENT */}
      <section className="thesis" id="statement" style={{ paddingTop: '120px' }}>
        <div className="container thesis-inner">
          <div className="scroll-reveal" ref={addRef}>
            <p className="section-eyebrow">04 — Artist Statement</p>
            <h2 className="thesis-heading">WHY THIS FORM</h2>
          </div>
          <div className="thesis-body scroll-reveal" ref={addRef}>
            <p>This manifesto takes the form of an interactive webpage deliberately. A traditional paper performs its argument in a closed space — between writer and reader, on a page that goes nowhere. A webpage is a public declaration. It exists in the same environment where pornographic culture proliferates, where marriage pressure is applied through social media, where norms are made and remade daily.</p>
            <p>The aesthetic choices are not decorative. The diagonal slashes, the red-on-black palette, the aggressive typography — these are the visual language of urgency, of interruption, of refusal to be polite. Radical feminism, as theorized by writers like Dworkin and MacKinnon and grounded here in the research of Wright (2017), Cava (2024), Faisal et al. (2026), and Sonkaya & Öcal (2024), is not a polite tradition. It names systems. It makes demands. The form should match the argument.</p>
            <p><strong>The personal is political.</strong> So is the design.</p>
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="sources" id="sources">
        <div className="container sources-inner">
          <h2 className="sources-title scroll-reveal" ref={addRef}>Cited Works</h2>
          {sources.map((s, i) => (
            <div className="source-item scroll-reveal" key={i} ref={addRef}>
              <span className="source-num">[{String(i + 1).padStart(2, '0')}]</span>
              <div className="source-text">
                <strong>{s.title}</strong>
                {s.author} — {s.date}
                {s.note && <em style={{ display: 'block', marginTop: '6px', color: '#aaa', fontStyle: 'italic', fontSize: '14px' }}>{s.note}</em>}
                <br />
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  ↗ {s.url.length > 60 ? s.url.slice(0, 60) + '…' : s.url}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">RADI<span>CAL</span> MANIFESTO</div>
        <p className="footer-note">Bodily Autonomy Is Non-Negotiable · 2025</p>
      </footer>
    </>
  );
}