export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-2xl">
      <h1 className="text-3xl font-bold">About Me</h1>
      
      <section className="space-y-4">
        <p className="text-lg">
          I'm an educational ethnographer and qualitative researcher focused on the learning, 
          literacy, and identity practices of youth and educators from PreK-12.
        </p>
        <p>
          Currently, I am an assistant professor of digital media and learning at University 
          of Pittsburgh's School of Education. In my role I coordinate the MEd in Curriculum 
          & Instruction, STEAM, and CriT-DML certificate programs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Current Work</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Imagination PLAYce</h3>
            <p className="mt-2">
              I founded and currently run Imagination PLAYce at the University of Pittsburgh's 
              School of Education.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Latest Publication</h3>
            <p className="mt-2">
              My most recent book, "Care-Based Methodologies: Reimagining Qualitative Research 
              With Youth in US Schools" is now available.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Areas of Focus</h2>
        <div className="flex gap-2 flex-wrap">
          {[
            'Educational Ethnography',
            'Qualitative Research',
            'Digital Media and Learning',
            'Youth Studies',
            'PreK-12 Education',
            'STEAM Education'
          ].map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
} 