const ProjectViews = self => ({
  projectList(query) {
    return self.projects.values().filter(project => {
      return (
        ((query._id == undefined || query._id == '') ? true : project._id == query._id) &&
        ((query.author == undefined || query.author == '') ? true : project.author == query.author) &&
        ((query.demoLink == undefined || query.demoLink == '') ? true : project.demoLink == query.demoLink) &&
        ((query.description == undefined || query.description == '') ? true : project.description == query.description) &&
        ((query.authorLink == undefined || query.authorLink == '') ? true : project.authorLink == query.authorLink) &&
        ((query.githubLink == undefined || query.githubLink == '') ? true : project.githubLink == query.githubLink) &&
        ((query.project == undefined || query.project == '') ? true : project.project == query.project) &&
        ((query.status == undefined || query.status == '') ? true : project.status == query.status) &&
        ((query.technologies == undefined || query.technologies == '') ? true : project.technologies == query.technologies)
      )
    });
  },
});

export default ProjectViews;
