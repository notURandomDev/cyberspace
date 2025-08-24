export type GithubInfo = {
  name: string;
  url: string;
};

export interface ProjectWebsiteInfo {
  name: string;
  url: string;
}

export type ProjectType =
  | "web-frontend"
  | "miniprogram"
  | "backend"
  | "client"
  | "full-stack";

export type ProjectScale = "team" | "solo";
