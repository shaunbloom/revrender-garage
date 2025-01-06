import { BioContent, BioDescription, BioName, BioThumb, BioWrapper } from "./layout/index.jsx";

const Bios = ({
    onNavClick
    }) => {
    return (
        <>
          <BioWrapper>
            <BioThumb bio="shaun"/>
            <BioContent>
              <BioName>Shaun Bloom</BioName>
              <BioDescription>
                Shaun’s life has always been steeped in creativity, starting with a childhood surrounded by music from
                his musically gifted family. His artistic instincts led him to see everything as a canvas, fueling his
                passion for drawing detailed portraits of famous figures. This talent eventually turned into an online
                art business, where Shaun began selling his work to admirers worldwide.
              <p>
                As a child, Shaun’s love for building with Legos laid the foundation for a lifelong passion for creating.
                His fascination with computers started in middle school, learning BASIC programming, which later evolved
                into a career. After landing a job at Nintendo of America, Shaun was reintroduced to programming through
                HTML, paving the way for a 25-year career in software engineering.
              </p>
              <p>
                Seeking a more fulfilling and balanced life, Shaun traded his successful career to focus on designing
                and prototyping custom scooter parts, which led to a the creation of the YouTube channel he co-hosts with his
                brother Shain and Austin. Driven by his dream of building a successful channel, Shaun’s story is still
                unfolding—one creative project at a time.
              </p>
              </BioDescription>
            </BioContent>
          </BioWrapper>
          <BioWrapper>
            <BioThumb bio="shain"/>
            <BioContent>
              <BioName>Shain Bloom</BioName>
              <BioDescription>Shain Bloom is a passionate individual whose life has been shaped by a deep love for music
                 and a newfound fascination with mechanics. From a young age, Shane found solace and inspiration in
                 melodies, rhythms, and harmonies, often using music as a way to connect with others and express himself.
                 Whether playing an instrument, curating playlists, or attending live performances, music has remained
                 a cornerstone of his identity.

                 <p>
                   Later in life, Shane discovered a surprising love for tinkering and mechanical projects. Drawn to the
                   intricacies of how things work, he began experimenting with tools, fixing gadgets, and restoring old
                   machinery. This hands-on approach allowed him to merge creativity with problem-solving, bringing a
                   sense of accomplishment and joy.</p>

                 <p>
                   Today, Shane balances his two passions, finding harmony between the artistry of music and the precision
                   of mechanics, always eager to explore, learn, and create.
                </p>
              </BioDescription>
            </BioContent>
          </BioWrapper>
          <BioWrapper>
            <BioThumb bio="austin"/>
            <BioContent>
              <BioName>Austin Morales</BioName>
              <BioDescription>
                From a young age, Austin was drawn to Hot Wheels, RC cars, planes, and boats—anything that moved fast
                instantly caught his attention. As he grew older and earned his driver’s license, his fascination
                naturally expanded to cars and motorcycles. At 18, he obtained his motorcycle endorsement and bought his
                first street bike, igniting a lifelong passion for two-wheeled adventures.

              <p>
                Today, Austin rides a Harley and treasures his collection of Maddog scooters. On the car side, he has a
                deep appreciation for JDM-style cars but admires any well-crafted vehicle. His love for cars sparked a
                keen interest in motors, wiring, and all things automotive. While he has parted with some of his prized
                cars, Austin looks forward to the next exciting project. For now, his creative energy is focused on
                customizing scooters and motorcycles, continuing to fuel his passion for all things fast and mechanical.
              </p>
              </BioDescription>
            </BioContent>
          </BioWrapper>
        </>
    )
}

export default Bios;