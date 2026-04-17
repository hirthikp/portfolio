import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Cpu, 
  Code2, 
  Database, 
  Trophy, 
  GraduationCap, 
  FileCheck,
  Brain,
  ChevronRight
} from "lucide-react";
import { resumeData } from "./data";
import resumePdf from "../cv.pdf";

const Section = React.forwardRef(({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon: any }, ref: any) => (
  <motion.section 
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-24"
  >
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-text-sub flex items-center gap-3">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
    {children}
  </motion.section>
));

const TagBadge = ({ name }: { name: string }) => (
  <span className="px-2 py-1 bg-white/5 border border-border rounded text-[10px] font-medium text-text-sub uppercase tracking-wider">
    {name}
  </span>
);

export default function App() {
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const resumeRef = useRef<HTMLElement>(null);
  const [hasPhotoError, setHasPhotoError] = useState(false);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToResume = () => {
    resumeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg selection:bg-accent/30 flex flex-col">
      <div className="fixed inset-0 sleek-grid pointer-events-none opacity-40" />

      {/* Navigation */}
      <nav className="h-20 flex justify-between items-center px-10 md:px-20 border-b border-border sticky top-0 bg-bg/80 backdrop-blur-md z-50">
        <div className="logo-gradient text-xl font-extrabold tracking-tighter cursor-default">
          HIRTHIK.DEV
        </div>
        <div className="hidden md:flex gap-10 font-medium text-sm text-text-sub">
          <span className="hover:text-text-main cursor-pointer transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</span>
          <span className="hover:text-text-main cursor-pointer transition-colors" onClick={scrollToProjects}>Projects</span>
          <span className="hover:text-text-main cursor-pointer transition-colors" onClick={scrollToSkills}>Skills</span>
          <span className="hover:text-text-main cursor-pointer transition-colors" onClick={scrollToAbout}>About</span>
        </div>
        <div className="flex gap-4">
          <a href={`https://${resumeData.github}`} target="_blank" rel="noopener noreferrer" className="p-2 border border-border rounded-lg text-text-sub hover:text-text-main hover:border-accent transition-all">
            <Github size={18} />
          </a>
          <a href={`https://${resumeData.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-2 border border-border rounded-lg text-text-sub hover:text-text-main hover:border-accent transition-all">
            <Linkedin size={18} />
          </a>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-7xl mx-auto px-10 md:px-20 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-20">
          {/* Hero Section */}
          <div className="flex flex-col justify-center sticky top-40 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-56 h-56 mb-8 rounded-3xl border border-border overflow-hidden bg-card-bg flex items-center justify-center">
                {!hasPhotoError ? (
                  <img
                    src="/IMG_7592.jpg"
                    alt={`${resumeData.name} profile`}
                    className="w-full h-full object-cover"
                    onError={() => setHasPhotoError(true)}
                  />
                ) : (
                  <span className="text-xs tracking-widest uppercase text-text-sub text-center px-6">
                    Add IMG_7592.jpg in public/
                  </span>
                )}
              </div>
              <div className="inline-block px-3 py-1.5 mb-6 rounded-full bg-accent-glow border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider">
                Available for New Opportunities
              </div>
              <h1 className="text-6xl md:text-[80px] font-extrabold mb-8 tracking-[-0.04em] leading-[1.05] text-text-main">
                {resumeData.name}
              </h1>
              <p className="text-lg text-text-sub leading-relaxed mb-10 max-w-md">
                A Junior Computer Science Engineer building AI experiments and robust backend architectures for impactful results.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button 
                  onClick={scrollToProjects}
                  className="px-8 py-3.5 bg-accent text-white rounded-xl font-semibold text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-accent/20 cursor-pointer"
                >
                  View Projects
                </button>
                <button
                  onClick={scrollToResume}
                  className="px-8 py-3.5 bg-transparent border border-border rounded-xl font-semibold text-sm hover:bg-white/5 transition-all text-center flex items-center justify-center cursor-pointer text-text-main"
                >
                  View Resume
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-text-sub text-sm">
                  <MapPin size={16} className="text-accent" />
                  {resumeData.location}
                </div>
                <div className="flex items-center gap-3 text-text-sub text-sm">
                  <Mail size={16} className="text-accent" />
                  {resumeData.email}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="space-y-32">
            {/* Skills */}
            <Section title="Key Expertise" icon={Code2} ref={skillsRef}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="sleek-card p-8">
                  <div className="w-10 h-10 bg-bg border border-border rounded-lg flex items-center justify-center mb-6">
                    <Brain size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">AI Systems</h3>
                  <p className="text-xs text-text-sub leading-relaxed mb-6">Building evaluation systems and intelligent automation platforms.</p>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.aiNlp.map(s => <React.Fragment key={s}><TagBadge name={s} /></React.Fragment>)}
                  </div>
                </div>
                <div className="sleek-card p-8">
                  <div className="w-10 h-10 bg-bg border border-border rounded-lg flex items-center justify-center mb-6">
                    <Database size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Backend Systems</h3>
                  <p className="text-xs text-text-sub leading-relaxed mb-6">PostgreSQL, Supabase, and FastAPI for real-world reliability.</p>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.backendCloud.slice(0, 3).map(s => <React.Fragment key={s}><TagBadge name={s} /></React.Fragment>)}
                  </div>
                </div>
                <div className="sleek-card p-8">
                  <div className="w-10 h-10 bg-bg border border-border rounded-lg flex items-center justify-center mb-6">
                    <Cpu size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Infrastructure</h3>
                  <p className="text-xs text-text-sub leading-relaxed mb-6">Docker and AWS deployments focusing on scalable containerized apps.</p>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.backendCloud.slice(3).map(s => <React.Fragment key={s}><TagBadge name={s} /></React.Fragment>)}
                  </div>
                </div>
                <div className="sleek-card p-8">
                  <div className="w-10 h-10 bg-bg border border-border rounded-lg flex items-center justify-center mb-6">
                    <GraduationCap size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Development</h3>
                  <p className="text-xs text-text-sub leading-relaxed mb-6">Modern frontend and core CS concepts like DSA and Cloud Arch.</p>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.languages.map(s => <React.Fragment key={s}><TagBadge name={s} /></React.Fragment>)}
                  </div>
                </div>
              </div>
            </Section>

            {/* Projects */}
            <Section title="Selected Works" icon={Cpu} ref={projectsRef}>
              <div className="space-y-6">
                {resumeData.projects.map((project, idx) => (
                  <div key={idx} className="sleek-card p-10 group relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                        <ChevronRight size={20} className="text-border group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </div>
                      <ul className="space-y-4 mb-8">
                        {project.description.map((point, pIdx) => (
                          <li key={pIdx} className="text-sm text-text-sub leading-relaxed flex gap-3">
                            <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => <React.Fragment key={t}><TagBadge name={t} /></React.Fragment>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Achievements */}
            <Section title="Experience Bar" icon={Trophy}>
              <div className="stats-bar sleek-card h-auto py-12 flex-wrap gap-y-10 px-6">
                <div className="text-center px-10 border-r border-border last:border-none border-dashed">
                  <span className="block text-4xl font-black text-text-main mb-1">8.42</span>
                  <span className="text-[10px] text-text-sub uppercase tracking-widest font-bold">GPA (SRM)</span>
                </div>
                <div className="text-center px-10 border-r border-border last:border-none border-dashed">
                  <span className="block text-4xl font-black text-text-main mb-1">10+</span>
                  <span className="text-[10px] text-text-sub uppercase tracking-widest font-bold">Certifications</span>
                </div>
                <div className="text-center px-10">
                  <span className="block text-4xl font-black truncate text-text-main mb-1">$1.5k</span>
                  <span className="text-[10px] text-text-sub uppercase tracking-widest font-bold">IEEE Grant</span>
                </div>
              </div>
            </Section>

            {/* Resume */}
            <Section title="Resume" icon={FileCheck} ref={resumeRef}>
              <div className="sleek-card p-6 md:p-8">
                <h3 className="text-lg font-bold mb-2">Resume Preview</h3>
                <p className="text-xs text-text-sub mb-6">Your CV is shown directly here for quick viewing.</p>
                <div className="rounded-xl overflow-hidden border border-border bg-black/20">
                  <iframe
                    src={resumePdf}
                    title="Hirthik P Resume"
                    className="w-full h-[70vh] min-h-[560px]"
                  />
                </div>
              </div>
            </Section>

            {/* Certifications */}
            <Section title="Certificates" icon={FileCheck}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {resumeData.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-card-bg border border-border hover:border-accent/40 transition-all group">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    <span className="text-xs font-semibold text-text-sub group-hover:text-text-main transition-colors">{cert}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* About */}
            <Section title="About" icon={GraduationCap} ref={aboutRef}>
              <div className="sleek-card p-8">
                <h3 className="text-lg font-bold mb-4">My Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-text-sub mb-6">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-accent" />
                    {resumeData.phone}
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-accent" />
                    {resumeData.email}
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin size={16} className="text-accent" />
                    {resumeData.linkedin}
                  </div>
                  <div className="flex items-center gap-3">
                    <Github size={16} className="text-accent" />
                    {resumeData.github}
                  </div>
                  <div className="flex items-center gap-3 md:col-span-2">
                    <GraduationCap size={16} className="text-accent" />
                    {resumeData.education[0].degree} • {resumeData.education[0].school} • {resumeData.education[0].gpa}
                  </div>
                </div>
                <p className="text-sm text-text-sub leading-relaxed mb-4">
                  I am a Computer Science Engineering student focused on AI and production-ready backend systems.
                  I enjoy building solutions that are both practical and impactful.
                </p>
                <p className="text-sm text-text-sub leading-relaxed">
                  Currently studying at {resumeData.education[0].school} ({resumeData.education[0].period}) with a GPA of {resumeData.education[0].gpa}.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </main>


      {/* Footer Stats Mock */}
      <div className="stats-bar border-t border-border mt-20 py-8 flex items-center justify-center gap-20">
        <div className="stat-item">
          <span className="block text-2xl font-black text-text-main">2027</span>
          <span className="text-[10px] text-text-sub uppercase tracking-widest">Graduation</span>
        </div>
        <div className="stat-item">
          <span className="block text-2xl font-black text-text-main">03+</span>
          <span className="text-[10px] text-text-sub uppercase tracking-widest">Major Projects</span>
        </div>
        <div className="stat-item">
          <span className="block text-2xl font-black text-accent">AI</span>
          <span className="text-[10px] text-text-sub uppercase tracking-widest">Specialization</span>
        </div>
      </div>
    </div>
  );
}

