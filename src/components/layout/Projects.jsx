import React from "react";
import firebase from "../../config/firebaseConfig";

const Projects = () => {
  const [projects, setProjects] = React.useState();

  React.useEffect(() => {
    const firestore = firebase.firestore();
    const projectsRef = firestore.collection("projects");
    projectsRef
      .get()
      .then((querySnapshot) => {
        setProjects(
          querySnapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          })
        );
      })
      .catch((err) => {
        console.log("Error getting documents: ", err);
      });
  }, []);

  const renderProjects = () => {
    let jsxData;
    if (projects) {
      jsxData = projects.map((project, index) => {
        return (
          <div key={index} className="card mb-3">
            <h3 className="card-header">
              {project.name ? project.name : "Unavailable"}
            </h3>
            {project.video ? (
              <video
                alt="project preview"
                width="100%"
                height="450px"
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline
                controls
              >
                <source src={project.video} type="video/mp4" />
              </video>
            ) : project.image ? (
              <img alt="project preview" height="450px" src={project.image} />
            ) : (
              <img
                alt="project preview"
                height="450px"
                src="https://www.radiationreport.com/wp-content/uploads/2013/08/no-preview.jpg"
              />
            )}
            <div className="card-body">
              <p className="card-text">
                {project.desc ? project.desc : "Unavailable"}
              </p>
            </div>
            <div className="card-body">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Project Link
                </a>
              ) : (
                <a href="/projects" className="card-link">
                  Project Link
                </a>
              )}
            </div>
          </div>
        );
      });
    }
    return jsxData;
  };

  return (
    <div className="Projects-wrapper">
      <h1 className="text-center" style={{ marginBottom: "50px" }}>
        Featured Projects
      </h1>
      <div className="projects-container">{renderProjects()}</div>
    </div>
  );
};

export default Projects;
