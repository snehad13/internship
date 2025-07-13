import Head from 'next/head';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  /* ----------  PUT YOUR REAL DATA HERE  ---------- */
  const projects = [
    {
      title: 'MindEase – Mental Wellness Chatbot',
      desc: 'AI‑powered chatbot that tracks moods and gives personalised support using OpenAI + Flask + React.',
      link: 'https://github.com/snehad13/mindease',
    },
    {
      title: 'Explore Pune – Local Guide',
      desc: 'Java console app to browse & vote best hangout spots; persists data to CSV.',
      link: 'https://github.com/snehad13/explore‑pune',
    },
    {
      title: 'ASD Early‑Detection ML Pipeline',
      desc: 'Multimodal CNN‑LSTM model combining fMRI, eye‑tracking & questionnaire data.',
      link: '#', // add real link or demo
    },
  ];

  const education = [
    {
      place: 'Indian Institute of Information Technology, Pune',
      detail: 'B.Tech CSE (2023 – Present)',
      extra: 'CGPA 9.04',
    },
    { place: 'Class XII – CBSE', detail: '2023', extra: '93 %' },
    { place: 'Class X – ICSE', detail: '2021', extra: '94.40 %' },
  ];

  const skills = [
    'C++, Java, Python, JavaScript',
    'React.js, HTML, CSS',
    'NLP, LLMs, scikit‑learn, neural networks',
    'CodeForces 🌟🌟 & CodeChef 🌟🌟🌟',
    'ML Specialization – Stanford (Andrew Ng)',
  ];
  /* ------------------------------------------------ */

  return (
    <>
      <Head>
        <title>Sneha | Portfolio</title>
        <meta name="description" content="Sneha Devnani's developer portfolio" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-900 font-poppins scroll-smooth">

        {/* Hero */}
        <section className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 animate-fadeIn">
            Hi, I'm Sneha
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mt-4">
            I build beautiful UIs with React & Next.js
          </p>
          <a
            href="#projects"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            🌟 See My Work
          </a>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white/60 backdrop-blur rounded-xl p-8 shadow-md">
            <img src="/profile.jpg" alt="Sneha" className="w-40 h-40 rounded-full object-cover shadow-md" />
            <div>
              <h2 className="text-3xl font-semibold text-blue-700 mb-4">About Me</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Frontend developer & ML enthusiast who loves turning ideas into pixel‑perfect products.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">🎓 Education</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-800 text-lg">
              {education.map((e) => (
                <li key={e.place}>
                  <strong>{e.place}</strong> — {e.detail} {e.extra && <>| <strong>{e.extra}</strong></>}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">💻 Skills & Achievements</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-800 text-lg">
              {skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-blue-700 mb-10">🚀 Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <h3 className="text-xl font-bold mb-2 text-blue-700">{p.title}</h3>
                  <p className="text-gray-600 mb-4">{p.desc}</p>
                  <a href={p.link} target="_blank" className="text-blue-500 hover:underline">🔗 View Project</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-200 to-purple-200 py-8 text-center">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Let’s Connect</h3>
          <div className="flex justify-center gap-6 text-2xl mt-4">
            <a href="https://github.com/snehad13" className="text-gray-700 hover:text-black" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/snehadevnani" className="text-blue-700 hover:text-blue-900" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
          <p className="mt-4 text-sm text-gray-600">© 2025 Sneha Devnani</p>
        </footer>
      </main>
    </>
  );
}
