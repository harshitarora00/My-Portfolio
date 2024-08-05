import React from "react";

const Tools = () => {
  return (
    <div className="skills--content">
      <div className="skills--box">
        <div className="skills--group">
          <div className="skills--data">
            <i class="devicon-git-plain colored"></i>
            <div>
              <h3 className="skills--name">Git/GitHub</h3>
            </div>
          </div>
          <div className="skills--data">
            <i class="devicon-tailwindcss-plain"></i>
            <div>
              <h3 className="skills--name">Tailwind CSS</h3>
            </div>
          </div>
        </div>
        <div className="skills--group">
          <div className="skills--data">
            <i class="devicon-bootstrap-plain colored"></i>
            <div>
              <h3 className="skills--name">Bootstrap</h3>
            </div>
          </div>
          <div className="skills--data">
            <i class="devicon-react-original colored"></i>
            <div>
              <h3 className="skills--name">React</h3>
            </div>
          </div>
          <div className="skills--data">
            <i class="devicon-nextjs-plain"></i>

            <div>
              <h3 className="skills--name">Nextjs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
