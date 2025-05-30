// src/components/TeamSection.jsx
import TeamMemberCard from "./TeamMemberCard";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alejandro Azamar",
      role: "Desarrollador Backend",
      email: "ajeronimo@ucol.mx",
      speciality: "Arquitectura de Backend",
      avatar: "🖥️",
      badges: [
        `https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220`,
        `https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white`,
        `https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white`,
        `https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E`,
        `https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white`
      ]
    },
    {
      name: "Hector Figueroa",
      role: "Desarrollador Frontend",
      email: "hmartinez10@ucol.mx",
      speciality: "Diseño y Desarrollo UI/UX",
      avatar: "🎨",
      badges: [
        `https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220`,
        `https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E`,
        `https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB`,
        `https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white`,
        `https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white`,
        `https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white`
      ]
    },
    {
      name: "Citlaly Lopez",
      role: "Desarrollo Móvil",
      email: "csamano@ucol.mx",
      speciality: "Diseño y Desarrollo UI/UX",
      avatar: "📱",
      badges: [
        `https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220`,
        `https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white`,
        `https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB`,
        `https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB`,
        `https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black`,
        `https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37`,
      ]
    },
    {
      name: "Fernando Trujillo",
      role: "Desarrollador Frontend",
      email: "furibe1@ucol.mx",
      speciality: "Apoyo en Desarrollo Frontend",
      avatar: "💻",
      badges: [
        `https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E`,
        `https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB`,
        `https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white`,
      ]
    },
    {
      name: "Saul Bernabe",
      role: "Documentador y Generador de Ideas",
      email: "sbustamante@ucol.mx",
      speciality: "Documentación y Propuestas Creativas",
      avatar: "📝",
      badges: [
        `https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220`,
        `https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white`,
      ]
    }
  ];

  return (
    <section className="team-section">
      <h2 className="section-title">
        <span className="section-icon">👥</span>
        Conoce al Equipo
      </h2>
      
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
