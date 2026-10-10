import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowUp, ArrowRight, Code2, GraduationCap, BookOpen, Menu, X, Atom, Plus, ImageIcon, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { navigation, currentSkills, learningSkills, roadmap, projects, milestones } from '@/lib/portfolio-data';
import { PortfolioContactLinks } from '@/components/portfolio-contact-links';
import { PortfolioContactForm } from '@/components/portfolio-contact-form';
import profilePhoto from '@/assets/ahnaf-profile.jpg.asset.json';
import resume from '@/assets/ahnaf-islam-resume.pdf.asset.json';
import sculpture from '@/assets/code-sculpture.jpg';
import moviesPreview from '@/assets/movies-preview.png.asset.json';
import payooPreview from '@/assets/payoo-preview.png.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Ahnaf Islam | Aspiring Software Developer' },
    { name: 'description', content: "Explore Ahnaf Islam's projects, programming journey, technical skills, and aspirations as an aspiring Software Developer." },
    { property: 'og:title', content: 'Ahnaf Islam | Aspiring Software Developer' },
    { property: 'og:description', content: 'Learning, building, and growing. Discover the projects and journey of Ahnaf Islam, a Computer Science student at Southeast University, Bangladesh.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});
const subtitles = ['Building my foundation in software development.', 'Learning, building, and growing.', 'Turning ideas into digital experiences.', 'Exploring the world of code, one project at a time.'];
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [subtitle, setSubtitle] = useState(0);
  const [skillTab, setSkillTab] = useState('Current skills');
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = reduced ? undefined : window.setInterval(() => setSubtitle(n => (n + 1) % subtitles.length), 4500);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -65% 0px' });
    navigation.forEach(([, id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => { if (timer) window.clearInterval(timer); observer.disconnect(); };
  }, []);
  return <>
    <header className="site-header"><div className="container header-inner">
      <a href="#home" className="logo" aria-label="Ahnaf home">ahnaf<span>.</span></a>
      <nav aria-label="Main navigation" className="desktop-nav">{navigation.map(([name, id]) => <a key={id} className={`nav-link ${active === id ? 'active' : ''}`} href={`#${id}`}>{name}</a>)}</nav>
      <Button asChild variant="outline" size="sm" className="header-contact"><a href="#contact">Let's talk <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="mobile-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
    </div>{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(([name,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{name}</a>)}</nav>}</header>
    <main>
    <section id="home" className="hero">
      <img className="hero-art" src={sculpture} width={1024} height={1024} alt="Sculptural chrome code brackets with lavender and mint glass objects" />
      <div className="container hero-content reveal">
        <div className="eyebrow">A curious mind. A growing developer.</div>
        <h1>Ahnaf Islam<span>.</span></h1>
        <h2>Aspiring Software Developer</h2>
        <div className="rotating-text">{subtitles[subtitle]}</div>
        <p className="hero-intro">I'm learning to build things that matter,<br />one line of code at a time.<br /><span>Computer Science student. Curious problem-solver.</span></p>
        <div className="hero-actions"><Button asChild><a href="#projects">Explore My Projects <ArrowUpRight /></a></Button><Button asChild variant="outline"><a href={resume.url} download="Ahnaf-Islam-Resume.pdf">Résumé <Download /></a></Button></div>
        <div className="hero-tech"><span className="hero-tech-label">MY BUILDING BLOCKS</span>{currentSkills.slice(0,4).map(s => <span key={s.name} className={`tech-symbol ${s.kind}`} title={s.name}>{s.symbol}</span>)}<Atom className="react-icon" size={26} aria-label="Learning React" /><span className="tech-symbol git" title="Git">⑂</span></div>
        <div className="code-note" aria-label="Developer introduction in code"><div className="code-top"><i/><i/><i/><span>the journey.js</span></div><pre><b>const</b> ahnaf = {'{'}<br />  role: <em>'aspiring developer'</em>,<br />  learning: <em>'React.js'</em>,<br />  mindset: <em>'keep building'</em><br />{'}'};</pre></div>
        <div className="hero-bottom"><a className="scroll-link" href="#about"><ArrowDown size={13}/> A little more about me</a><span>BASED IN BANGLADESH · BUILDING FOR THE WEB</span></div>
      </div>
    </section>
    <section id="about" className="section about-section"><div className="container about-grid"><div><div className="eyebrow">01 / About me</div><h2 className="section-title">The journey is<br />just beginning<span className="text-primary">.</span></h2><p className="about-copy">I'm Ahnaf, a Computer Science and Engineering student at Southeast University, Bangladesh, on a journey toward becoming a Software Developer.</p><p className="about-copy">I love the process of turning an idea into something you can actually use. Right now, I'm strengthening my JavaScript fundamentals, learning React, and building practical projects along the way.</p><a href="#journey" className="text-link">Get to know my journey <ArrowUpRight size={15}/></a></div><div className="about-facts">
      {[{icon:GraduationCap,title:'Computer Science',text:'Southeast University, Bangladesh'},{icon:Code2,title:'Building foundations',text:'HTML, CSS & JavaScript'},{icon:Atom,title:'Currently learning',text:'React.js & component-based UI'},{icon:BookOpen,title:'Always curious',text:'Learning by building real projects'}].map(f => <div className="fact" key={f.title}><f.icon/><h3>{f.title}</h3><p>{f.text}</p></div>)}
    </div></div></section>
    <section id="skills" className="section"><div className="container"><div className="section-heading"><div><div className="eyebrow">02 / My toolkit</div><h2 className="section-title">A growing universe of skills<span className="text-primary">.</span></h2></div><p>Not a list of things I've mastered.<br />A look at what I use, learn, and explore next.</p></div>
      <div className="skill-tabs" role="tablist" aria-label="Skill status">{['Current skills','Currently learning','Future roadmap'].map(tab => <Button key={tab} variant="ghost" role="tab" aria-selected={skillTab === tab} aria-controls="skill-panel" className={skillTab === tab ? 'selected' : ''} onClick={() => setSkillTab(tab)}>{tab}{tab === 'Currently learning' && <Atom size={12}/>}</Button>)}</div>
      <div id="skill-panel" role="tabpanel" aria-label={skillTab}>
      {skillTab === 'Current skills' && <><div className="skill-grid">{currentSkills.map(s => <div className="skill-item" key={s.name}><span className={`tech-symbol ${s.kind}`}>{s.symbol}</span><div><h3>{s.name}</h3><p>{s.detail}</p></div></div>)}</div><div className="learning-strip"><Atom size={32} className="react-icon"/><div><strong>The next chapter: React.js</strong><p>Exploring components, state, and a new way to think about interfaces.</p></div><span className="status">Currently learning</span></div></>}
      {skillTab === 'Currently learning' && <><div className="learning-skill-grid">{learningSkills.map(name => <div className="learning-skill" key={name}><Code2 size={20}/><h3>{name}</h3><span className="status">Currently learning</span></div>)}</div><div className="topic-list">{['Components & JSX','Props & state','Event handling','Conditional rendering','Lists & forms','React Hooks','API integration','Component composition'].map(t => <span className="topic" key={t}>{t}</span>)}</div></>}
      {skillTab === 'Future roadmap' && <div className="roadmap-grid">{roadmap.map((r,i) => <details className="roadmap-item" key={r.name}><summary><span><span className="text-muted-foreground">{String(i+1).padStart(2,'0')} / </span>{r.name}</span><Plus size={15}/></summary><p><span className="status">Exploring next</span><br/><br/>{r.topics}</p></details>)}</div>}
      </div>
    </div></section>
    <section id="projects" className="section"><div className="container"><div className="section-heading"><div><div className="eyebrow">03 / Selected projects</div><h2 className="section-title">Ideas becoming reality<span className="text-primary">.</span></h2></div><p>Small steps. Real projects.<br />A little more learned with every build.</p></div><div className="projects-grid">{projects.slice(0,2).map(project => <article className="project-card" key={project.id}><div className="project-image"><span className="project-number">{project.id}</span><ProjectPreview name={project.name} image={project.image}/></div><div className="project-content"><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><Button variant="ghost" onClick={() => setSelectedProject(project)}>Behind the build <ArrowRight size={13}/></Button>{project.url && <a href={project.url} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14}/></a>}</div></div></article>)}</div><div className="project-small-grid">{projects.slice(2).map(project => <article className="project-small" key={project.id}><div className="project-small-top"><span>{project.id} /</span><span className="status">{project.status}</span></div><h3>{project.name}</h3><p>{project.description}</p><Button variant="ghost" onClick={() => setSelectedProject(project)}>About this project <ArrowUpRight size={13}/></Button></article>)}</div></div></section>
    <section id="journey" className="section journey-section"><div className="container journey-layout"><div className="journey-intro"><div className="eyebrow">04 / Learning journey</div><h2 className="section-title">Becoming,<br />one project at a time<span className="text-primary">.</span></h2><p>There's no finish line to learning. Just new questions, new challenges, and the next thing to build.</p><div className="journey-quote">“I'm not finished learning.<br />I'm building, experimenting,<br />and improving.”</div></div><div className="timeline">{milestones.map((m,i) => <div className={`milestone ${i===2?'current':''}`} key={m.name}><h3>{m.name}</h3><p>{m.text}</p><small>{m.status}</small></div>)}</div></div></section>
    <section id="contact" className="section"><div className="container contact-grid"><div className="contact-copy"><div className="profile-intro"><img className="profile-photo" src={profilePhoto.url} width={100} height={128} alt="Ahnaf Islam" loading="lazy"/><div><strong>Ahnaf Islam</strong><span>Aspiring Software Developer</span></div></div><div className="eyebrow">05 / Let's connect</div><h2 className="section-title">Let's build something<br />meaningful<span className="text-primary">.</span></h2><p>I'm always interested in learning, connecting with people, sharing ideas, and exploring opportunities to grow as a developer.</p><PortfolioContactLinks/><div className="contact-note">Good conversations are where great ideas begin.</div></div><PortfolioContactForm/></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><div className="footer-credit"><Code2 size={15}/> Designed and built by Ahnaf Islam.</div><span>© {new Date().getFullYear()} Ahnaf Islam</span><a href="#home">Back to top <ArrowUp size={13}/></a></div></footer>
    <Dialog open={selectedProject !== null} onOpenChange={open => { if (!open) setSelectedProject(null); }}><DialogContent className="bg-secondary"><DialogTitle className="font-display text-2xl">{selectedProject?.name}</DialogTitle><DialogDescription>{selectedProject?.description}</DialogDescription><h3 className="text-primary font-display">The learning focus</h3><p className="text-muted-foreground text-sm leading-relaxed">{selectedProject?.learning}</p>{selectedProject?.url && <Button asChild><a href={selectedProject.url} target="_blank" rel="noreferrer">Open live project <ArrowUpRight/></a></Button>}</DialogContent></Dialog>
  </>;
}
function ProjectPreview({ name, image }: { name: string; image: string | null }) {
  const preview = image === 'movies' ? moviesPreview : image === 'payoo' ? payooPreview : null;
  if (preview) return <img src={preview.url} alt={`Actual ${name} application interface`} width={1280} height={900} loading="lazy" />;
  return <div className="preview-pending"><ImageIcon size={35}/><span>{name} · Preview coming soon</span></div>;
}
