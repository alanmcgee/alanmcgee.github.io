import Image from 'next/image'
import { Twitter, GraduationCap, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="mt-16">
      <div className="mx-auto max-w-2xl px-4">
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="flex-none">
              <Image
                src="/vv-profile.jpeg"
                alt="Veena Vasudevan"
                width={128}
                height={128}
                className="rounded-full bg-zinc-100 object-cover"
                priority
              />
            </div>
            <div className="flex-1">
              <div className="mt-3">
                <p className="text-xl font-medium text-zinc-600">
                  Assistant Professor of Digital Media and Learning
                </p>
                <p className="text-lg font-light text-zinc-500">
                  University of Pittsburgh School of Education
                </p>
                <div className="mt-4 flex gap-6">
                  <a
                    href="https://scholar.google.com/citations?user=_JpypCEAAAAJ"
                    className="text-zinc-400 hover:text-teal-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Google Scholar</span>
                    <GraduationCap className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/veenavasudevan/"
                    className="text-zinc-400 hover:text-teal-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:veena.vasudevan@gmail.com"
                    className="text-zinc-400 hover:text-teal-600"
                  >
                    <span className="sr-only">Email</span>
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/veenav"
                    className="text-zinc-400 hover:text-teal-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 text-base text-zinc-600">
            <p>
              I'm an educational ethnographer and qualitative researcher focused on 
              the learning, literacy, and identity practices of youth and educators 
              from PreK-12.
            </p>

            <p>
              Currently, I am an assistant professor of digital media and learning at 
              University of Pittsburgh's School of Education. In my role I coordinate 
              the <a href="https://www.education.pitt.edu/program/med-in-curriculum-and-instruction/" className="text-teal-500 hover:text-teal-600">MEd in Curriculum & Instruction</a>, <a href="https://www.education.pitt.edu/program/steam-education-certificate/" className="text-teal-500 hover:text-teal-600">STEAM</a>, and <a href="https://www.education.pitt.edu/program/critical-technology-and-digital-media-for-learning-certificate/" className="text-teal-500 hover:text-teal-600">CriT-DML</a> certificate 
              programs. I also founded and run <a href="https://www.education.pitt.edu/centers-and-engagement/centers-projects/imagination-playce/" 
              className="text-teal-500 hover:text-teal-600">Imagination PLAYce</a>.
            </p>

            <p>
              My most recent book, <a href="https://www.amazon.com/Care-Based-Methodologies-Reimagining-Qualitative-Research/dp/1975504518" 
              className="italic text-teal-500 hover:text-teal-600">Care-Based Methodologies: 
              Reimagining Qualitative Research With Youth in US Schools</a> is now 
              available.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
