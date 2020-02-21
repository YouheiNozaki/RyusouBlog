export type IHead = {
  title: string;
  description: string;
  keyword: string;
  image: string;
  url: string;
};

export type IPost = {
  id: string;
  title: string;
  tags: [
    {
      id: string;
      name: string;
    },
  ];
  day?: Date;
  image: {
    url: string;
  };
  content: string;
};

export type IFormData = {
  firstName: string;
  lastName: string;
  email: string;
  body: string;
};
