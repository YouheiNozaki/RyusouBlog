export type HeadType = {
  title: string;
  description: string;
  keyword: string;
  image: string;
  url: string;
};

export type Post = {
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

export type PostsSchema = {
  body: {
    contents: [
      {
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
      },
    ];
  };
};

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  body: string;
};
