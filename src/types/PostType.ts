interface PostType {
  _id: string;
  title: string;
  content: string;
  brief: string;
  totalReactions: number;
  replyCount: number;
  responseCount: number;
  coverImage: { url: string };
  slug: string;
  popularity: number;
}

export type { PostType };
