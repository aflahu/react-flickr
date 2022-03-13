export interface IDataItem {
  media: {
    m: string;
  }[];
  _id: string;
  title: string;
  link: string;
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

export interface IData {
  data: IDataItem[];
  count: number;
}
