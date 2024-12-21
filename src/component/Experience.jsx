const Experience = (props) => {
  const { profile } = props;


  
  return (
    <div className="flex p-2">
      <div className="p-2">{profile.duration}</div>
      <div className="text-left p-2">
        personal project & group project
        <div className="p-1">Software Park CodeCamp#12</div>
        <div className="p-1">
          Personal Project E-commerce Website: Meow Shop Online Store and I
          collaborated with a team to create an Airbnb Clone website, where I
          was primarily responsible for UI design and frontend
          development.Developed using React, JavaScript, Node.js, Tailwind CSS,
          and MySQL Workbench. APIs were tested using Postman.
        </div>
      </div>
    </div>
  );
};

export default Experience;
