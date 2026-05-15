import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Microscope, 
  FileText, 
  ClipboardCheck, 
  Award, 
  Mail, 
  ExternalLink, 
  CheckCircle2, 
  Menu, 
  X,
  Dna,
  FlaskConical,
  GraduationCap,
  Building2,
  Calendar,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Types
interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

// Data
const EXPERIENCE: ExperienceItem[] = [
  {
    company: "글로벌 바이오 제약 (Global Bio-Pharm)",
    role: "Senior Quality Assurance Specialist",
    period: "2021.03 - 현재",
    description: [
      "GMP 가이드라인에 따른 품질 경영 시스템(QMS) 고도화 및 운영",
      "정기 및 수시 내부 감사(Internal Audit) 주도 및 부적합 사항 시정 조치(CAPA) 관리",
      "SOP 제/개정 관리 및 임직원 GMP 교육 담당",
      "해외 규제 기관(FDA, EMA) 실사(Inspection) 대응 및 문서 준비"
    ]
  },
  {
    company: "미래 메디컬 랩 (Future Medical Lab)",
    role: "QC Analyst",
    period: "2018.06 - 2021.02",
    description: [
      "HPLC, GC 등을 활용한 원료 및 완제품 이화학 분석 수행",
      "분석법 밸리데이션(Method Validation) 및 기술 이전(Tech-Transfer) 참여",
      "LIMS(실험실 정보 관리 시스템) 데이터 입력 및 성적서 발행",
      "실험실 기기 유지보수 및 적격성 평가(IQ/OQ/PQ) 수행"
    ]
  }
];

const SKILLS: SkillCategory[] = [
  {
    title: "Quality Assurance",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    skills: ["GMP/ICH Guidelines", "CAPA & Deviation", "Change Control", "Risk Management"]
  },
  {
    title: "Quality Control",
    icon: <Microscope className="w-6 h-6 text-blue-600" />,
    skills: ["HPLC / GC / UV-Vis", "Physical Testing", "Method Validation", "Lab Safety"]
  },
  {
    title: "Documentation",
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    skills: ["SOP Authoring", "Global Regulatory Compliance", "Data Integrity", "Audit Readiness"]
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">QCQA Portfolio</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 md:hidden shadow-xl"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-600"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>Bio-Pharmaceutical QC/QA Professional</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                품질로 증명하는 <br />
                <span className="text-gradient underline decoration-blue-200 decoration-8 underline-offset-4">신뢰와 안전성</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg mb-8">
                5년 이상의 제약 산업 경력을 바탕으로 GMP 규제 준수와 
                엄격한 품질 관리를 통해 인류의 건강한 미래를 설계합니다.
                정확한 분석과 혁신적인 QMS 개선을 지향합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#experience" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl shadow-slate-200 hover:bg-blue-700 transition-all flex items-center gap-2">
                  경력사항 보기 <ChevronDown className="w-4 h-4" />
                </a>
                <a href="#contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-all">
                  상담 요청
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden relative border-4 border-white shadow-2xl">
                {/* Placeholder for professional portrait or lab image */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                   <Dna className="w-32 h-32 text-blue-200 animate-pulse" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-2xl">
                   <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">QA</div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">홍길동</div>
                        <div className="text-xs text-slate-500 font-medium">Quality Assurance Specialist</div>
                      </div>
                   </div>
                   <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                      <span>Certified GMP Auditor</span>
                      <span>Verified</span>
                   </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600 rounded-full blur-3xl opacity-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Quick Info */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Experience', val: '5+ Years' },
              { label: 'Audits Managed', val: '12+' },
              { label: 'SOPs Established', val: '40+' },
              { label: 'Inspection Record', val: '100% Pass' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.val}</div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Expertise</h2>
            <p className="text-slate-500 font-medium italic">품질 보증 및 관리 전문 역량</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all group"
              >
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{item.title}</h3>
                <ul className="space-y-3">
                  {item.skills.map((skill, si) => (
                    <li key={si} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-slate-500 font-medium">제약바이오 업계 실무 성과</p>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-px" />
                
                <div className={`md:flex items-center gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="md:w-1/2 p-8 glass-card rounded-3xl relative z-10">
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                      {exp.period}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-slate-500 font-medium mb-6 text-sm">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((desc, di) => (
                        <li key={di} className="text-sm text-slate-600 leading-relaxed flex gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Icon on Line */}
                  <div className="absolute left-0 md:left-1/2 top-10 md:top-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-lg z-20 -translate-x-1.5 md:-translate-y-2 md:-translate-x-2" />

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-slate-900 text-white"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="text-blue-400 font-bold text-sm mb-1">2012.03 - 2018.02</div>
                  <div className="text-xl font-bold mb-1">바이오공학과 (생명공학 학사)</div>
                  <div className="text-white/60 font-medium">대한대학교 공과대학</div>
                </div>
                <div className="h-px bg-white/10 w-full" />
                <div className="p-4 bg-white/5 rounded-2xl italic text-sm text-white/70">
                  "식품의약품안전처 대학생 인턴십 과정 수료 (품질 관리 부문)"
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-3xl border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-50 rounded-2xl">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
                </div>
                <div className="grid gap-4">
                  {[
                    "GMP Professional Certification (KPMA)",
                    "Chemical Analysis Engineer (화학분석기사)",
                    "ISO 9001 Lead Auditor Certificate",
                    "English: OPIc AL / TOEIC 945"
                  ].map((cert, ci) => (
                    <div key={ci} className="flex items-center gap-4 p-4 rounded-xl border border-slate-50 font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Let's improve health together.</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto">
              고품질 의약품 제조를 위한 품질 경영 파트너를 찾으신다면 
              언제든 편하게 연락 주시기 바랍니다.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <a href="mailto:contact@bio-portfolio.com" className="group flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all w-full max-w-md">
                <div className="p-4 bg-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Email Address</div>
                  <div className="text-lg font-bold">contact@bio-portfolio.com</div>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-600 ml-auto" />
              </a>

              <div className="flex gap-4">
                {['LinkedIn', 'Resume ダウン', 'Portfolio PDF'].map((btn) => (
                  <button key={btn} className="px-6 py-3 rounded-xl border border-white/10 text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all">
                    {btn}
                  </button>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-slate-900">QCQA Portfolio</span>
          </div>
          <div className="text-slate-400 text-xs font-medium">
            © 2026 Bio-Pharm Specialist Portfolio. Built for excellence in GMP.
          </div>
        </div>
      </footer>
    </div>
  );
}
