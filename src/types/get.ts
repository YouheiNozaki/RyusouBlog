export interface GET {
  'https://ryusou-mtkh.microcms.io/api/v1/posts/': {
    res: {
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
}
