import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

const offices = [
  {
    id: 1,
    name: "Main Office",
    description: "Headquarters",
    occupants: 10,
    selectedColor: 9,
    phoneNumber: "123 456 7890",
    address: "123 Main St, Cityville, Country",
    email: "mainoffice@company.com",
    capacity: 20,
    staffMembersInOffice: [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        position: "Manager",
        email: "john.doe@company.com",
        imageId: 1,
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        position: "Administrator",
        email: "jane.smith@company.com",
        imageId: 2,
      },
      {
        id: 3,
        firstName: "Emily",
        lastName: "Johnson",
        position: "Accountant",
        email: "emily.johnson@company.com",
        imageId: 3,
      },
      {
        id: 4,
        firstName: "Daniel",
        lastName: "Martinez",
        position: "HR Manager",
        email: "daniel.martinez@company.com",
        imageId: 4,
      },
      {
        id: 5,
        firstName: "Nina",
        lastName: "Williams",
        position: "Marketing Specialist",
        email: "nina.williams@company.com",
        imageId: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Branch A",
    description: "Downtown office",
    occupants: 5,
    selectedColor: 2,
    phoneNumber: "234 567 8901",
    address: "456 Elm St, Downtown, Country",
    email: "brancha@company.com",
    capacity: 10,
    staffMembersInOffice: [
      {
        id: 4,
        firstName: "Alice",
        lastName: "Brown",
        position: "Team Lead",
        email: "alice.brown@company.com",
        imageId: 4,
      },
      {
        id: 5,
        firstName: "Bob",
        lastName: "White",
        position: "Developer",
        email: "bob.white@company.com",
        imageId: 5,
      },
      {
        id: 6,
        firstName: "Rachel",
        lastName: "Lee",
        position: "Graphic Designer",
        email: "rachel.lee@company.com",
        imageId: 6,
      },
      {
        id: 7,
        firstName: "Marcus",
        lastName: "King",
        position: "Sales Representative",
        email: "marcus.king@company.com",
        imageId: 1,
      },
    ],
  },
  {
    id: 3,
    name: "Branch B",
    description: "Suburban office",
    occupants: 8,
    selectedColor: 5,
    phoneNumber: "345 678 9012",
    address: "789 Oak St, Suburbia, Country",
    email: "branchb@company.com",
    capacity: 8,
    staffMembersInOffice: [
      {
        id: 6,
        firstName: "Catherine",
        lastName: "Green",
        position: "Designer",
        email: "catherine.green@company.com",
        imageId: 1,
      },
      {
        id: 3,
        firstName: "David",
        lastName: "Black",
        position: "Engineer",
        email: "david.black@company.com",
        imageId: 2,
      },
      {
        id: 8,
        firstName: "Olivia",
        lastName: "Wilson",
        position: "Customer Support",
        email: "olivia.wilson@company.com",
        imageId: 3,
      },
      {
        id: 9,
        firstName: "Henry",
        lastName: "Adams",
        position: "Project Manager",
        email: "henry.adams@company.com",
        imageId: 4,
      },
    ],
  },
  {
    id: 4,
    name: "Branch C",
    description: "Rural office",
    occupants: 3,
    selectedColor: 7,
    phoneNumber: "456 789 0123",
    address: "101 Pine St, Countryside, Country",
    email: "branchc@company.com",
    capacity: 15,
    staffMembersInOffice: [
      {
        id: 8,
        firstName: "Evelyn",
        lastName: "Gray",
        position: "Supervisor",
        email: "evelyn.gray@company.com",
        imageId: 3,
      },
      {
        id: 9,
        firstName: "Frank",
        lastName: "Blue",
        position: "Assistant",
        email: "frank.blue@company.com",
        imageId: 4,
      },
      {
        id: 10,
        firstName: "Grace",
        lastName: "Taylor",
        position: "Operations Manager",
        email: "grace.taylor@company.com",
        imageId: 5,
      },
    ],
  },
  {
    id: 5,
    name: "TechCorp",
    description: "Technology innovation hub",
    occupants: 25,
    selectedColor: 4,
    phoneNumber: "567 890 1234",
    address: "202 Innovation Dr, Silicon City, Country",
    email: "info@techcorp.com",
    capacity: 30,
    staffMembersInOffice: [
      {
        id: 10,
        firstName: "Greg",
        lastName: "Watson",
        position: "CTO",
        email: "greg.watson@techcorp.com",
        imageId: 6,
      },
      {
        id: 11,
        firstName: "Lisa",
        lastName: "Carter",
        position: "Product Manager",
        email: "lisa.carter@techcorp.com",
        imageId: 6,
      },
      {
        id: 12,
        firstName: "Tom",
        lastName: "Adams",
        position: "Software Engineer",
        email: "tom.adams@techcorp.com",
        imageId: 1,
      },
      {
        id: 13,
        firstName: "Zoe",
        lastName: "Morris",
        position: "Business Analyst",
        email: "zoe.morris@techcorp.com",
        imageId: 2,
      },
    ],
  },
  {
    id: 6,
    name: "Green Solutions",
    description: "Sustainability-focused office",
    occupants: 12,
    selectedColor: 6,
    phoneNumber: "678 901 2345",
    address: "303 Eco St, Greenfield, Country",
    email: "contact@greensolutions.com",
    capacity: 18,
    staffMembersInOffice: [
      {
        id: 13,
        firstName: "Anna",
        lastName: "Clark",
        position: "Environmental Scientist",
        email: "anna.clark@greensolutions.com",
        imageId: 3,
      },
      {
        id: 14,
        firstName: "Brian",
        lastName: "Hall",
        position: "Project Coordinator",
        email: "brian.hall@greensolutions.com",
        imageId: 4,
      },
      {
        id: 15,
        firstName: "David",
        lastName: "Jensen",
        position: "Sustainability Analyst",
        email: "david.jensen@greensolutions.com",
        imageId: 5,
      },
    ],
  },
  {
    id: 7,
    name: "HealthFirst",
    description: "Medical technology company",
    occupants: 20,
    selectedColor: 3,
    phoneNumber: "789 012 3456",
    address: "404 Health St, MedCity, Country",
    email: "support@healthfirst.com",
    capacity: 25,
    staffMembersInOffice: [
      {
        id: 15,
        firstName: "Laura",
        lastName: "Morris",
        position: "Health Advisor",
        email: "laura.morris@healthfirst.com",
        imageId: 6,
      },
      {
        id: 16,
        firstName: "James",
        lastName: "Taylor",
        position: "Technician",
        email: "james.taylor@healthfirst.com",
        imageId: 6,
      },
      {
        id: 17,
        firstName: "Sophia",
        lastName: "Harris",
        position: "Lab Analyst",
        email: "sophia.harris@healthfirst.com",
        imageId: 1,
      },
      {
        id: 18,
        firstName: "Oliver",
        lastName: "Parker",
        position: "Medical Researcher",
        email: "oliver.parker@healthfirst.com",
        imageId: 2,
      },
    ],
  },
  {
    id: 8,
    name: "FinTech Innovations",
    description: "Finance technology solutions",
    occupants: 18,
    selectedColor: 8,
    phoneNumber: "890 123 4567",
    address: "505 Finance St, FinCity, Country",
    email: "contact@fintech.com",
    capacity: 22,
    staffMembersInOffice: [
      {
        id: 19,
        firstName: "Charlotte",
        lastName: "Moore",
        position: "Financial Analyst",
        email: "charlotte.moore@fintech.com",
        imageId: 3,
      },
      {
        id: 20,
        firstName: "Lucas",
        lastName: "Scott",
        position: "Lead Developer",
        email: "lucas.scott@fintech.com",
        imageId: 4,
      },
      {
        id: 21,
        firstName: "Samantha",
        lastName: "Mitchell",
        position: "Product Designer",
        email: "samantha.mitchell@fintech.com",
        imageId: 5,
      },
    ],
  },
];

// MOCK GET ALL OFFICES
mock.onGet("/api/offices").reply(200, offices);

// Mock POST ADD OFFICE
mock.onPost("/api/offices").reply((config) => {
  const newOffice = JSON.parse(config.data);
  newOffice.id = offices.length + 1;
  offices.push(newOffice);
  return [200, newOffice];
});

// Mock GET OFFICE BY ID
mock.onGet(/\/api\/offices\/\d+/).reply((config) => {
  const officeId = parseInt(config.url.match(/\/api\/offices\/(\d+)/)[1]);
  const office = offices.find((office) => office.id === officeId);
  if (office) {
    return [200, office];
  } else {
    return [404, { message: "Office not found" }];
  }
});

// MOCK DELETE STAFF MEMBER
mock.onDelete(/\/api\/offices\/\d+\/staff\/\d+/).reply((config) => {
  const match = config.url.match(/\/api\/offices\/(\d+)\/staff\/(\d+)/);
  const officeId = parseInt(match[1]);
  const staffMemberId = parseInt(match[2]);

  const office = offices.find((office) => office.id === officeId);

  if (office) {
    const staffMemberIndex = office.staffMembersInOffice.findIndex(
      (staff) => staff.id === staffMemberId
    );
    if (staffMemberIndex !== -1) {
      office.staffMembersInOffice.splice(staffMemberIndex, 1);
      return [200];
    } else {
      return [404, { message: "Staff member not found" }];
    }
  } else {
    return [404, { message: "Office not found" }];
  }
});

// Mock DELETE OFFICE
mock.onDelete(/\/api\/offices\/\d+/).reply((config) => {
  const officeId = parseInt(config.url.match(/\/api\/offices\/(\d+)/)[1]);
  const officeIndex = offices.findIndex((office) => office.id === officeId);
  if (officeIndex !== -1) {
    offices.splice(officeIndex, 1);
    return [200];
  } else {
    return [404, { message: "Office not found" }];
  }
});

// MOCK ADD STAFF MEMBER
mock.onPost(/\/api\/offices\/\d+\/staff/).reply((config) => {
  const officeId = parseInt(
    config.url.match(/\/api\/offices\/(\d+)\/staff/)[1]
  );
  const newStaffMember = JSON.parse(config.data);

  const office = offices.find((office) => office.id === officeId);
  if (office) {
    newStaffMember.id = office.staffMembersInOffice.length + 1; // Generate a new ID
    office.staffMembersInOffice.push(newStaffMember);
    return [200, newStaffMember];
  } else {
    return [404, { message: "Office not found" }];
  }
});

// MOCK EDIT STAFF MEMBER
mock.onPut(/\/api\/offices\/\d+\/staff\/\d+/).reply((config) => {
  const match = config.url.match(/\/api\/offices\/(\d+)\/staff\/(\d+)/);
  const officeId = parseInt(match[1]);
  const staffMemberId = parseInt(match[2]);
  const updatedStaffMember = JSON.parse(config.data);

  const office = offices.find((office) => office.id === officeId);
  if (office) {
    const staffMemberIndex = office.staffMembersInOffice.findIndex(
      (member) => member.id === staffMemberId
    );
    if (staffMemberIndex !== -1) {
      office.staffMembersInOffice[staffMemberIndex] = {
        ...office.staffMembersInOffice[staffMemberIndex],
        ...updatedStaffMember,
      };
      return [200, office.staffMembersInOffice[staffMemberIndex]];
    } else {
      return [404, { message: "Staff member not found" }];
    }
  } else {
    return [404, { message: "Office not found" }];
  }
});

// Mock PUT EDIT OFFICE
mock.onPut(/\/api\/offices\/\d+/).reply((config) => {
  const officeId = parseInt(config.url.match(/\/api\/offices\/(\d+)/)[1]);
  const updatedOffice = JSON.parse(config.data);

  const officeIndex = offices.findIndex((office) => office.id === officeId);
  if (officeIndex !== -1) {
    offices[officeIndex] = { ...offices[officeIndex], ...updatedOffice };
    return [200, offices[officeIndex]];
  } else {
    return [404, { message: "Office not found" }];
  }
});

export { offices };
