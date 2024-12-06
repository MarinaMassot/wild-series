import type React from "react";
import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  genre: string;
}

const ProgramsPage: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>impossible de charger la liste</div>;
  }

  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>{program.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramsPage;
