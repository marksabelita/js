const people = [
  {
    name: 'Arisa',
    department: 'BP',
    gender: 'F'
  },{
    name: 'Ham',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Alice',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Anna',
    department: 'DA',
    gender: 'F'
  },
  {
    name: 'Larry',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Ria',
    department: 'Sales',
    gender: 'F'
  },
  {
    name: 'JD',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Thor',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Karl',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Rachel',
    department: 'Sales',
    gender: 'F'
  }
];

const listByGender = (gender) => {
  return people.filter(element => element.gender === gender);
}

const groupByDepartment = () => {
  return people.reduce((departments, person) => {
    const { department, name, gender }  = person;
    departments[department] = [ ...departments[department] || [],
    {
      name,
      gender
    }];
    return departments;
  }, {});
}


console.log(listByGender('M'));
console.log(listByGender('F'));
console.log(groupByDepartment());
