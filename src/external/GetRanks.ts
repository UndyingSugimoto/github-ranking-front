import fetcher from "../util/Fetcher";
import { RankgByLanguageRes } from "./data/RanksByLanguageRes";

export async function getRanks() {
  const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT as string;
  const url = "/github-ranking/ranking";
  return await fetcher<RankgByLanguageRes>(endpoint + url, {
    method: "GET"
  });
}