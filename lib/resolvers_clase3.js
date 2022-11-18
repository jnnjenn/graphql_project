'use strict'

const courses = [
  {
    _id: 'anyId',
    title: 'Mi titulo 1',
    teacher: 'Mi profesor 1',
    description: 'Una descripcion 1',
    topic: 'programacion'
  },
   {
    _id: 'anyId',
    title: 'Mi titulo 2',
    teacher: 'Mi profesor 2',
    description: 'Una descripcion 2',
    topic: 'programacion'
  },
   {
    _id: 'anyId',
    title: 'Mi titulo 3',
    teacher: 'Mi profesor 3',
    description: 'Una descripcion 3',
    topic: 'programacion'
  }
];

const resolvers = {
    Query: {
        getCourses: () => courses
        //getCourse: (_, { id }) => mockCourses.find(course => course._id === id),
    },
};

module.exports = resolvers;