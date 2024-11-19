import React from 'react';

const Aboutt = () => {
  const developers = [
    {
      name: 'Shivam Singh',
      enrollment: '221B355',
      email: '221B355@juetguna.in',
      university: 'Jaypee University of Engineering and Technology, Guna',
      role: 'Machine Learning Model Developer',
      description:
        'Shivam has worked extensively on building and fine-tuning the machine learning model for this project, ensuring high accuracy and efficient predictions.',
      image: '/shi.jpg', // Corrected path
    },
    {
      name: 'Shubham Kumar',
      enrollment: '221B379',
      email: '221B379@juetguna.in',
      university: 'Jaypee University of Engineering and Technology, Guna',
      role: 'Frontend Developer',
      description:
        'Shubham has contributed significantly to the frontend of this project, creating an intuitive user interface to ensure a seamless user experience.',
      image: '/shu.jpg', // Corrected path
    },
    {
      name: 'Utsav Rai',
      enrollment: '221B425',
      email: '221B425@juetguna.in',
      university: 'Jaypee University of Engineering and Technology, Guna',
      role: 'Backend and Frontend Developer',
      description:
        'Utsav has worked on both the backend and frontend, integrating APIs and ensuring seamless communication between the server and the client side.',
      image: '/pic.jpg', // Corrected path
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        {/* Project Description */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg">
            <strong>PneumoniaScan</strong> is a web application designed to assist healthcare professionals
            in diagnosing pneumonia through X-ray image analysis. Utilizing advanced machine learning
            algorithms, this app provides quick and reliable predictions to enhance medical decision-making.
          </p>
        </div>

        {/* Developer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {developers.map((developer, index) => (
    <div key={index} className="bg-blue-600 text-white rounded-lg p-6 shadow-lg">
      <img
        src={developer.image}
        alt={developer.name}
        className="w-full h-48 object-contain rounded-lg mb-4" // Updated to 'object-contain'
      />
      <h2 className="text-xl font-bold mb-2">{developer.name}</h2>
      <p>
        <strong>Enrollment No.:</strong> {developer.enrollment}
        <br />
        <strong>Email:</strong> {developer.email}
        <br />
        <strong>University:</strong> {developer.university}
      </p>
      <p className="mt-4 text-sm">{developer.description}</p>
    </div>
  ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutt;
