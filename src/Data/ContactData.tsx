export interface FormValues {
  id: number;
  name?: string;
  role?: string;
  skills: string[];
  startDate?: string;
  preference?: string;
}

const today = new Date();
export const contactData: FormValues[] = [
  {
    id: 1,
    name: "Sean Spencer",
    role: "Dev",
    skills: ["React", "Angular"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: "Work From Home",
  },
  {
    id: 2,
    name: "Burton Guster",
    role: "Dev",
    skills: ["React"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: "Work From Home",
  },
  {
    id: 3,
    name: "Juliet O'Hara",
    role: "Dev",
    skills: ["React"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: "Work From Home",
  },
  {
    id: 4,
    name: "Lassy",
    role: "Dev",
    skills: ["React"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: "Work From Home",
  },
];
