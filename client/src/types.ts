// interface Court {
//   _id: string;
//   name: string;
//   images: string[];
//   price: string;
//   address: string;
//   sports: string[];
//   location: string;
// }

interface Court {
  _id: string;
  name: string;
  images: string[];
  price: string;
  address: string;
  sports: string[];
  location: {
    lat?: number;
    lng?: number;
  };
}

type EmailTemplateProps = {
  court: string;
  address: string;
  date: string;
  time: string;
};

interface User {
  username: string;
  email: string;
  password: string;
}

interface Location {
  _id: string;
  name: string;
}

interface Sport {
  _id: string;
  name: string;
}

interface TimeSlot {
  _id: string;
  time: string;
  available: boolean;
}

export { Court, EmailTemplateProps, User, Location, Sport, TimeSlot };
