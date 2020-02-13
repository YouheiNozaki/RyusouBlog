export type Post = {
  id: string;
  title: string;
  tags: [
    {
      id: string;
      name: string;
    },
  ];
  day: Date;
  image: {
    url: string;
  };
  content: string;
};
