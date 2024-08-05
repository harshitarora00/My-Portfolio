import React from "react";

const Frameworks = () => {
  return (
    <div className="skills--content">
      <div className="skills--box">
        <div className="skills--group">
          <div className="skills--data">
            <i class="devicon-nodejs-plain colored"></i>

            <div>
              <h3 className="skills--name">Node.JS</h3>
            </div>
          </div>
          <div className="skills--data">
            <i class="fa-solid fa-laptop-code"></i>
            <div>
              <h3 className="skills--name">OOPs</h3>
            </div>
          </div>
          <div className="skills--data">
            <i class="devicon-mongodb-plain colored"></i>
            <div>
              <h3 className="skills--name">MongoDB</h3>
            </div>
          </div>
        </div>
        <div className="skills--group">
          <div className="skills--data">
            <i class="fa-solid fa-brain"></i>
            <div>
              <h3 className="skills--name">DSA</h3>
            </div>
          </div>

          <div className="skills--data">
            <i class="devicon-express-original"></i>

            <div>
              <h3 className="skills--name">Express.js</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
