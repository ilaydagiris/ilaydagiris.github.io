"use client";

// GitHub Logo SVG component
const GitHubIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

// LinkedIn Logo SVG component
const LinkedInIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Email Icon SVG component
const EmailIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

export default function Home() {
  const contactInfo = [
    {
      icon: <GitHubIcon />,
      label: "GitHub",
      value: "@ilaydagiris",
      link: "https://github.com/ilaydagiris",
      color: "text-purple-300"
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      value: "İlayda Giriş",
      link: "https://linkedin.com/in/ilayda-giris",
      color: "text-blue-300"
    },
    {
      icon: <EmailIcon />,
      label: "Email",
      value: "ilaydagiris@gmail.com",
      link: "mailto:ilaydagiris@gmail.com",
      color: "text-green-300"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-10 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-blue-300">İlayda GİRİŞ</h1>
          <p className="text-xl text-gray-300">
            Software Development Engineer
          </p>
        </div>

        <div className="mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            Proficient in Groovy and Java, with hands-on experience in analyzing scalable API services using cloud-based architecture. 
            Passionate about data-driven solutions, performance optimization, and cross-functional collaboration.
            Dedicated to delivering high-quality software solutions while continuously exploring new technologies.
          </p>
        </div>

        <div className="space-y-4">
          {contactInfo.map((contact) => (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-[#1A2333] p-4 rounded-xl border border-[#2A3343] hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className={`${contact.color}`}>
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    <p className={`text-lg font-semibold ${contact.color}`}>
                      {contact.value}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
